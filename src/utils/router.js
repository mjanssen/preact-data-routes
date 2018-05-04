import { fetchFileOrUrl } from './fetch';
import DataStore from '../store/DataStore';
import _routes from '../settings/routes';

export const routes = _routes;

export function getRoutes() {
  return routes;
}

export function getResources() {
  Object.entries(routes).map(route => {
    const routeData = route[1];
  });
}

export function getResourcesForPage(page, load = true) {
  const pageData = {};
  let resourcesLoaded = true;

  return new Promise(resolve => {
    if (typeof page === 'undefined') {
      return resolve(false);
    }

    if (typeof routes[page].data !== 'undefined') {
      routes[page].data.forEach(getApi => {
        const key = getApi.name;
        const apiData = getApi();
        const url = apiData.api;

        if (typeof DataStore.state[url] !== 'undefined') {
          pageData[key] = DataStore.state[url];
        } else {
          resourcesLoaded = false;
          if (load) {
            fetchFileOrUrl(url).then(data => {
              DataStore.save(url, data);
            });
          }
        }
      });
    }

    resolve({ pageData, resourcesLoaded });
  });
}

export function pageResourcesLoaded(page) {
  if (typeof page === 'undefined') {
    return false;
  }

  const pageData = {};
  let resourcesLoaded = true;
  if (typeof routes[page].data !== 'undefined') {
    routes[page].data.forEach(getApi => {
      const apiData = getApi();
      const url = apiData.api;
      if (typeof DataStore.state[url] === 'undefined') {
        resourcesLoaded = false;
      }
    });
  }

  return resourcesLoaded;
}

export default { getRoutes, getResources, routes, getResourcesForPage, pageResourcesLoaded };

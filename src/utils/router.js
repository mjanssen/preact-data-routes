import _routes from '../settings/routes';
import { fetchFileOrUrl } from './fetch';
import store from '../store/store';
import data from '../settings/data';

export const routes = _routes;

export function fetchResourcesForPage(page, state) {
  if (typeof routes[page].data === 'undefined') {
    return null;
  }

  return new Promise(resolve => {
    const counter = {
      current: 0,
      total: routes[page].data.length,
    };
    const urlData = {};

    routes[page].data.forEach(apiName => {
      const api = data[apiName];
      const apiData = api();
      const url = apiData.api;
      if (typeof state[url] === 'undefined') {
        fetchFileOrUrl(url).then(data => {
          counter.current += 1;
          urlData[url] = data;

          if (counter.current === counter.total) {
            resolve(urlData);
          }
        });
      } else {
        counter.current += 1;
      }
    });
  });
}

export function getPageResources(page) {
  const pageData = {};
  let resourcesLoaded = true;
  const currentData = store.getState().data;

  if (typeof routes[page].data !== 'undefined') {
    routes[page].data.forEach(apiName => {
      const key = apiName;
      const api = data[apiName];
      const apiData = api();
      const url = apiData.api;

      if (typeof currentData[url] === 'undefined') {
        resourcesLoaded = false;
      }
      pageData[key] = currentData[url];
    });
  }

  return resourcesLoaded && pageData;
}

export default { routes, fetchResourcesForPage, getPageResources };

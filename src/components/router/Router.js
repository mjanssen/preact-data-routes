import PRouter from 'preact-router';
import AsyncRoute from 'preact-async-route';
import PageRenderer from '../../renderers/PageRenderer';
import { routes, getResources } from '../../utils/router';

export default function Router() {
  return (
    <PRouter>
      {Object.entries(routes).map(route => {
        const page = route[0];
        const routeData = route[1];
        return (
          <AsyncRoute
            page={page}
            component={PageRenderer}
            routeData={routeData}
            path={routeData.path}
          />
        );
      })}
    </PRouter>
  );
}

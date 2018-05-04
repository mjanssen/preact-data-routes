import { Subscribe } from 'unstated';
import Router from '../components/router/Router';
import Header from '../components/header/Header';
import DataStore from '../store/DataStore';

export default function RenderContainer() {
  return (
    <Subscribe to={[DataStore]}>
      {data => {
        return (
          <div>
            <Header />
            <Router data={data} />
          </div>
        );
      }}
    </Subscribe>
  );
}

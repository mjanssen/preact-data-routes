import { Provider } from 'unistore/preact';
import store from '../store/store';

export default function StateContainer() {
  return <Provider store={store}>{this.props.children}</Provider>;
}

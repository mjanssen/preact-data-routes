import { Provider } from 'preact-redux';
import store from '../store/store';

export default function StateContainer() {
  return <Provider store={store}>{this.props.children}</Provider>;
}

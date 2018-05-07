import './css/style.css';
import { render, h } from 'preact';
import AppContainer from './containers/AppContainer';
window.h = h;
render(<AppContainer />, document.body);

// export default function App() {
//   return <AppContainer />;
// }

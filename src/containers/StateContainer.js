import { Provider, Subscribe, Container } from 'unstated';

export default function StateContainer(props) {
  return <Provider>{props.children}</Provider>;
}

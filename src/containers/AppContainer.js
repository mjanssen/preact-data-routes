import RenderContainer from './RenderContainer';
import StateContainer from './StateContainer';

export default function AppContainer() {
  return (
    <StateContainer>
      <RenderContainer />
    </StateContainer>
  );
}

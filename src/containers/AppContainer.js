import StateContainer from './StateContainer';
import RenderContainer from './RenderContainer';

export default function AppContainer() {
  return (
    <StateContainer>
      <RenderContainer />
    </StateContainer>
  );
}

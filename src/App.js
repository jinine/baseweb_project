import './App.css';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import Header from './components/Header';

const engine = new Styletron();
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

function App() {
  return (
    <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
    <Header />
      <Centered>
       
      </Centered>
    </BaseProvider>
  </StyletronProvider>
  );
}

export default App;

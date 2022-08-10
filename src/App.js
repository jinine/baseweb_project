//dependencies
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';

//importing pages/components
import Header from './components/Header';
import Homepage from './pages/Homepage';
import FooterFilled from './components/footer_filled';

const engine = new Styletron();
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

function App() {
  return (
    <>
    <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
    <Header />
      <Centered>
        <Homepage />
     
      </Centered>
      <FooterFilled />
    </BaseProvider>
  </StyletronProvider>
  </>
  );
}

export default App;

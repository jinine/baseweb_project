import './App.css';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import Header from './components/Header';
import Footer from './components/footer';
// import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

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
      <Footer>
        <Footer.Wrapper>
          <Centered>
            <Footer.Title>
              Thank you for visiting. 
            </Footer.Title>
          </Centered>
        </Footer.Wrapper>
      </Footer>
    </BaseProvider>
  </StyletronProvider>
  </>
  );
}

export default App;

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Container from './components/styles/Container.styled';
import NavBar from './components/NavBar';

const theme = {
  colors: {
    main: orange,
    header: black,
    text: grey,
  },
  mobile: 768px,
}

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
<!--         <NavBar /> -->
        <Container>
          <h1>Search recipe app</h1>
        </Container>
       </>
     </ThemeProvider>
  );
}

export default App;

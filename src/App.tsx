import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import GlobalStyle from './styles/global';
import Router from './Router';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;

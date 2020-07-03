import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';

import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

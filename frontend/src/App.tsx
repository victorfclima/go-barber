import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer/index';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;

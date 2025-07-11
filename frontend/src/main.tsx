import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from './utils/MuiTheme.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThirdwebProvider } from 'thirdweb/react';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThirdwebProvider>
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider>
            <App />
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    </ThirdwebProvider>
  </StrictMode>
);

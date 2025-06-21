import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from './utils/MuiTheme.tsx';
import Loading from '../@ui-component/Comman/Loading.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);

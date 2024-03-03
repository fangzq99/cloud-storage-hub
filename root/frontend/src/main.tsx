import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/universal.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { RoutePages } from './router';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <RoutePages />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

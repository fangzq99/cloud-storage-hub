import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/login_page.tsx';
import './css/universal.css';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LoginPage />
    </ThemeProvider>
  </React.StrictMode>
);

//// Another way of initializing root
// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

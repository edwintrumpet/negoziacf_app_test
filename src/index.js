import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './styles/muiTheme';
import App from './App';

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>, document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import Home from './Legco/Home';

var legcoRoot = document.getElementById('legco-root');
if (legcoRoot) {
  const theme = createMuiTheme({ palette: {primary: grey}});
  ReactDOM.render(
   <MuiThemeProvider theme={theme}>
     <Home />
   </MuiThemeProvider>
  , legcoRoot);
} else {
  console.log('legco not found');
}

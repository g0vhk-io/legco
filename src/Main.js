import Home from './Home';
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
var mountNode = document.getElementById('root');
const theme = createMuiTheme({ palette: {primary: grey}});
ReactDOM.render(
 <MuiThemeProvider theme={theme}>
   <Home/>
 </MuiThemeProvider>
, mountNode);

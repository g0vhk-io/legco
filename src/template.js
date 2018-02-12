import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Home from './Home';


export default ({ title, app }) => {
  const sheetsRegistry = new SheetsRegistry();
  const generateClassName = createGenerateClassName();
  const theme = createMuiTheme({});
  const wrappedApp = (
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        {app}
      </MuiThemeProvider>
    </JssProvider>
  );
  const body = renderToString(wrappedApp);
  const css = sheetsRegistry.toString();
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1">       
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      
      <body>
        <div id="root">${body}</div>
        <style id="jss-server-side">${css}</style>
      </body>
      
      <script src="/assets/bundle.js"></script>
    </html>
  `;
};

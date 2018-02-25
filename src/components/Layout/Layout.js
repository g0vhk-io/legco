/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { SheetsRegistry, JssProvider } from 'react-jss';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

const theme = createMuiTheme({});

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const generateClassName = createGenerateClassName();
    const sheetsRegistry = new SheetsRegistry();
    return (
      <div>
        <JssProvider
          registry={sheetsRegistry}
          generateClassName={generateClassName}
        >
          <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
            {this.props.children}
          </MuiThemeProvider>
        </JssProvider>
      </div>
    );
  }
}

export default Layout;

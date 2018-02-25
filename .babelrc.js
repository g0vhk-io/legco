/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// Babel configuration
// https://babeljs.io/docs/usage/api/
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-stage-2',
    '@babel/preset-react',
  ],
  plugins: [
    [
      'babel-plugin-transform-require-ignore',
      { extensions: ['.css', '.scss'] },
    ],
  ],
  ignore: ['node_modules', 'build'],
};

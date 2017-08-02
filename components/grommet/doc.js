'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Grommet) {
  return (0, _reactDesc.schema)(Grommet, {
    description: 'This is the top level Grommet container.',
    usage: 'import { Grommet } from \'grommet\';\n  <Grommet>...</Grommet>',
    props: {
      dir: [_reactDesc.PropTypes.oneOf(['rtl', 'ltr']), 'Whether text should be rendered right to left or not. Defaults to\n      inherit from the document context.'],
      theme: [_reactDesc.PropTypes.object, 'Custom styles for Grommet app component.']
    }
  });
};
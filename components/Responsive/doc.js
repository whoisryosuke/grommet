'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Responsive) {
  return (0, _reactDesc.schema)(Responsive, {
    description: 'A react component that handles responsive breakpoints.',
    usage: 'import { Responsive } from \'grommet\';\n  <Responsive onChange={() => {}} />',
    props: {
      onChange: [_reactDesc.PropTypes.func, 'Function that will be called when the browser window crosses a responsive\n      breakpoint. It will be passed the current media size name, either\n      \'narrow\' or \'wide\'']
    }
  });
};
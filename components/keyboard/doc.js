'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Keyboard) {
  return (0, _reactDesc.schema)(Keyboard, {
    description: 'A react component that handles keyboard key presses.',
    usage: 'import { Keyboard } from \'grommet\';\n  <Keyboard onUp={() => {}} />',
    props: {
      onBackspace: [_reactDesc.PropTypes.func, 'Function that will be called when the user presses the backspace key.'],
      onComma: [_reactDesc.PropTypes.func, 'Function that will be called when the user presses the comma key.'],
      onDown: [_reactDesc.PropTypes.func, 'Function that will be called when the user presses the down key.'],
      onEnter: [_reactDesc.PropTypes.func, 'Function that will be called when the user presses the enter key.'],
      onEsc: [_reactDesc.PropTypes.func, 'Function that will be called when the user presses the esc key.'],
      onLeft: [_reactDesc.PropTypes.func, 'Function that will be called when the user presses the left key.'],
      onRight: [_reactDesc.PropTypes.func, 'Function that will be called when the user presses the right key.'],
      onShift: [_reactDesc.PropTypes.func, 'Function that will be called when the user presses the shift key.'],
      onSpace: [_reactDesc.PropTypes.func, 'Function that will be called when the user presses the space key.'],
      onTab: [_reactDesc.PropTypes.func, 'Function that will be called when the user presses the tab key.'],
      onUp: [_reactDesc.PropTypes.func, 'Function that will be called when the user presses the up key.']
    }
  });
};
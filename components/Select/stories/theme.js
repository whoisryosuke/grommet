'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _grommetIcons = require('grommet-icons');

var _utils = require('../../../utils');

var _ArrowDown = require('./components/icons/ArrowDown');

var _ArrowDown2 = _interopRequireDefault(_ArrowDown);

var _SearchInput = require('./components/SearchInput');

var _SearchInput2 = _interopRequireDefault(_SearchInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  global: {
    colors: {
      border: '#e0e0e0',
      focus: '#2196F3',
      gray: 'rgba(0, 0, 0, 0.54)'
    },
    drop: {
      background: '#ffffff'
    },
    elevation: {
      light: {
        small: '0 2px 2px 0 rgba(0,0,0,0.19)',
        medium: '0 3px 3px 0 rgba(0,0,0,0.18)',
        large: '0 4px 4px 0 rgba(0,0,0,0.17)',
        xlarge: '0 24px 24px 0 rgba(0, 0, 0, 0.12)'
      }
    },
    size: {
      xxsmall: '24px'
    }
  },
  checkBox: {
    border: {
      color: {
        light: (0, _styledComponents.css)(['', ''], function (props) {
          return (0, _utils.colorForName)('gray', props.theme);
        })
      },
      radius: '2px'
    },
    hover: {
      border: {
        color: undefined
      }
    },
    icons: {
      checked: _grommetIcons.FormCheckmark
    },
    size: '18px',
    extend: function extend(props) {
      return '\n      input:checked + div {\n        border-color: ' + (0, _utils.colorForName)('brand', props.theme) + ';\n        background: ' + (0, _utils.colorForName)('brand', props.theme) + ';\n\n        > svg {\n          stroke: ' + (0, _utils.colorForName)('white', props.theme) + ';\n        }\n      }\n    ';
    }
  },
  drop: {
    maxHeight: '384px'
  },
  select: {
    icons: {
      down: _ArrowDown2.default
    },
    searchInput: _SearchInput2.default
  },
  textInput: {
    extend: function extend(props) {
      return '\n      color: ' + (0, _utils.colorForName)('gray', props.theme) + ';\n      font-weight: 400;\n      font-size: 13px;\n      padding: 14px;\n    ';
    }
  }
};
'use strict';

exports.__esModule = true;
exports.Tab = exports.Tabs = undefined;

var _Tabs = require('./Tabs');

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tabs).default;
  }
});

var _Tab = require('./Tab');

Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tab).default;
  }
});

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Tabs2.default;
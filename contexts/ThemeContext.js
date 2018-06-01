'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _vanilla = require('../themes/vanilla');

var _vanilla2 = _interopRequireDefault(_vanilla);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeContext = _react2.default.createContext(_vanilla2.default);

exports.default = ThemeContext;
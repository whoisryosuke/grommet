'use strict';

exports.__esModule = true;
exports.theme = exports.Grommet = exports.Button = undefined;

var _button = require('./components/button');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _button.Button;
  }
});

var _grommet = require('./components/grommet');

Object.defineProperty(exports, 'Grommet', {
  enumerable: true,
  get: function get() {
    return _grommet.Grommet;
  }
});

var _theme = require('./theme');

var theme = exports.theme = {
  vanilla: _theme.vanilla, hpe: _theme.hpe
};

exports.default = _grommet.Grommet;
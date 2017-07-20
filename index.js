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

var _themes = require('./themes');

var theme = exports.theme = {
  vanilla: _themes.vanilla, hpe: _themes.hpe
};
'use strict';

exports.__esModule = true;
exports.strokeProps = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('../../utils');

var strokeProps = exports.strokeProps = function strokeProps(color, theme) {
  var result = {};
  if (color) {
    if ((typeof color === 'undefined' ? 'undefined' : _typeof(color)) === 'object') {
      result.stroke = (0, _utils.colorForName)(color.color, theme);
      if (color.opacity) {
        result.strokeOpacity = color.opacity === true ? theme.global.opacity.medium : theme.global.opacity[color.opacity];
      }
    } else {
      result.stroke = (0, _utils.colorForName)(color, theme);
    }
  }
  return result;
};

exports.default = { strokeProps: strokeProps };
'use strict';

exports.__esModule = true;
exports.backgroundProps = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require('../../utils');

var backgroundProps = exports.backgroundProps = function backgroundProps(background, theme) {
  var result = {};
  if (background) {
    if ((typeof background === 'undefined' ? 'undefined' : _typeof(background)) === 'object') {
      result.stroke = (0, _utils.colorForName)(background.color, theme);
      if (background.opacity) {
        result.strokeOpacity = background.opacity === true ? theme.global.opacity.medium : theme.global.opacity[background.opacity];
      }
    } else {
      result.stroke = (0, _utils.colorForName)(background, theme);
    }
  }
  return result;
};

exports.default = { backgroundProps: backgroundProps };
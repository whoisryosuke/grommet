'use strict';

exports.__esModule = true;
exports.inputStyle = exports.focusStyle = exports.baseStyle = undefined;

var _styledComponents = require('styled-components');

var _mixins = require('./mixins');

var baseStyle = exports.baseStyle = (0, _styledComponents.css)(['font-family:', ';font-size:', ';line-height:', ';color:', ';background-color:', ';box-sizing:border-box;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;*{box-sizing:inherit;}'], function (props) {
  return props.theme.global.font.family;
}, function (props) {
  return (0, _mixins.parseMetricToInt)(props.theme.global.font.size) / 16 * 1 + 'em';
}, function (props) {
  return (0, _mixins.parseMetricToInt)(props.theme.global.lineHeight) / (0, _mixins.parseMetricToInt)(props.theme.global.font.size);
}, function (props) {
  return props.theme.global.colors.text;
}, function (props) {
  return props.theme.global.colors.background;
});

var focusStyle = exports.focusStyle = (0, _styledComponents.css)(['border-color:', ';box-shadow:0 0 1px 1px ', ';'], function (props) {
  return props.theme.global.focus.border.color || props.theme.global.colors.accent[0];
}, function (props) {
  return props.theme.global.focus.border.color || props.theme.global.colors.accent[0];
});

var inputStyle = exports.inputStyle = (0, _styledComponents.css)(['padding:', 'px;border:', ' solid ', ';border-radius:', ';outline:none;background-color:transparent;color:inherit;font:inherit;margin:0;', ''], function (props) {
  return (0, _mixins.parseMetricToInt)(props.theme.global.spacing) / 2 - (0, _mixins.parseMetricToInt)(props.theme.global.input.border.width);
}, function (props) {
  return props.theme.global.input.border.width;
}, function (props) {
  return props.theme.global.input.border.color;
}, function (props) {
  return props.theme.global.input.border.radius;
}, function (props) {
  return props.focus && focusStyle;
});

exports.default = {
  baseStyle: baseStyle, inputStyle: inputStyle, focusStyle: focusStyle
};
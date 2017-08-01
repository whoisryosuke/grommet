'use strict';

exports.__esModule = true;
exports.inputStyle = undefined;
exports.fontSize = fontSize;
exports.lapAndUp = lapAndUp;

var _styledComponents = require('styled-components');

var _utils = require('./utils');

var lapStart = '481px';

var inputStyle = exports.inputStyle = (0, _styledComponents.css)(['padding:', 'px;border:', ' solid ', ';border-radius:', ';outline:none;background-color:transparent;color:inherit;font:inherit;margin:0;', ''], function (props) {
  return (0, _utils.parseMetricToInt)(props.theme.global.spacing) / 2 - (0, _utils.parseMetricToInt)(props.theme.global.input.border.width);
}, function (props) {
  return props.theme.global.input.border.width;
}, function (props) {
  return props.theme.global.input.border.color;
}, function (props) {
  return props.theme.global.input.border.radius;
}, function (props) {
  return props.focus && _utils.focusStyle;
});

function fontSize(size, lineHeight) {
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';'], function (props) {
    return (0, _utils.parseMetricToInt)(size) / (0, _utils.parseMetricToInt)(props.theme.global.font.size) * 1 + 'rem';
  }, function (props) {
    return lineHeight || Math.ceil((0, _utils.parseMetricToInt)(size) / (0, _utils.parseMetricToInt)(props.theme.global.lineHeight)) * ((0, _utils.parseMetricToInt)(props.theme.global.lineHeight) / (0, _utils.parseMetricToInt)(size)) + 'px';
  });
}

function lapAndUp(content) {
  return '\n    @media only screen and (min-width:' + lapStart + ') { ' + content + '; }\n  ';
}

exports.default = { inputStyle: inputStyle, fontSize: fontSize, lapAndUp: lapAndUp };
'use strict';

exports.__esModule = true;
exports.fontSize = fontSize;
exports.lapAndUp = lapAndUp;

var _styledComponents = require('styled-components');

var _utils = require('./utils');

var lapStart = '481px';

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

exports.default = { lapAndUp: lapAndUp };
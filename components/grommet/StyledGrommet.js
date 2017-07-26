'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('../mixins');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var centeredStyle = (0, _styledComponents.css)(['width:100%;max-width:', ';margin-left:auto;margin-right:auto;'], function (props) {
  return props.theme.brand.centerColumnWidth;
});

var StyledGrommet = _styledComponents2.default.div.withConfig({
  displayName: 'StyledGrommet__StyledGrommet'
})(['font-family:', ';font-size:', ';line-height:', ';color:', ';background-color:', ';box-sizing:border-box;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;*{box-sizing:inherit;}', ' ', ' ', ''], function (props) {
  return props.theme.brand.font.family;
}, function (props) {
  return (0, _utils.parseMetricToInt)(props.theme.brand.font.size) / 16 * 1 + 'em';
}, function (props) {
  return (0, _utils.parseMetricToInt)(props.theme.brand.lineHeight) / (0, _utils.parseMetricToInt)(props.theme.brand.font.size);
}, function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.theme.colors.background;
}, (0, _mixins.lapAndUp)('\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    height: 100%;\n    width: 100%;\n    overflow: visible;\n  '), function (props) {
  return props.centered && centeredStyle;
}, function (props) {
  return props.theme.brand.font.face;
});

exports.default = StyledGrommet.extend(_templateObject, function (props) {
  return props.theme.grommet.extend;
});
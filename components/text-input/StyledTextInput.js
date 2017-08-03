'use strict';

exports.__esModule = true;
exports.StyledSuggestions = exports.StyledSuggestion = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var placeholderColor = (0, _styledComponents.css)(['color:', ';'], function (props) {
  return props.theme.global.placeholder.color;
});
var StyledTextInput = _styledComponents2.default.input.withConfig({
  displayName: 'StyledTextInput__StyledTextInput'
})(['', ' &::-webkit-input-placeholder{', '}&::-moz-placeholder{', '}&:-ms-input-placeholder{', '}&::-moz-focus-inner{border:none;outline:none;}&:focus{', '}'], _utils.inputStyle, placeholderColor, placeholderColor, placeholderColor, _utils.focusStyle);

var activeStyle = (0, _styledComponents.css)(['background-color:', ';color:', ';'], function (props) {
  return props.theme.global.hover.backgroundColor;
}, function (props) {
  return props.theme.global.hover.textColor;
});
var selectedStyle = (0, _styledComponents.css)(['background-color:', ';color:', ';'], function (props) {
  return props.theme.global.selected.backgroundColor || (0, _polished.lighten)(0.23, props.theme.global.colors.brand);
}, function (props) {
  return props.theme.global.selected.textColor;
});

var StyledSuggestion = exports.StyledSuggestion = _styledComponents2.default.div.withConfig({
  displayName: 'StyledTextInput__StyledSuggestion'
})(['padding:', ';', ' ', ''], function (props) {
  return (0, _utils.parseMetricToInt)(props.theme.global.spacing) / 4 + 'px ' + props.theme.global.spacing;
}, function (props) {
  return props.selected && selectedStyle;
}, function (props) {
  return props.active && activeStyle;
});

var StyledSuggestions = exports.StyledSuggestions = _styledComponents2.default.ol.withConfig({
  displayName: 'StyledTextInput__StyledSuggestions'
})(['border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;']);

exports.default = StyledTextInput.extend(_templateObject, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});
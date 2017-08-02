'use strict';

exports.__esModule = true;
exports.StyledSuggestions = exports.StyledSuggestion = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var placeholderColor = (0, _styledComponents.css)(['color:', ';'], function (props) {
  return props.theme.global.placeholder.color;
});
var StyledTextInput = _styledComponents2.default.input.withConfig({
  displayName: 'StyledTextInput__StyledTextInput'
})(['', ' &::-webkit-input-placeholder{', '}&::-moz-placeholder{', '}&:-ms-input-placeholder{', '}&::-moz-focus-inner{border:none;outline:none;}&:focus{', '}'], _utils.inputStyle, placeholderColor, placeholderColor, placeholderColor, _utils.focusStyle);

// TODO: remove cursor pointer and hover when using button
var suggestionBackgroundStyle = (0, _styledComponents.css)(['background-color:', ';'], function (props) {
  return props.theme.global.hover.backgroundColor;
});

var StyledSuggestion = exports.StyledSuggestion = _styledComponents2.default.li.withConfig({
  displayName: 'StyledTextInput__StyledSuggestion'
})(['padding:', ';cursor:pointer;&:hover{', '}', ''], function (props) {
  return (0, _utils.parseMetricToInt)(props.theme.global.spacing) / 4 + 'px ' + props.theme.global.spacing;
}, suggestionBackgroundStyle, function (props) {
  return props.active && suggestionBackgroundStyle;
});

var StyledSuggestions = exports.StyledSuggestions = _styledComponents2.default.ol.withConfig({
  displayName: 'StyledTextInput__StyledSuggestions'
})(['border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;']);

exports.default = StyledTextInput.extend(_templateObject, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});
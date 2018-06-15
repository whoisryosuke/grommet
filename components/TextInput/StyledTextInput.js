'use strict';

exports.__esModule = true;
exports.StyledSuggestions = exports.StyledPlaceholder = exports.StyledTextInputContainer = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var placeholderColor = (0, _styledComponents.css)(['color:', ';'], function (props) {
  return props.theme.global.colors.placeholder;
});

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.text[props.size];
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';'], data.size, data.height);
};

var plainStyle = (0, _styledComponents.css)(['border:none;-webkit-appearance:none;']);

var StyledTextInput = _styledComponents2.default.input.withConfig({
  displayName: 'StyledTextInput'
})(['', ' width:100%;-webkit-appearance:textfield;', ' ', ' &::-webkit-input-placeholder{', '}&::-moz-placeholder{', '}&:-ms-input-placeholder{', '}&::-moz-focus-inner{border:none;outline:none;}'], _utils.inputStyle, function (props) {
  return props.size && sizeStyle(props);
}, function (props) {
  return props.plain && plainStyle;
}, placeholderColor, placeholderColor, placeholderColor);

var StyledTextInputContainer = exports.StyledTextInputContainer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledTextInput__StyledTextInputContainer'
})(['position:relative;width:100%;']);

var StyledPlaceholder = exports.StyledPlaceholder = _styledComponents2.default.div.withConfig({
  displayName: 'StyledTextInput__StyledPlaceholder'
})(['position:absolute;left:', 'px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;'], function (props) {
  return (0, _utils.parseMetricToNum)(props.theme.global.spacing) / 2 - (0, _utils.parseMetricToNum)(props.theme.global.input.border.width);
});

var StyledSuggestions = exports.StyledSuggestions = _styledComponents2.default.ol.withConfig({
  displayName: 'StyledTextInput__StyledSuggestions'
})(['border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;']);

exports.default = StyledTextInput.extend(_templateObject, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});
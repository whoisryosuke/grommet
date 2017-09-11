var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

import { focusStyle, inputStyle, parseMetricToInt } from '../utils';

var placeholderColor = css(['color:', ';'], function (props) {
  return props.theme.global.placeholder.color;
});

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.text[props.size];
  return css(['font-size:', ';line-height:', ';'], data.size, data.height);
};

var plainStyle = css(['border:none;width:100%;']);

var StyledTextInput = styled.input.withConfig({
  displayName: 'StyledTextInput'
})(['', ' ', ' ', ' &::-webkit-input-placeholder{', '}&::-moz-placeholder{', '}&:-ms-input-placeholder{', '}&::-moz-focus-inner{border:none;outline:none;}&:focus{', '}'], inputStyle, function (props) {
  return props.size && sizeStyle(props);
}, function (props) {
  return props.plain && plainStyle;
}, placeholderColor, placeholderColor, placeholderColor, focusStyle);

export var StyledTextInputContainer = styled.div.withConfig({
  displayName: 'StyledTextInput__StyledTextInputContainer'
})(['', ''], function (props) {
  return props.plain && css(['width:100%']);
});

var activeStyle = css(['background-color:', ';color:', ';'], function (props) {
  return props.theme.global.hover.backgroundColor;
}, function (props) {
  return props.theme.global.hover.textColor;
});
var selectedStyle = css(['background-color:', ';color:', ';'], function (props) {
  return props.theme.global.selected.backgroundColor;
}, function (props) {
  return props.theme.global.selected.textColor;
});

export var StyledSuggestion = styled.div.withConfig({
  displayName: 'StyledTextInput__StyledSuggestion'
})(['padding:', ';', ' ', ''], function (props) {
  return parseMetricToInt(props.theme.global.spacing) / 4 + 'px ' + props.theme.global.spacing;
}, function (props) {
  return props.selected && selectedStyle;
}, function (props) {
  return props.active && activeStyle;
});

export var StyledSuggestions = styled.ol.withConfig({
  displayName: 'StyledTextInput__StyledSuggestions'
})(['border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;']);

export default StyledTextInput.extend(_templateObject, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});
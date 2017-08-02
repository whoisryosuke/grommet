var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

import { focusStyle, inputStyle, parseMetricToInt } from '../utils';

var placeholderColor = css(['color:', ';'], function (props) {
  return props.theme.global.placeholder.color;
});
var StyledTextInput = styled.input.withConfig({
  displayName: 'StyledTextInput__StyledTextInput'
})(['', ' &::-webkit-input-placeholder{', '}&::-moz-placeholder{', '}&:-ms-input-placeholder{', '}&::-moz-focus-inner{border:none;outline:none;}&:focus{', '}'], inputStyle, placeholderColor, placeholderColor, placeholderColor, focusStyle);

// TODO: remove cursor pointer and hover when using button
var suggestionBackgroundStyle = css(['background-color:', ';'], function (props) {
  return props.theme.global.hover.backgroundColor;
});

export var StyledSuggestion = styled.li.withConfig({
  displayName: 'StyledTextInput__StyledSuggestion'
})(['padding:', ';cursor:pointer;&:hover{', '}', ''], function (props) {
  return parseMetricToInt(props.theme.global.spacing) / 4 + 'px ' + props.theme.global.spacing;
}, suggestionBackgroundStyle, function (props) {
  return props.active && suggestionBackgroundStyle;
});

export var StyledSuggestions = styled.ol.withConfig({
  displayName: 'StyledTextInput__StyledSuggestions'
})(['border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;']);

export default StyledTextInput.extend(_templateObject, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});
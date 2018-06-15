var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

import { inputStyle, parseMetricToNum } from '../../utils';

var placeholderColor = css(['color:', ';'], function (props) {
  return props.theme.global.colors.placeholder;
});

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.text[props.size];
  return css(['font-size:', ';line-height:', ';'], data.size, data.height);
};

var plainStyle = css(['border:none;-webkit-appearance:none;']);

var StyledTextInput = styled.input.withConfig({
  displayName: 'StyledTextInput'
})(['', ' width:100%;-webkit-appearance:textfield;', ' ', ' &::-webkit-input-placeholder{', '}&::-moz-placeholder{', '}&:-ms-input-placeholder{', '}&::-moz-focus-inner{border:none;outline:none;}'], inputStyle, function (props) {
  return props.size && sizeStyle(props);
}, function (props) {
  return props.plain && plainStyle;
}, placeholderColor, placeholderColor, placeholderColor);

export var StyledTextInputContainer = styled.div.withConfig({
  displayName: 'StyledTextInput__StyledTextInputContainer'
})(['position:relative;width:100%;']);

export var StyledPlaceholder = styled.div.withConfig({
  displayName: 'StyledTextInput__StyledPlaceholder'
})(['position:absolute;left:', 'px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;'], function (props) {
  return parseMetricToNum(props.theme.global.spacing) / 2 - parseMetricToNum(props.theme.global.input.border.width);
});

export var StyledSuggestions = styled.ol.withConfig({
  displayName: 'StyledTextInput__StyledSuggestions'
})(['border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;']);

export default StyledTextInput.extend(_templateObject, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});
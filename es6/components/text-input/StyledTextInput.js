var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

import { focusStyle, inputStyle } from '../utils';

var placeholderColor = css(['color:', ';'], function (props) {
  return props.theme.global.placeholder.color;
});
var StyledTextInput = styled.input.withConfig({
  displayName: 'StyledTextInput__StyledTextInput'
})(['', ' &::-webkit-input-placeholder{', '}&::-moz-placeholder{', '}&:-ms-input-placeholder{', '}&::-moz-focus-inner{border:none;outline:none;}&:focus{', '}'], inputStyle, placeholderColor, placeholderColor, placeholderColor, focusStyle);

export default StyledTextInput.extend(_templateObject, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});
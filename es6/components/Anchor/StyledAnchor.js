var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

import { focusStyle, normalizeColor } from '../../utils';

var disabledStyle = '\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n';

var StyledAnchor = styled.a.withConfig({
  displayName: 'StyledAnchor'
})(['box-sizing:border-box;font-size:inherit;line-height:inherit;color:', ';text-decoration:', ';cursor:pointer;outline:none;', ' ', ' ', ' ', ' ', ''], function (props) {
  return normalizeColor(props.theme.anchor.color, props.theme);
}, function (props) {
  return props.icon ? 'none' : props.theme.anchor.textDecoration;
}, function (props) {
  return !props.disabled && '\n    &:hover {\n      text-decoration: underline;\n    }\n  ';
}, function (props) {
  return !props.primary && props.icon && props.label && '\n    color: ' + props.theme.global.colors.text + ';\n  ';
}, function (props) {
  return props.icon && !props.label && '\n    padding: ' + props.theme.global.edgeSize.small + ';\n  ';
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.focus && focusStyle;
});

export default StyledAnchor.extend(_templateObject, function (props) {
  return props.theme.anchor.extend;
});
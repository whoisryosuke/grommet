var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var StyledWorldMap = /*#__PURE__*/styled.svg.withConfig({
  displayName: 'StyledWorldMap'
})(['width:100%;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){padding-bottom:49%;height:1px;}']);

export default StyledWorldMap.extend(_templateObject, function (props) {
  return props.theme.diagram && props.theme.diagram.extend;
});
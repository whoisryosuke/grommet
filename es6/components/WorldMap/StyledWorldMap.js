var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var StyledWorldMap = styled.svg.withConfig({
  displayName: 'StyledWorldMap'
})(['width:100%;']);

export default StyledWorldMap.extend(_templateObject, function (props) {
  return props.theme.diagram && props.theme.diagram.extend;
});
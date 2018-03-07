var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var fillStyle = '\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex-grow: 1;\n  display: flex;\n';

var StyledStack = /*#__PURE__*/styled.div.withConfig({
  displayName: 'StyledStack'
})(['position:relative;', ''], function (props) {
  return props.fillContainer && fillStyle;
});

export default StyledStack.extend(_templateObject, function (props) {
  return props.theme.stack && props.theme.stack.extend;
});
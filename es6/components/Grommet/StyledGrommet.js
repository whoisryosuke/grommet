var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

import { baseStyle } from '../../utils';

var StyledGrommet = styled.div.withConfig({
  displayName: 'StyledGrommet'
})(['', ' ', ''], baseStyle, function (props) {
  return props.theme.global.font.face;
});

export default StyledGrommet.extend(_templateObject, function (props) {
  return props.theme.grommet.extend;
});
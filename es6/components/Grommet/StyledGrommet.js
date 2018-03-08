var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

import { baseStyle } from '../../utils';

var fullStyle = css(['width:100vw;height:100vh;']);

var StyledGrommet = styled.div.withConfig({
  displayName: 'StyledGrommet'
})(['', ' ', ' ', ''], baseStyle, function (props) {
  return props.full && fullStyle;
}, function (props) {
  return props.theme.global.font.face;
});

export default StyledGrommet.extend(_templateObject, function (props) {
  return props.theme.grommet.extend;
});
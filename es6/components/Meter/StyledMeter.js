var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

var roundStyle = css(['border-radius:', ';'], function (props) {
  return props.theme.global.edgeSize[props.round.size];
});

var StyledMeter = styled.svg.withConfig({
  displayName: 'StyledMeter'
})(['max-width:100%;', ' path{transition:all 0.3s;}'], function (props) {
  return props.round && roundStyle;
});

export default StyledMeter.extend(_templateObject, function (props) {
  return props.theme.meter && props.theme.meter.extend;
});
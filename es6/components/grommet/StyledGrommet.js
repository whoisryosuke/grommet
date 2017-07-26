var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

import { lapAndUp } from '../mixins';
import { parseMetricToInt } from '../utils';

var centeredStyle = css(['width:100%;max-width:', ';margin-left:auto;margin-right:auto;'], function (props) {
  return props.theme.brand.centerColumnWidth;
});

var StyledGrommet = styled.div.withConfig({
  displayName: 'StyledGrommet__StyledGrommet'
})(['font-family:', ';font-size:', ';line-height:', ';color:', ';background-color:', ';box-sizing:border-box;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;*{box-sizing:inherit;}', ' ', ' ', ''], function (props) {
  return props.theme.brand.font.family;
}, function (props) {
  return parseMetricToInt(props.theme.brand.font.size) / 16 * 1 + 'em';
}, function (props) {
  return parseMetricToInt(props.theme.brand.lineHeight) / parseMetricToInt(props.theme.brand.font.size);
}, function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.theme.colors.background;
}, lapAndUp('\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    height: 100%;\n    width: 100%;\n    overflow: visible;\n  '), function (props) {
  return props.centered && centeredStyle;
}, function (props) {
  return props.theme.brand.font.face;
});

export default StyledGrommet.extend(_templateObject, function (props) {
  return props.theme.grommet.extend;
});
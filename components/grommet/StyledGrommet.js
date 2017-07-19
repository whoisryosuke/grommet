var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n'], ['\n  width: 100%;\n  max-width: ', ';\n  margin-left: auto;\n  margin-right: auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  color: ', ';\n  background-color: ', ';\n\n  box-sizing: border-box;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n\n  * {\n    box-sizing: inherit;\n  }\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  font-family: ', ';\n  font-size: ', ';\n  line-height: ', ';\n  color: ', ';\n  background-color: ', ';\n\n  box-sizing: border-box;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n\n  * {\n    box-sizing: inherit;\n  }\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

import { lapAndUp } from '../mixins';
import { parseMetricToInt } from '../utils';

var centeredStyle = css(_templateObject, function (props) {
  return props.theme.brand.centerColumnWidth;
});

var inlineStyle = css(_templateObject2);

var StyledGrommet = styled.div(_templateObject3, function (props) {
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
  return props.inline && inlineStyle;
}, function (props) {
  return props.theme.brand.font.face;
}, function (props) {
  return props.theme.grommet.extend;
});

export default StyledGrommet;
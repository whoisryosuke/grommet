var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

import { focusStyle, parseMetricToNum } from '../../utils';

var rangeTrackStyle = /*#__PURE__*/css(['width:100%;height:', ';background-color:', ';'], function (props) {
  return props.theme.global.focus.border.width;
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.rangeInput.track.color;
});

var rangeThumbStyle = /*#__PURE__*/css(['position:relative;border:', ' solid ', ';border-radius:', ';height:', ';width:', ';overflow:visible;background-color:', ';-webkit-appearance:none;cursor:pointer;'], function (props) {
  return props.theme.global.control.border.width;
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.global.colors.brand;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.theme.global.spacing;
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.black : props.theme.global.colors.white;
});

var firefoxMicrosoftThumbStyle = /*#__PURE__*/css(['', ' margin-top:0px;height:', 'px;width:', 'px;'], rangeThumbStyle, function (props) {
  return parseMetricToNum(props.theme.global.spacing) - parseMetricToNum(props.theme.global.control.border.width) * 2;
}, function (props) {
  return parseMetricToNum(props.theme.global.spacing) - parseMetricToNum(props.theme.global.control.border.width) * 2;
});

var StyledRangeInput = /*#__PURE__*/styled.input.withConfig({
  displayName: 'StyledRangeInput'
})(['position:relative;-webkit-appearance:none;border-color:transparent;height:', ';width:100%;padding:0px;cursor:pointer;overflow-x:hidden;background:transparent;&:focus{outline:none;}&::-moz-focus-inner{border:none;}&::-moz-focus-outer{border:none;}&::-webkit-slider-runnable-track{', '}&::-webkit-slider-thumb{', ' margin-top:-', 'px;', '}&::-moz-range-track{', '}&::-moz-range-thumb{', '}&::-ms-thumb{', '}', ' &::-ms-track{', ' border-color:transparent;color:transparent;}&::-ms-fill-lower{background:', ';border-color:transparent;}&::-ms-fill-upper{background:', ';border-color:transparent;}', ''], function (props) {
  return props.theme.global.spacing;
}, rangeTrackStyle, rangeThumbStyle, function (props) {
  return Math.round(parseMetricToNum(props.theme.global.spacing) * 0.45);
}, function (props) {
  return !props.disabled && css(['&:hover{border-color:', ';}'], props.grommet.dark ? props.theme.global.colors.white : props.theme.global.hover.textColor);
}, rangeTrackStyle, firefoxMicrosoftThumbStyle, firefoxMicrosoftThumbStyle, function (props) {
  return !props.disabled && css(['&:hover::-moz-range-thumb{border-color:', ';}&:hover::-ms-thumb{border-color:', ';}'], props.grommet.dark ? props.theme.global.colors.white : props.theme.global.hover.textColor, props.grommet.dark ? props.theme.global.colors.white : props.theme.global.hover.textColor);
}, rangeTrackStyle, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.rangeInput.track.color;
}, function (props) {
  return props.grommet.dark ? props.theme.global.colors.white : props.theme.rangeInput.track.color;
}, function (props) {
  return props.focus && focusStyle;
});

export default StyledRangeInput.extend(_templateObject, function (props) {
  return props.theme.rangeInput && props.theme.rangeInput.extend;
});
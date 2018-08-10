var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

import { focusStyle } from '../../utils';

var disabledStyle = '\n  opacity: 0.5;\n  cursor: default;\n';

var hoverStyle = css([':hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:', ';}'], function (props) {
  return props.theme.dark ? props.theme.checkBox.hover.border.color.dark : props.theme.checkBox.hover.border.color.light;
});

export var StyledCheckBoxContainer = styled.label.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxContainer'
})(['display:flex;flex-direction:', ';align-items:center;cursor:pointer;user-select:none;', ' > div:first-child{', '}', ''], function (props) {
  return props.reverse ? 'row-reverse' : 'row';
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.reverse ? 'margin-left: ' + props.theme.global.edgeSize.small + ';' : 'margin-right: ' + props.theme.global.edgeSize.small + ';';
}, function (props) {
  return props.theme.checkBox.hover.border.color && hoverStyle;
});

export var StyledCheckBoxInput = styled.input.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxInput'
})(['position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;margin:0;z-index:1;cursor:pointer;:checked + div{border-color:', ';}:checked + div > svg{display:block;}:checked + span > span{left:', ';background:', ';}'], function (props) {
  return (props.theme.checkBox.check.color || props.theme.global.control.color)[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return (props.theme.checkBox.check.color || props.theme.global.control.color)[props.theme.dark ? 'dark' : 'light'];
});

export var StyledCheckBoxBox = styled.div.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxBox'
})(['box-sizing:border-box;position:relative;top:-1px;display:inline-block;width:', ';height:', ';vertical-align:middle;background:inherit;border:', ' solid;border-color:', ';border-radius:', ';> svg{box-sizing:border-box;position:absolute;top:-2px;left:-2px;display:none;width:', ';height:', ';stroke-width:', ';stroke:', ';}', ';'], function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.color[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.border.radius;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.check.width;
}, function (props) {
  return (props.theme.checkBox.check.color || props.theme.global.control.color)[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.focus && focusStyle;
});

export var StyledCheckBoxToggle = styled.span.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxToggle'
})(['box-sizing:border-box;position:relative;vertical-align:middle;display:inline-block;width:', ';height:', ';border:', ' solid;border-color:', ';border-radius:', ';', ';'], function (props) {
  return props.theme.checkBox.toggle.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.color[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.toggle.radius;
}, function (props) {
  return props.focus && focusStyle;
});

export var StyledCheckBoxKnob = styled.span.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxKnob'
})(['box-sizing:border-box;position:absolute;top:-', ';left:-', ';transition:all 0.3s;width:', ';height:', ';background:', ';border-radius:', ';'], function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.border.width;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return props.theme.checkBox.toggle.color[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.toggle.radius;
});

var StyledCheckBox = styled.div.withConfig({
  displayName: 'StyledCheckBox'
})(['position:relative;']);

export default StyledCheckBox.extend(_templateObject, function (props) {
  return props.theme.checkBox && props.theme.checkBox.extend;
});
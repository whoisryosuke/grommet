'use strict';

exports.__esModule = true;
exports.StyledCheckBoxKnob = exports.StyledCheckBoxToggle = exports.StyledCheckBoxBox = exports.StyledCheckBoxInput = exports.StyledCheckBoxContainer = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var disabledStyle = '\n  opacity: 0.5;\n  cursor: default;\n';

var hoverStyle = (0, _styledComponents.css)([':hover input:not([disabled]) + div,:hover input:not([disabled]) + span{border-color:', ';}'], function (props) {
  return props.theme.dark ? props.theme.checkBox.hover.border.color.dark : props.theme.checkBox.hover.border.color.light;
});

var StyledCheckBoxContainer = exports.StyledCheckBoxContainer = _styledComponents2.default.label.withConfig({
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

var StyledCheckBoxInput = exports.StyledCheckBoxInput = _styledComponents2.default.input.withConfig({
  displayName: 'StyledCheckBox__StyledCheckBoxInput'
})(['position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;margin:0;z-index:1;cursor:pointer;:checked + div{border-color:', ';}:checked + div > svg{display:block;}:checked + span > span{left:', ';background:', ';}'], function (props) {
  return (props.theme.checkBox.check.color || props.theme.global.control.color)[props.theme.dark ? 'dark' : 'light'];
}, function (props) {
  return props.theme.checkBox.size;
}, function (props) {
  return (props.theme.checkBox.check.color || props.theme.global.control.color)[props.theme.dark ? 'dark' : 'light'];
});

var StyledCheckBoxBox = exports.StyledCheckBoxBox = _styledComponents2.default.div.withConfig({
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
  return props.focus && _utils.focusStyle;
});

var StyledCheckBoxToggle = exports.StyledCheckBoxToggle = _styledComponents2.default.span.withConfig({
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
  return props.focus && _utils.focusStyle;
});

var StyledCheckBoxKnob = exports.StyledCheckBoxKnob = _styledComponents2.default.span.withConfig({
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

var StyledCheckBox = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCheckBox'
})(['position:relative;']);

exports.default = StyledCheckBox.extend(_templateObject, function (props) {
  return props.theme.checkBox && props.theme.checkBox.extend;
});
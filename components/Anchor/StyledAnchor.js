'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var disabledStyle = '\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n';

var StyledAnchor = _styledComponents2.default.a.withConfig({
  displayName: 'StyledAnchor'
})(['box-sizing:border-box;font-size:inherit;line-height:inherit;color:', ';text-decoration:', ';cursor:pointer;outline:none;', ' ', ' ', ' ', ' ', ''], function (props) {
  return (0, _utils.normalizeColor)(props.theme.anchor.color, props.theme);
}, function (props) {
  return props.icon ? 'none' : props.theme.anchor.textDecoration;
}, function (props) {
  return !props.disabled && '\n    &:hover {\n      text-decoration: underline;\n    }\n  ';
}, function (props) {
  return !props.primary && props.icon && props.label && '\n    color: ' + props.theme.global.colors.text + ';\n  ';
}, function (props) {
  return props.icon && !props.label && '\n    padding: ' + props.theme.global.edgeSize.small + ';\n  ';
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.focus && _utils.focusStyle;
});

exports.default = StyledAnchor.extend(_templateObject, function (props) {
  return props.theme.anchor.extend;
});
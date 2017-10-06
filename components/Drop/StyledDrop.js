'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StyledDrop = _styledComponents2.default.div.withConfig({
  displayName: 'StyledDrop'
})(['', ' position:fixed;z-index:20;border-radius:', ';overflow:auto;outline:none;', ''], _utils.baseStyle, function (props) {
  return props.theme.global.drop.border.radius;
}, function (props) {
  return (0, _utils.backgroundStyle)(props.background || props.theme.global.drop.backgroundColor, props.theme);
});

exports.default = StyledDrop.extend(_templateObject, function (props) {
  return props.theme.drop && props.theme.drop.extend;
});
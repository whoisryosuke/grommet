'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StyledWorldMap = /*#__PURE__*/_styledComponents2.default.svg.withConfig({
  displayName: 'StyledWorldMap'
})(['width:100%;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){padding-bottom:49%;height:1px;}']);

exports.default = StyledWorldMap.extend(_templateObject, function (props) {
  return props.theme.diagram && props.theme.diagram.extend;
});
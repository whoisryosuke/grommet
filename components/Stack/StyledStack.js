'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var fillStyle = '\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex-grow: 1;\n  display: flex;\n';

var StyledStack = _styledComponents2.default.div.withConfig({
  displayName: 'StyledStack'
})(['position:relative;', ''], function (props) {
  return props.fillContainer && fillStyle;
});

exports.default = StyledStack.extend(_templateObject, function (props) {
  return props.theme.stack && props.theme.stack.extend;
});
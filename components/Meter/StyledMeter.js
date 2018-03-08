'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var roundStyle = (0, _styledComponents.css)(['border-radius:', ';'], function (props) {
  return props.theme.global.edgeSize[props.round.size];
});

var StyledMeter = _styledComponents2.default.svg.withConfig({
  displayName: 'StyledMeter'
})(['max-width:100%;', ' path{transition:all 0.3s;}'], function (props) {
  return props.round && roundStyle;
});

exports.default = StyledMeter.extend(_templateObject, function (props) {
  return props.theme.meter && props.theme.meter.extend;
});
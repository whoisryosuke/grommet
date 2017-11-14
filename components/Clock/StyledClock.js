'use strict';

exports.__esModule = true;
exports.StyledSecond = exports.StyledMinute = exports.StyledHour = exports.StyledCircle = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var StyledCircle = exports.StyledCircle = _styledComponents2.default.circle.withConfig({
  displayName: 'StyledClock__StyledCircle'
})(['stroke-width:', ';stroke:', ';transition:stroke 1s ease-out;', ''], function (props) {
  return props.theme.clock.circle.width;
}, function (props) {
  return props.theme.clock.circle.color.day;
}, function (props) {
  return props.night && (0, _styledComponents.css)(['stroke:', ';fill:', ';transition:fill 1s ease;'], props.theme.clock.circle.color.night, props.theme.clock.circle.color.night);
});

var StyledHour = exports.StyledHour = _styledComponents2.default.line.withConfig({
  displayName: 'StyledClock__StyledHour'
})(['stroke-width:', ';stroke:', ';transition:stroke 1s ease-out;', ''], function (props) {
  return props.theme.clock.hour.width;
}, function (props) {
  return props.night ? props.theme.clock.hour.color.night : props.theme.clock.hour.color.day;
}, function (props) {
  return props.animate && '\n    animation: rotate 43200s infinite linear;\n  ';
});

var StyledMinute = exports.StyledMinute = _styledComponents2.default.line.withConfig({
  displayName: 'StyledClock__StyledMinute'
})(['stroke-width:', ';stroke:', ';transition:stroke 1s ease-out;', ''], function (props) {
  return props.theme.clock.minute.width;
}, function (props) {
  return props.night ? props.theme.clock.minute.color.night : props.theme.clock.minute.color.day;
}, function (props) {
  return props.animate && '\n    animation: rotate 3600s infinite steps(60);\n    animation-delay: 1s;\n  ';
});

var StyledSecond = exports.StyledSecond = _styledComponents2.default.line.withConfig({
  displayName: 'StyledClock__StyledSecond'
})(['stroke-width:', ';stroke:', ';transition:stroke 1s ease-out;', ''], function (props) {
  return props.theme.clock.second.width;
}, function (props) {
  return props.night ? props.theme.clock.second.color.night : props.theme.clock.second.color.day;
}, function (props) {
  return props.animate && '\n    animation: rotate 60s infinite steps(60);\n  ';
});

var StyledClock = _styledComponents2.default.svg.withConfig({
  displayName: 'StyledClock'
})(['width:', ';height:', ';@keyframes rotate{100%{transform:rotateZ(360deg);}}'], function (props) {
  return props.theme.clock.size[props.size];
}, function (props) {
  return props.theme.clock.size[props.size];
});

exports.default = StyledClock.extend(_templateObject, function (props) {
  return props.theme.clock && props.theme.clock.extend;
});
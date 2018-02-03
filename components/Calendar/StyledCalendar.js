'use strict';

exports.__esModule = true;
exports.StyledDay = exports.StyledDayContainer = exports.StyledWeek = exports.StyledWeeks = exports.StyledWeeksContainer = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.calendar[props.size];
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';width:', ';'], data.fontSize, data.lineHeight, props.theme.global.size[props.size]);
};

var StyledCalendar = /*#__PURE__*/_styledComponents2.default.div.withConfig({
  displayName: 'StyledCalendar'
})(['', ''], function (props) {
  return sizeStyle(props);
});

var StyledWeeksContainer = /*#__PURE__*/exports.StyledWeeksContainer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCalendar__StyledWeeksContainer'
})(['overflow:hidden;', ''], function (props) {
  return 'height: ' + (0, _utils.parseMetricToNum)(props.theme.calendar[props.size].daySize) * 6 + 'px;';
});

var slideStyle = function slideStyle(props) {
  var _props$slide = props.slide,
      direction = _props$slide.direction,
      weeks = _props$slide.weeks,
      size = props.size,
      theme = props.theme;
  var _theme$calendar$size = theme.calendar[size],
      daySize = _theme$calendar$size.daySize,
      slideDuration = _theme$calendar$size.slideDuration;

  var amount = (0, _utils.parseMetricToNum)(daySize) * weeks;
  return (0, _styledComponents.css)(['animation ', ' ', ' forwards;'], (0, _styledComponents.keyframes)(['from{transform:translateY(', ')}to{transform:translateY(', ')}'], direction === 'down' ? '-' + amount + 'px' : '0', direction === 'up' ? '-' + amount + 'px' : '0'), slideDuration);
};

var StyledWeeks = /*#__PURE__*/exports.StyledWeeks = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCalendar__StyledWeeks'
})(['position:relative;', ''], function (props) {
  return props.slide && slideStyle(props);
});

var StyledWeek = /*#__PURE__*/exports.StyledWeek = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCalendar__StyledWeek'
})(['display:flex;flex-direction:row;flex-justify:between;']);

var StyledDayContainer = /*#__PURE__*/exports.StyledDayContainer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCalendar__StyledDayContainer'
})(['flex:0 0;']);

var daySizeStyle = function daySizeStyle(props) {
  var data = props.theme.calendar[props.size];
  return (0, _styledComponents.css)(['width:', ';height:', ';'], data.daySize, data.daySize);
};

var StyledDay = /*#__PURE__*/exports.StyledDay = _styledComponents2.default.div.withConfig({
  displayName: 'StyledCalendar__StyledDay'
})(['display:flex;justify-content:center;align-items:center;', ' ', ' ', ''], function (props) {
  return daySizeStyle(props);
}, function (props) {
  return props.background && (0, _utils.backgroundStyle)(props.background, props.theme);
}, function (props) {
  return props.otherMonth && 'opacity: 0.5;';
});

exports.default = StyledCalendar.extend(_templateObject, function (props) {
  return props.theme.calendar && props.theme.calendar.extend;
});
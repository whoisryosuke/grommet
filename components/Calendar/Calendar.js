'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _recompose = require('recompose');

var _grommetIcons = require('grommet-icons');

var _Box = require('../Box');

var _Button = require('../Button');

var _Keyboard = require('../Keyboard');

var _Heading = require('../Heading');

var _hocs = require('../hocs');

var _StyledCalendar = require('./StyledCalendar');

var _StyledCalendar2 = _interopRequireDefault(_StyledCalendar);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buildStartEnd = function buildStartEnd(reference, firstDayOfWeek) {
  var start = new Date(reference);
  start.setDate(1); // first of month
  start = (0, _utils.subtractDays)(start, start.getDay() - firstDayOfWeek); // beginning of week
  var end = (0, _utils.addDays)(start, 7 * 5 + 6); // 5 weeks to end of week
  return { start: start, end: end };
};

var buildState = function buildState(props) {
  var date = props.date,
      dates = props.dates,
      firstDayOfWeek = props.firstDayOfWeek;

  var reference = void 0;
  if (date) {
    reference = new Date(date);
  } else if (dates && dates.length > 0) {
    if (typeof dates[0] === 'string') {
      reference = new Date(dates[0]);
    } else if (Array.isArray(dates[0])) {
      reference = new Date(dates[0][0]);
    } else {
      reference = new Date();
    }
  } else {
    reference = new Date();
  }
  // if (props.locale) {
  //   reference.locale(props.locale);
  // }
  return _extends({}, buildStartEnd(reference, firstDayOfWeek), {
    reference: reference,
    active: new Date(reference)
  });
};

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.setReference = function (reference) {
      var _this$props = _this.props,
          bounds = _this$props.bounds,
          firstDayOfWeek = _this$props.firstDayOfWeek;
      var _this$state = _this.state,
          start = _this$state.start,
          end = _this$state.end;

      if ((0, _utils.betweenDates)(reference, bounds)) {
        var nextStartEnd = buildStartEnd(reference, firstDayOfWeek);
        var nextState = {
          reference: reference,
          active: undefined
        };
        if (nextStartEnd.start.getTime() < start.getTime()) {
          nextState.start = nextStartEnd.start;
          nextState.slide = {
            direction: 'down',
            weeks: (0, _utils.daysApart)(start, nextStartEnd.start) / 7
          };
          clearTimeout(_this.timer);
          _this.timer = setTimeout(function () {
            return _this.setState({ end: nextStartEnd.end, slide: undefined });
          }, 1000);
        } else if (nextStartEnd.end.getTime() > end.getTime()) {
          nextState.end = nextStartEnd.end;
          nextState.slide = {
            direction: 'up',
            weeks: (0, _utils.daysApart)(nextStartEnd.end, end) / 7
          };
          clearTimeout(_this.timer);
          _this.timer = setTimeout(function () {
            return _this.setState({ start: nextStartEnd.start, slide: undefined });
          }, 1000);
        }
        _this.setState(nextState);
      }
    };

    _this.setActive = function (active) {
      var bounds = _this.props.bounds;
      var _this$state2 = _this.state,
          start = _this$state2.start,
          reference = _this$state2.reference,
          end = _this$state2.end;

      if ((0, _utils.betweenDates)(active, bounds)) {
        var nextState = { active: active };
        if (active.getTime() < start.getTime()) {
          nextState.start = (0, _utils.subtractDays)(start, 7);
          nextState.end = (0, _utils.subtractDays)(end, 7);
        } else if (active.getTime() > end.getTime()) {
          nextState.start = (0, _utils.addDays)(start, 7);
          nextState.end = (0, _utils.addDays)(end, 7);
        }
        if (active.getMonth() !== reference.getMonth()) {
          nextState.reference = new Date(active);
        }
        _this.setFocus = true;
        _this.setState(nextState);
      }
    };

    _this.onClickDay = function (dateString) {
      return function () {
        var onSelect = _this.props.onSelect;

        _this.setState({ active: new Date(dateString) });
        onSelect(dateString);
      };
    };

    _this.state = buildState(props);
    return _this;
  }

  Calendar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState(buildState(nextProps));
  };

  Calendar.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.setFocus) {
      this.setFocus = false;
      if (this.activeRef) {
        (0, _reactDom.findDOMNode)(this.activeRef).focus();
      }
    }
  };

  Calendar.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timer);
  };

  Calendar.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        bounds = _props.bounds,
        date = _props.date,
        dates = _props.dates,
        disabled = _props.disabled,
        firstDayOfWeek = _props.firstDayOfWeek,
        locale = _props.locale,
        onSelect = _props.onSelect,
        size = _props.size,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['bounds', 'date', 'dates', 'disabled', 'firstDayOfWeek', 'locale', 'onSelect', 'size', 'theme']);

    var _state = this.state,
        active = _state.active,
        start = _state.start,
        reference = _state.reference,
        end = _state.end,
        slide = _state.slide;


    var previousMonth = (0, _utils.subtractMonths)(reference, 1);
    var nextMonth = (0, _utils.addMonths)(reference, 1);

    var weeks = [];
    var day = new Date(start);
    var days = void 0;

    var _loop = function _loop() {
      if (day.getDay() === firstDayOfWeek) {
        if (days) {
          weeks.push(_react2.default.createElement(
            _StyledCalendar.StyledWeek,
            { key: day.getTime(), theme: theme },
            days
          ));
        }
        days = [];
      }

      var dateString = day.toISOString();
      var content = day.getDate();
      var isActive = active && (0, _utils.sameDay)(day, active);
      var selected = false;
      var inRange = false;
      var background = void 0;

      var selectedState = (0, _utils.withinDates)(day, date || dates);
      if (selectedState === 2) {
        selected = true;
      } else if (selectedState === 1) {
        inRange = true;
      }
      var dayDisabled = (0, _utils.withinDates)(day, disabled);
      if (selected) {
        background = 'brand';
        content = _react2.default.createElement(
          'strong',
          null,
          content
        );
      } else if (inRange) {
        background = { color: 'brand', opacity: 'weak' };
      }

      days.push(_react2.default.createElement(
        _StyledCalendar.StyledDayContainer,
        { key: day.getTime(), size: size, theme: theme },
        _react2.default.createElement(
          _Button.Button,
          {
            ref: function ref(_ref) {
              if (isActive) _this2.activeRef = _ref;
            },
            a11yTitle: day.toDateString(),
            plain: true,
            active: isActive,
            hoverIndicator: !dayDisabled,
            onClick: dayDisabled ? undefined : _this2.onClickDay(dateString)
          },
          _react2.default.createElement(
            _StyledCalendar.StyledDay,
            {
              background: background,
              otherMonth: day.getMonth() !== reference.getMonth(),
              size: size,
              theme: theme
            },
            content
          )
        )
      ));
      day = (0, _utils.addDays)(day, 1);
    };

    while (day.getTime() < end.getTime()) {
      _loop();
    }
    weeks.push(_react2.default.createElement(
      _StyledCalendar.StyledWeek,
      { key: day.getTime(), theme: theme },
      days
    ));

    return _react2.default.createElement(
      _StyledCalendar2.default,
      _extends({ size: size, theme: theme }, rest),
      _react2.default.createElement(
        _Keyboard.Keyboard,
        {
          onUp: function onUp(event) {
            event.preventDefault();
            _this2.setActive((0, _utils.addDays)(active, -7));
          },
          onDown: function onDown(event) {
            event.preventDefault();
            _this2.setActive((0, _utils.addDays)(active, 7));
          },
          onLeft: function onLeft() {
            return _this2.setActive((0, _utils.addDays)(active, -1));
          },
          onRight: function onRight() {
            return _this2.setActive((0, _utils.addDays)(active, 1));
          }
        },
        _react2.default.createElement(
          _Box.Box,
          null,
          _react2.default.createElement(
            _Box.Box,
            { direction: 'row', justify: 'between', align: 'center' },
            _react2.default.createElement(
              _Heading.Heading,
              { level: 3, size: size, margin: 'none' },
              _react2.default.createElement(
                'strong',
                null,
                reference.toLocaleDateString(locale, { month: 'long', year: 'numeric' })
              )
            ),
            _react2.default.createElement(
              _Box.Box,
              { direction: 'row', align: 'center' },
              _react2.default.createElement(_Button.Button, {
                a11yTitle: previousMonth.toLocaleDateString(locale, { month: 'long', year: 'numeric' }),
                icon: size === 'small' ? _react2.default.createElement(_grommetIcons.FormPrevious, null) : _react2.default.createElement(_grommetIcons.Previous, { size: size }),
                onClick: onSelect && (0, _utils.betweenDates)(previousMonth, bounds) ? function () {
                  return _this2.setReference(previousMonth);
                } : undefined
              }),
              _react2.default.createElement(_Button.Button, {
                a11yTitle: nextMonth.toLocaleDateString(locale, { month: 'long', year: 'numeric' }),
                icon: size === 'small' ? _react2.default.createElement(_grommetIcons.FormNext, null) : _react2.default.createElement(_grommetIcons.Next, { size: size }),
                onClick: onSelect && (0, _utils.betweenDates)(nextMonth, bounds) ? function () {
                  return _this2.setReference(nextMonth);
                } : undefined
              })
            )
          ),
          _react2.default.createElement(
            _StyledCalendar.StyledWeeksContainer,
            { size: size, theme: theme },
            _react2.default.createElement(
              _StyledCalendar.StyledWeeks,
              { slide: slide, size: size, theme: theme },
              weeks
            )
          )
        )
      )
    );
  };

  return Calendar;
}(_react.Component);

Calendar.defaultProps = {
  firstDayOfWeek: 0,
  size: 'medium'
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Calendar);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(Calendar);
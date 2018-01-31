var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { compose } from 'recompose';
import moment from 'moment';

import { FormPrevious, FormNext, Previous, Next } from 'grommet-icons';

import { Box } from '../Box';
import { Button } from '../Button';
import { Keyboard } from '../Keyboard';
import { Heading } from '../Heading';

import { withTheme } from '../hocs';

import StyledCalendar, { StyledDay, StyledDayContainer, StyledWeek, StyledWeeks, StyledWeeksContainer } from './StyledCalendar';
import doc from './doc';

var between = function between(date, dates) {
  var result = void 0;
  if (dates) {
    var from = dates[0],
        to = dates[1];

    if (date.isSame(from, 'day') || date.isSame(to, 'day')) {
      result = 2;
    } else if (date.isSameOrAfter(from, 'day') && date.isSameOrBefore(to, 'day')) {
      result = 1;
    }
  } else {
    result = 1;
  }
  return result;
};

var within = function within(date, dates) {
  var result = 0;
  if (dates) {
    if (Array.isArray(dates)) {
      dates.some(function (d) {
        if (typeof d === 'string') {
          if (date.isSame(d, 'day')) {
            result = 2;
          }
        } else {
          result = between(date, d);
        }
        return result;
      });
    } else if (date.isSame(dates, 'day')) {
      result = 2;
    }
  }
  return result;
};

var buildStartEnd = function buildStartEnd(reference) {
  var start = moment(reference).startOf('month').startOf('week');
  var end = moment(start).add(5, 'weeks').endOf('week');
  return { start: start, end: end };
};

var buildState = function buildState(props) {
  var date = props.date,
      dates = props.dates;

  var reference = void 0;
  if (date) {
    reference = moment(date);
  } else if (dates && dates.length > 0) {
    if (typeof dates[0] === 'string') {
      reference = moment(dates[0]);
    } else if (Array.isArray(dates[0])) {
      reference = moment(dates[0][0]);
    } else {
      reference = moment();
    }
  } else {
    reference = moment();
  }
  if (props.locale) {
    reference.locale(props.locale);
  }
  return _extends({}, buildStartEnd(reference), {
    reference: reference,
    active: moment(reference)
  });
};

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.dayRefs = {};

    _this.setReference = function (reference) {
      var bounds = _this.props.bounds;
      var _this$state = _this.state,
          start = _this$state.start,
          end = _this$state.end;

      if (between(reference, bounds)) {
        var nextStartEnd = buildStartEnd(reference);
        var nextState = {
          reference: reference,
          active: undefined
        };
        if (nextStartEnd.start.isBefore(start)) {
          nextState.start = nextStartEnd.start;
          nextState.slide = {
            direction: 'down',
            weeks: start.diff(nextStartEnd.start, 'weeks')
          };
          clearTimeout(_this.timer);
          _this.timer = setTimeout(function () {
            return _this.setState({ end: nextStartEnd.end, slide: undefined });
          }, 1000);
        } else if (nextStartEnd.end.isAfter(end)) {
          nextState.end = nextStartEnd.end;
          nextState.slide = {
            direction: 'up',
            weeks: nextStartEnd.end.diff(end, 'weeks')
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

      if (between(active, bounds)) {
        var nextState = { active: active };
        if (active.isBefore(start)) {
          nextState.start = moment(start).subtract(1, 'week');
          nextState.end = moment(end).subtract(1, 'week');
        } else if (active.isAfter(end)) {
          nextState.start = moment(start).add(1, 'week');
          nextState.end = moment(end).add(1, 'week');
        }
        if (!active.isSame(reference, 'month')) {
          nextState.reference = moment(active);
        }
        _this.setFocus = true;
        _this.setState(nextState);
      }
    };

    _this.state = buildState(props);
    return _this;
  }

  Calendar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState(buildState(nextProps));
  };

  Calendar.prototype.componentDidUpdate = function componentDidUpdate() {
    var active = this.state.active;

    if (this.setFocus) {
      this.setFocus = false;
      var ref = this.dayRefs[active.toISOString()];
      if (ref) {
        findDOMNode(ref).focus();
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
        onSelect = _props.onSelect,
        size = _props.size,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['bounds', 'date', 'dates', 'disabled', 'onSelect', 'size', 'theme']);

    var _state = this.state,
        active = _state.active,
        start = _state.start,
        reference = _state.reference,
        end = _state.end,
        slide = _state.slide;


    var previousMonth = moment(reference).subtract(1, 'month');
    var nextMonth = moment(reference).add(1, 'month');

    var weeks = [];
    var day = moment(start);
    var days = void 0;

    var _loop = function _loop() {
      if (!day.weekday()) {
        if (days) {
          weeks.push(React.createElement(
            StyledWeek,
            { key: day.week(), theme: theme },
            days
          ));
        }
        days = [];
      }

      var dateString = day.toISOString();
      var content = day.format('D');
      var selected = false;
      var inRange = false;
      var background = void 0;

      var selectedState = within(day, date || dates);
      if (selectedState === 2) {
        selected = true;
      } else if (selectedState === 1) {
        inRange = true;
      }
      var dayDisabled = within(day, disabled);
      if (selected) {
        background = 'brand';
        content = React.createElement(
          'strong',
          null,
          content
        );
      } else if (inRange) {
        background = { color: 'brand', opacity: 'weak' };
      }

      days.push(React.createElement(
        StyledDayContainer,
        { key: day.day(), size: size, theme: theme },
        React.createElement(
          Button,
          {
            ref: function ref(_ref) {
              _this2.dayRefs[dateString] = _ref;
            },
            a11yTitle: day.format('LL'),
            plain: true,
            active: active && day.isSame(active, 'day'),
            hoverIndicator: !dayDisabled,
            onClick: dayDisabled ? undefined : function () {
              _this2.setState({ active: moment(dateString) });
              onSelect(dateString);
            }
          },
          React.createElement(
            StyledDay,
            {
              background: background,
              otherMonth: !day.isSame(reference, 'month'),
              size: size,
              theme: theme
            },
            content
          )
        )
      ));
      day.add(1, 'day');
    };

    while (day.isBefore(end)) {
      _loop();
    }
    weeks.push(React.createElement(
      StyledWeek,
      { key: day.week(), theme: theme },
      days
    ));

    return React.createElement(
      StyledCalendar,
      _extends({ size: size, theme: theme }, rest),
      React.createElement(
        Keyboard,
        {
          onUp: function onUp(event) {
            event.preventDefault();
            _this2.setActive(moment(active).subtract(1, 'week'));
          },
          onDown: function onDown(event) {
            event.preventDefault();
            _this2.setActive(moment(active).add(1, 'week'));
          },
          onLeft: function onLeft() {
            return _this2.setActive(moment(active).subtract(1, 'day'));
          },
          onRight: function onRight() {
            return _this2.setActive(moment(active).add(1, 'day'));
          }
        },
        React.createElement(
          Box,
          null,
          React.createElement(
            Box,
            { direction: 'row', justify: 'between', align: 'center' },
            React.createElement(
              Heading,
              { level: 3, size: size, margin: 'none' },
              React.createElement(
                'strong',
                null,
                reference.format('MMMM YYYY')
              )
            ),
            React.createElement(
              Box,
              { direction: 'row', align: 'center' },
              React.createElement(Button, {
                a11yTitle: previousMonth.format('MMMM YYYY'),
                icon: size === 'small' ? React.createElement(FormPrevious, null) : React.createElement(Previous, { size: size }),
                onClick: onSelect && between(previousMonth, bounds) ? function () {
                  return _this2.setReference(previousMonth);
                } : undefined
              }),
              React.createElement(Button, {
                a11yTitle: nextMonth.format('MMMM YYYY'),
                icon: size === 'small' ? React.createElement(FormNext, null) : React.createElement(Next, { size: size }),
                onClick: onSelect && between(nextMonth, bounds) ? function () {
                  return _this2.setReference(nextMonth);
                } : undefined
              })
            )
          ),
          React.createElement(
            StyledWeeksContainer,
            { size: size, theme: theme },
            React.createElement(
              StyledWeeks,
              { slide: slide, size: size, theme: theme },
              weeks
            )
          )
        )
      )
    );
  };

  return Calendar;
}(Component);

Calendar.defaultProps = {
  size: 'medium'
};


if (process.env.NODE_ENV !== 'production') {
  doc(Calendar);
}

export default compose(withTheme)(Calendar);
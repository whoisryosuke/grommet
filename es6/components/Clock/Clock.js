var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import 'date-time-format-timezone';

import React, { Component } from 'react';
import { compose } from 'recompose';

import { parseMetricToInt } from '../../utils';

import { withTheme } from '../hocs';

import StyledClock, { StyledCircle, StyledHour, StyledMinute, StyledSecond } from './StyledClock';
import doc from './doc';

// this will serve both minutes and hours (360 / 6)
var ANGLE_UNIT = 6;
// 360 / 12
var HOUR_ANGLE_UNIT = 30;
// night variables
var NIGHT_START = 18;
var NIGHT_FINISH = 6;

var getClockDimensions = function getClockDimensions(theme) {
  return {
    size: parseMetricToInt(theme.clock.size.medium),
    secondSize: parseMetricToInt(theme.clock.second.size),
    minuteSize: parseMetricToInt(theme.clock.minute.size),
    hourSize: parseMetricToInt(theme.clock.hour.size),
    stroke: parseMetricToInt(theme.clock.circle.width)
  };
};

var getTimezoneTime = function getTimezoneTime(date, timezone) {
  return {
    hour: parseInt(new Intl.DateTimeFormat('en', {
      timeZone: timezone, hour: 'numeric', hour12: false
    }).format(date), 10),
    minute: parseInt(new Intl.DateTimeFormat('en', {
      timeZone: timezone, minute: 'numeric'
    }).format(date), 10),
    second: parseInt(new Intl.DateTimeFormat('en', {
      timeZone: timezone, second: 'numeric'
    }).format(date), 10)
  };
};

var getClockState = function getClockState(props) {
  var date = props.date || new Date();

  var _getTimezoneTime = getTimezoneTime(date, props.timezone),
      hour = _getTimezoneTime.hour,
      minute = _getTimezoneTime.minute,
      second = _getTimezoneTime.second;

  var hour12 = hour > 12 ? hour - 12 : hour;

  var minuteAngle = minute * ANGLE_UNIT;

  return {
    inSync: false,
    resetClock: true,
    date: date,
    // offset hour angle by half of the minute angle so that it gets closer to the next hour
    hourAngle: hour12 * HOUR_ANGLE_UNIT + minute / 2,
    minuteAngle: minuteAngle,
    secondAngle: second * ANGLE_UNIT,
    night: props.night !== undefined ? props.night : hour >= NIGHT_START || hour < NIGHT_FINISH
  };
};

var Clock = function (_Component) {
  _inherits(Clock, _Component);

  function Clock(props, context) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.placeClockHands = function () {
      var _this$props = _this.props,
          seconds = _this$props.seconds,
          timezone = _this$props.timezone;
      var _this$state = _this.state,
          date = _this$state.date,
          night = _this$state.night,
          inSync = _this$state.inSync;

      // if clock is not in sync we need to animate using JavaScript first and then
      // use CSS animation

      if (!inSync) {
        var timezoneTime = getTimezoneTime(date, timezone);
        var second = timezoneTime.second;
        var minute = timezoneTime.second;
        var hour = timezoneTime.hour;
        // get the remaining seconds an notify the component to start animation only
        // after the clock finished the loop
        // for example: 04:40:30 pm will start the CSS animation at 04:41:00 pm
        var remainingSeconds = 60 - second;
        var remainingMinutes = 60 - minute;

        // timeout will be executed when clock is in sync
        _this.syncClockTimeout = setTimeout(function () {
          clearInterval(_this.secondsAnimation);
          var hour12 = hour > 12 ? hour - 12 : hour;

          var nextHourAngle = _this.state.hourAngle;
          // sync hour
          if (remainingMinutes === 1) {
            hour += 1;
            nextHourAngle = hour12 * HOUR_ANGLE_UNIT + HOUR_ANGLE_UNIT;
          }
          if (nextHourAngle === 360) {
            nextHourAngle = 0;
          }

          // sync minute
          var nextMinuteAngle = _this.state.minuteAngle;
          if (remainingSeconds > 0) {
            nextMinuteAngle = _this.state.minuteAngle + ANGLE_UNIT;
          }
          if (nextMinuteAngle === 360) {
            nextMinuteAngle = 0;
          }

          _this.setState({
            inSync: true,
            hourAngle: nextHourAngle,
            minuteAngle: nextMinuteAngle,
            secondAngle: 0,
            night: night !== undefined ? night : hour >= NIGHT_START || hour < NIGHT_FINISH
          });
        }, remainingSeconds * 1000);

        // only animate if we have seconds hand
        if (seconds) {
          // animate seconds in react while the clock is not in sync
          _this.secondsAnimation = setInterval(function () {
            _this.setState({ resetClock: false, secondAngle: _this.state.secondAngle + ANGLE_UNIT });
          }, 1000);
        }
      }
    };

    _this.state = getClockState(props);
    return _this;
  }

  Clock.prototype.componentDidMount = function componentDidMount() {
    this.placeClockHands();
  };

  Clock.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.date !== nextProps.date || this.props.timezone !== nextProps.timezone) {
      this.setState(getClockState(nextProps));
    }
  };

  Clock.prototype.componentDidUpdate = function componentDidUpdate() {
    var resetClock = this.state.resetClock;

    if (resetClock) {
      if (this.syncClockTimeout) {
        clearTimeout(this.syncClockTimeout);
      }
      if (this.secondsAnimation) {
        clearInterval(this.secondsAnimation);
      }
      this.placeClockHands();
    }
  };

  Clock.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.syncClockTimeout) {
      clearTimeout(this.syncClockTimeout);
    }
    if (this.secondsAnimation) {
      clearInterval(this.secondsAnimation);
    }
  };

  Clock.prototype.render = function render() {
    var _props = this.props,
        seconds = _props.seconds,
        theme = _props.theme;
    var _state = this.state,
        inSync = _state.inSync,
        hourAngle = _state.hourAngle,
        minuteAngle = _state.minuteAngle,
        night = _state.night,
        secondAngle = _state.secondAngle;

    var _getClockDimensions = getClockDimensions(theme),
        size = _getClockDimensions.size,
        secondSize = _getClockDimensions.secondSize,
        minuteSize = _getClockDimensions.minuteSize,
        hourSize = _getClockDimensions.hourSize,
        stroke = _getClockDimensions.stroke;

    var halfSize = size / 2;

    var secondLine = void 0;
    if (seconds) {
      secondLine = React.createElement(StyledSecond, {
        animate: inSync,
        night: night,
        theme: theme,
        x1: halfSize,
        y1: halfSize,
        x2: halfSize,
        y2: secondSize,
        stroke: '#000000',
        strokeLinecap: theme.clock.second.shape,
        style: {
          transform: 'rotate(' + secondAngle + 'deg)',
          transformOrigin: halfSize + 'px ' + halfSize + 'px'
        }
      });
    }

    return React.createElement(
      StyledClock,
      _extends({
        night: night,
        version: '1.1',
        width: size,
        height: size,
        preserveAspectRatio: 'xMidYMid meet',
        viewBox: '0 0 ' + size + ' ' + size
      }, this.props),
      React.createElement(StyledCircle, {
        night: night,
        theme: theme,
        fill: 'none',
        stroke: '#000000',
        cx: halfSize,
        cy: halfSize,
        r: halfSize - stroke
      }),
      secondLine,
      React.createElement(StyledMinute, {
        animate: inSync,
        night: night,
        theme: theme,
        x1: halfSize,
        y1: halfSize,
        x2: halfSize,
        y2: minuteSize,
        stroke: '#000000',
        strokeLinecap: theme.clock.minute.shape,
        style: {
          transform: 'rotate(' + minuteAngle + 'deg)',
          transformOrigin: halfSize + 'px ' + halfSize + 'px'
        }
      }),
      React.createElement(StyledHour, {
        animate: inSync,
        night: night,
        theme: theme,
        x1: halfSize,
        y1: halfSize,
        x2: halfSize,
        y2: hourSize,
        stroke: '#000000',
        strokeLinecap: theme.clock.hour.shape,
        style: {
          transform: 'rotate(' + hourAngle + 'deg)',
          transformOrigin: halfSize + 'px ' + halfSize + 'px'
        }
      })
    );
  };

  return Clock;
}(Component);

Clock.defaultProps = {
  size: 'medium',
  timezone: 'America/Los_Angeles'
};


if (process.env.NODE_ENV !== 'production') {
  doc(Clock);
}

export default compose(withTheme)(Clock);
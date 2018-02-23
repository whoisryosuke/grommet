var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from '../hocs';

import Analog from './Analog';
import Digital from './Digital';
import doc from './doc';

var TIME_REGEXP = /T([0-9]{2}):([0-9]{2})(?::([0-9.,]{2,}))?/;
var DURATION_REGEXP = /^(-|\+)?P.*T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?$/;

var parseTime = function parseTime(time, hourLimit) {
  var normalizedTime = time || new Date().toISOString();
  var result = {};
  var match = DURATION_REGEXP.exec(normalizedTime);
  if (match) {
    result.hours = parseFloat(match[2]);
    if (hourLimit === 12) {
      result.hours = result.hours > 12 ? result.hours - 12 : result.hours;
    }
    result.minutes = parseFloat(match[3]) || 0;
    result.seconds = parseFloat(match[4]) || 0;
    result.duration = true;
  } else {
    match = TIME_REGEXP.exec(normalizedTime);
    if (match) {
      result.hours = parseFloat(match[1]);
      result.minutes = parseFloat(match[2]) || 0;
      result.seconds = parseFloat(match[3]) || 0;
    } else {
      console.error('Grommet Clock cannot parse \'' + time + '\'');
    }
  }
  return result;
};

var Clock = function (_Component) {
  _inherits(Clock, _Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { elements: parseTime(props.time, props.hourLimit) };
    return _this;
  }

  Clock.prototype.componentDidMount = function componentDidMount() {
    if (this.props.run) {
      this.run();
    }
  };

  Clock.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.run) {
      this.run();
    }
  };

  Clock.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timer);
  };

  Clock.prototype.run = function run() {
    var _this2 = this;

    var _props = this.props,
        hourLimit = _props.hourLimit,
        onChange = _props.onChange,
        precision = _props.precision,
        run = _props.run;

    // set the interval time based on the precision

    var interval = 1000;
    var increment = 'seconds';
    if (precision !== 'seconds' && this.state.elements.seconds === 0) {
      interval *= 60;
      increment = 'minutes';
      if (precision !== 'minutes' && this.state.elements.minutes === 0) {
        interval *= 60;
        increment = 'hours';
      }
    }

    clearInterval(this.timer);
    this.timer = setInterval(function () {
      var elements = _this2.state.elements;

      var nextElements = _extends({}, elements);

      // adjust time based on precision
      if (increment === 'seconds') {
        if (run === 'backward') {
          nextElements.seconds -= 1;
        } else {
          nextElements.seconds += 1;
        }
      } else if (increment === 'minutes') {
        if (run === 'backward') {
          nextElements.minutes -= 1;
        } else {
          nextElements.minutes += 1;
        }
      } else if (increment === 'hours') {
        if (run === 'backward') {
          nextElements.hours -= 1;
        } else {
          nextElements.hours += 1;
        }
      }

      // deal with overflows
      if (nextElements.seconds >= 60) {
        nextElements.minutes += Math.floor(nextElements.seconds / 60);
        nextElements.seconds = 0;
      } else if (nextElements.seconds < 0) {
        nextElements.minutes += Math.floor(nextElements.seconds / 60);
        nextElements.seconds = 59;
      }
      if (nextElements.minutes >= 60) {
        nextElements.hours += Math.floor(nextElements.minutes / 60);
        nextElements.minutes = 0;
      } else if (nextElements.minutes < 0) {
        nextElements.hours += Math.floor(nextElements.minutes / 60);
        nextElements.minutes = 59;
      }
      if (nextElements.hours >= hourLimit || nextElements.hours < 0) {
        nextElements.hours = 0;
      }

      _this2.setState({ elements: nextElements }, function () {
        if (onChange) {
          if (elements.duration) {
            onChange('P' + elements.hours + 'H' + elements.minutes + 'M' + elements.seconds + 'S');
          } else {
            onChange('T' + elements.hours + ':' + elements.minutes + ':' + elements.seconds);
          }
        }
      });
    }, interval);
  };

  Clock.prototype.render = function render() {
    var _props2 = this.props,
        type = _props2.type,
        rest = _objectWithoutProperties(_props2, ['type']);

    var elements = this.state.elements;

    var content = void 0;
    if (type === 'analog') {
      content = React.createElement(Analog, _extends({ elements: elements }, rest));
    } else if (type === 'digital') {
      content = React.createElement(Digital, _extends({ elements: elements }, rest));
    }

    return content;
  };

  return Clock;
}(Component);

Clock.defaultProps = {
  hourLimit: 24,
  precision: 'seconds',
  run: 'forward',
  size: 'medium',
  type: 'analog'
};


if (process.env.NODE_ENV !== 'production') {
  doc(Clock);
}

export default compose(withTheme)(Clock);
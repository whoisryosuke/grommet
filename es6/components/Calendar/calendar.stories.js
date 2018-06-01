function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Calendar from '../Calendar/Calendar';
import Grommet from '../Grommet/Grommet';

var SimpleCalendar = function (_Component) {
  _inherits(SimpleCalendar, _Component);

  function SimpleCalendar() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleCalendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onSelect = function (date) {
      return _this.setState({ date: date });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleCalendar.prototype.render = function render() {
    var date = this.state.date;

    return React.createElement(
      Grommet,
      null,
      React.createElement(Calendar, { date: date, onSelect: this.onSelect })
    );
  };

  return SimpleCalendar;
}(Component);

storiesOf('Calendar', module).add('Simple Calendar', function () {
  return React.createElement(SimpleCalendar, null);
});
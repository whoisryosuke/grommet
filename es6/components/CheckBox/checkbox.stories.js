function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import CheckBox from '../CheckBox/CheckBox';
import Grommet from '../Grommet/Grommet';

var SimpleCheckBox = function (_Component) {
  _inherits(SimpleCheckBox, _Component);

  function SimpleCheckBox() {
    _classCallCheck(this, SimpleCheckBox);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleCheckBox.prototype.render = function render() {
    return React.createElement(
      Grommet,
      null,
      React.createElement(CheckBox, { label: 'Choice' })
    );
  };

  return SimpleCheckBox;
}(Component);

var FocusedCheckBox = function (_Component2) {
  _inherits(FocusedCheckBox, _Component2);

  function FocusedCheckBox() {
    var _temp, _this2, _ret;

    _classCallCheck(this, FocusedCheckBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.ref = React.createRef(), _temp), _possibleConstructorReturn(_this2, _ret);
  }

  FocusedCheckBox.prototype.componentDidMount = function componentDidMount() {
    this.ref.current.focus();
  };

  FocusedCheckBox.prototype.render = function render() {
    return React.createElement(
      Grommet,
      null,
      React.createElement(CheckBox, { ref: this.ref, label: 'Choice' })
    );
  };

  return FocusedCheckBox;
}(Component);

storiesOf('CheckBox', module).add('Simple CheckBox', function () {
  return React.createElement(SimpleCheckBox, null);
}).add('Focused CheckBox', function () {
  return React.createElement(FocusedCheckBox, null);
});
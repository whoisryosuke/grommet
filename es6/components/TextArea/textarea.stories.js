function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import TextArea from '../TextArea/TextArea';
import Grommet from '../Grommet/Grommet';

var SimpleTextArea = function (_Component) {
  _inherits(SimpleTextArea, _Component);

  function SimpleTextArea() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleTextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { value: '' }, _this.onChange = function (event) {
      return _this.setState({ value: event.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleTextArea.prototype.render = function render() {
    var value = this.state.value;

    return React.createElement(
      Grommet,
      null,
      React.createElement(TextArea, { value: value, onChange: this.onChange })
    );
  };

  return SimpleTextArea;
}(Component);

var FocusedTextArea = function (_Component2) {
  _inherits(FocusedTextArea, _Component2);

  function FocusedTextArea() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, FocusedTextArea);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = { value: '' }, _this2.ref = React.createRef(), _this2.onChange = function (event) {
      return _this2.setState({ value: event.target.value });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  FocusedTextArea.prototype.componentDidMount = function componentDidMount() {
    this.ref.current.focus();
  };

  FocusedTextArea.prototype.render = function render() {
    var value = this.state.value;

    return React.createElement(
      Grommet,
      null,
      React.createElement(TextArea, { ref: this.ref, value: value, onChange: this.onChange })
    );
  };

  return FocusedTextArea;
}(Component);

storiesOf('TextArea', module).add('Simple TextArea', function () {
  return React.createElement(SimpleTextArea, null);
}).add('Focused TextArea', function () {
  return React.createElement(FocusedTextArea, null);
});
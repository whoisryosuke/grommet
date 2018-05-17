function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import TextInput from '../TextInput/TextInput';
import Grommet from '../Grommet/Grommet';

var SimpleTextInput = function (_Component) {
  _inherits(SimpleTextInput, _Component);

  function SimpleTextInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleTextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { value: '' }, _this.onChange = function (event) {
      return _this.setState({ value: event.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleTextInput.prototype.render = function render() {
    var value = this.state.value;

    return React.createElement(
      Grommet,
      null,
      React.createElement(TextInput, { value: value, onChange: this.onChange })
    );
  };

  return SimpleTextInput;
}(Component);

var FocusedTextInput = function (_Component2) {
  _inherits(FocusedTextInput, _Component2);

  function FocusedTextInput() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, FocusedTextInput);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = { value: '' }, _this2.ref = React.createRef(), _this2.onChange = function (event) {
      return _this2.setState({ value: event.target.value });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  FocusedTextInput.prototype.componentDidMount = function componentDidMount() {
    this.ref.current.focus();
  };

  FocusedTextInput.prototype.render = function render() {
    var value = this.state.value;

    return React.createElement(
      Grommet,
      null,
      React.createElement(TextInput, { ref: this.ref, value: value, onChange: this.onChange })
    );
  };

  return FocusedTextInput;
}(Component);

var SuggestionsTextInput = function (_Component3) {
  _inherits(SuggestionsTextInput, _Component3);

  function SuggestionsTextInput() {
    var _temp3, _this3, _ret3;

    _classCallCheck(this, SuggestionsTextInput);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, _Component3.call.apply(_Component3, [this].concat(args))), _this3), _this3.state = { value: '' }, _this3.onChange = function (event) {
      return _this3.setState({ value: event.target.value });
    }, _this3.onSelect = function (event) {
      return _this3.setState({ value: event.suggestion });
    }, _temp3), _possibleConstructorReturn(_this3, _ret3);
  }

  SuggestionsTextInput.prototype.render = function render() {
    var value = this.state.value;

    return React.createElement(
      Grommet,
      null,
      React.createElement(TextInput, {
        value: value,
        onChange: this.onChange,
        onSelect: this.onSelect,
        suggestions: ['First', 'Second', 'Third']
      })
    );
  };

  return SuggestionsTextInput;
}(Component);

storiesOf('TextInput', module).add('Simple TextInput', function () {
  return React.createElement(SimpleTextInput, null);
}).add('Focused TextInput', function () {
  return React.createElement(FocusedTextInput, null);
}).add('Suggestions TextInput', function () {
  return React.createElement(SuggestionsTextInput, null);
});
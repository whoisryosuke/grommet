var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import StyledTextInput from './StyledTextInput';

import { withFocus, withTheme } from '../hocs';

import doc from './doc';

function renderLabel(suggestion) {
  if (suggestion && (typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
    return suggestion.label || suggestion.value;
  }
  return suggestion;
}

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TextInput.prototype.render = function render() {
    var _props = this.props,
        defaultValue = _props.defaultValue,
        value = _props.value;

    return React.createElement(StyledTextInput, _extends({
      autoComplete: 'off'
    }, this.props, {
      defaultValue: renderLabel(defaultValue),
      value: renderLabel(value)
    }));
  };

  return TextInput;
}(Component);

if (process.env.NODE_ENV !== 'production') {
  doc(TextInput);
}

export default compose(withFocus, withTheme)(TextInput);
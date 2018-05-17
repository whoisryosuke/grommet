var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import getDisplayName from 'recompose/getDisplayName';

import baseTheme from '../themes/vanilla';
import { deepMerge } from '../utils';

var withFocus = function withFocus(WrappedComponent) {
  var FocusableComponent = function (_Component) {
    _inherits(FocusableComponent, _Component);

    function FocusableComponent() {
      var _temp, _this, _ret;

      _classCallCheck(this, FocusableComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
        mouseActive: false,
        focus: false,
        wrappedRef: React.createRef()
      }, _this.componentDidMount = function () {
        var wrappedRef = _this.state.wrappedRef;

        window.addEventListener('mousedown', _this.handleActiveMouse);

        // we could be using onFocus in the wrapper node itself
        // but react does not invoke it if you programically
        // call wrapperNode.focus() inside componentWillUnmount
        // see Drop "this.originalFocusedElement.focus();" for reference
        var wrapperNode = findDOMNode(wrappedRef.current);
        if (wrapperNode && wrapperNode.addEventListener) {
          wrapperNode.addEventListener('focus', _this.setFocus);
        }
      }, _this.componentWillUnmount = function () {
        var wrappedRef = _this.state.wrappedRef;

        if (_this.mouseTimer) {
          clearTimeout(_this.mouseTimer);
        }
        window.removeEventListener('mousedown', _this.handleActiveMouse);
        var wrapperNode = findDOMNode(wrappedRef.current);
        if (wrapperNode && wrapperNode.addEventListener) {
          wrapperNode.removeEventListener('focus', _this.setFocus);
        }
      }, _this.handleActiveMouse = function () {
        _this.setState({ mouseActive: true }, function () {
          // this avoids showing focus when clicking around
          if (_this.mouseTimer) {
            clearTimeout(_this.mouseTimer);
          }

          // empirical number to reset mouseActive after
          // some time has passed without mousedown
          _this.mouseTimer = setTimeout(function () {
            _this.setState({ mouseActive: false });
          }, 300);
        });
      }, _this.setFocus = function () {
        var mouseActive = _this.state.mouseActive;

        if (mouseActive === false) {
          _this.setState({ focus: true });
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    FocusableComponent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      var withFocusRef = nextProps.withFocusRef;
      var wrappedRef = prevState.wrappedRef;

      var nextWrappedRef = withFocusRef || wrappedRef;
      if (nextWrappedRef !== wrappedRef) {
        return { wrappedRef: nextWrappedRef };
      }
      return null;
    };

    FocusableComponent.prototype.resetFocus = function resetFocus() {
      this.setState({ focus: false });
    };

    FocusableComponent.prototype.render = function render() {
      var _this2 = this;

      var _props = this.props,
          _onFocus = _props.onFocus,
          _onBlur = _props.onBlur,
          withFocusRef = _props.withFocusRef,
          rest = _objectWithoutProperties(_props, ['onFocus', 'onBlur', 'withFocusRef']);

      var _state = this.state,
          focus = _state.focus,
          wrappedRef = _state.wrappedRef;

      return React.createElement(WrappedComponent, _extends({
        ref: wrappedRef,
        focus: focus
      }, rest, {
        onFocus: function onFocus(event) {
          _this2.setFocus();
          if (_onFocus) {
            _onFocus(event);
          }
        },
        onBlur: function onBlur(event) {
          _this2.resetFocus();
          if (_onBlur) {
            _onBlur(event);
          }
        }
      }));
    };

    return FocusableComponent;
  }(Component);

  FocusableComponent.displayName = getDisplayName(WrappedComponent);

  return React.forwardRef(function (props, ref) {
    return React.createElement(FocusableComponent, _extends({}, props, { withFocusRef: ref }));
  });
};

export { withFocus };
var withTheme = function withTheme(WrappedComponent) {
  var ThemedComponent = function (_Component2) {
    _inherits(ThemedComponent, _Component2);

    function ThemedComponent(props, context) {
      _classCallCheck(this, ThemedComponent);

      var _this3 = _possibleConstructorReturn(this, _Component2.call(this, props, context));

      _initialiseProps.call(_this3);

      _this3.buildTheme(props, context);
      return _this3;
    }

    ThemedComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      // only merge on existence changes
      if (nextProps.theme && !this.props.theme || !nextProps.theme && this.props.theme) {
        this.buildTheme(nextProps, this.context);
      }
    };

    ThemedComponent.prototype.render = function render() {
      var _props2 = this.props,
          withThemeRef = _props2.withThemeRef,
          rest = _objectWithoutProperties(_props2, ['withThemeRef']);

      var theme = this.state.theme;

      return React.createElement(WrappedComponent, _extends({ ref: withThemeRef }, rest, { theme: theme }));
    };

    return ThemedComponent;
  }(Component);

  ThemedComponent.contextTypes = {
    theme: PropTypes.object
  };

  var _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.buildTheme = function (props, context) {
      var theme = props.theme;
      var contextTheme = context.theme;

      var localTheme = deepMerge(baseTheme, contextTheme, theme);
      _this4.state = { theme: localTheme };
    };
  };

  ThemedComponent.displayName = getDisplayName(WrappedComponent);

  return React.forwardRef(function (props, ref) {
    return React.createElement(ThemedComponent, _extends({}, props, { withThemeRef: ref }));
  });
};

export { withTheme };
export var withForwardRef = function withForwardRef(WrappedComponent) {
  return React.forwardRef(function (props, ref) {
    return React.createElement(WrappedComponent, _extends({ forwardRef: ref }, props));
  });
};

export default { withFocus: withFocus, withForwardRef: withForwardRef, withTheme: withTheme };
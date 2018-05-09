var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import getDisplayName from 'recompose/getDisplayName';

import baseTheme from '../themes/vanilla';
import { deepMerge } from '../utils';

export var withFocus = function withFocus(WrappedComponent) {
  var FocusableComponent = function (_Component) {
    _inherits(FocusableComponent, _Component);

    function FocusableComponent() {
      _classCallCheck(this, FocusableComponent);

      var _this = _possibleConstructorReturn(this, _Component.call(this));

      _this.handleActiveMouse = _this.handleActiveMouse.bind(_this);
      _this.setFocus = _this.setFocus.bind(_this);
      _this.state = {
        mouseActive: false,
        focus: false
      };
      return _this;
    }

    FocusableComponent.prototype.componentDidMount = function componentDidMount() {
      window.addEventListener('mousedown', this.handleActiveMouse);

      // we could be using onFocus in the wrapper node itself
      // but react does not invoke it if you programically
      // call wrapperNode.focus() inside componentWillUnmount
      // see Drop "this.originalFocusedElement.focus();" for reference
      var wrapperNode = findDOMNode(this.wrapperRef);
      if (wrapperNode && wrapperNode.addEventListener) {
        wrapperNode.addEventListener('focus', this.setFocus);
      }
    };

    FocusableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.mouseTimer) {
        clearTimeout(this.mouseTimer);
      }
      window.removeEventListener('mousedown', this.handleActiveMouse);
      var wrapperNode = findDOMNode(this.wrapperRef);
      if (wrapperNode && wrapperNode.addEventListener) {
        wrapperNode.removeEventListener('focus', this.setFocus);
      }
    };

    FocusableComponent.prototype.handleActiveMouse = function handleActiveMouse() {
      var _this2 = this;

      this.setState({ mouseActive: true }, function () {
        // this avoids showing focus when clicking around
        if (_this2.mouseTimer) {
          clearTimeout(_this2.mouseTimer);
        }

        // empirical number to reset mouseActive after
        // some time has passed without mousedown
        _this2.mouseTimer = setTimeout(function () {
          _this2.setState({ mouseActive: false });
        }, 300);
      });
    };

    FocusableComponent.prototype.setFocus = function setFocus() {
      var mouseActive = this.state.mouseActive;

      if (mouseActive === false) {
        this.setState({ focus: true });
      }
    };

    FocusableComponent.prototype.resetFocus = function resetFocus() {
      this.setState({ focus: false });
    };

    FocusableComponent.prototype.render = function render() {
      var _this3 = this;

      var focus = this.state.focus;

      return React.createElement(WrappedComponent, _extends({
        ref: function ref(_ref) {
          _this3.wrapperRef = _ref;
        },
        focus: focus
      }, this.props, {
        onFocus: function onFocus(event) {
          _this3.setFocus();
          var onFocus = _this3.props.onFocus;

          if (onFocus) {
            onFocus(event);
          }
        },
        onBlur: function onBlur(event) {
          _this3.resetFocus();
          var onBlur = _this3.props.onBlur;

          if (onBlur) {
            onBlur(event);
          }
        }
      }));
    };

    return FocusableComponent;
  }(Component);

  FocusableComponent.displayName = getDisplayName(WrappedComponent);

  return FocusableComponent;
};

export var withTheme = function withTheme(WrappedComponent) {
  var ThemedComponent = function (_Component2) {
    _inherits(ThemedComponent, _Component2);

    function ThemedComponent(props, context) {
      _classCallCheck(this, ThemedComponent);

      var _this4 = _possibleConstructorReturn(this, _Component2.call(this, props, context));

      _initialiseProps.call(_this4);

      _this4.buildTheme(props, context);
      return _this4;
    }

    ThemedComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      // only merge on existence changes
      if (nextProps.theme && !this.props.theme || !nextProps.theme && this.props.theme) {
        this.buildTheme(nextProps, this.context);
      }
    };

    ThemedComponent.prototype.render = function render() {
      var theme = this.state.theme;

      return React.createElement(WrappedComponent, _extends({}, this.props, { theme: theme }));
    };

    return ThemedComponent;
  }(Component);

  ThemedComponent.contextTypes = {
    theme: PropTypes.object
  };

  var _initialiseProps = function _initialiseProps() {
    var _this5 = this;

    this.buildTheme = function (props, context) {
      var theme = props.theme;
      var contextTheme = context.theme;

      var localTheme = deepMerge(baseTheme, contextTheme, theme);
      _this5.state = { theme: localTheme };
    };
  };

  ThemedComponent.displayName = getDisplayName(WrappedComponent);

  return ThemedComponent;
};

export default { withFocus: withFocus, withTheme: withTheme };
'use strict';

exports.__esModule = true;
exports.withTheme = exports.withFocus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getDisplayName = require('recompose/getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _vanilla = require('../themes/vanilla');

var _vanilla2 = _interopRequireDefault(_vanilla);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withFocus = exports.withFocus = function withFocus(WrappedComponent) {
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
      var wrapperNode = (0, _reactDom.findDOMNode)(this.wrapperRef);
      if (wrapperNode && wrapperNode.addEventListener) {
        wrapperNode.addEventListener('focus', this.setFocus);
      }
    };

    FocusableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.mouseTimer) {
        clearTimeout(this.mouseTimer);
      }
      window.removeEventListener('mousedown', this.handleActiveMouse);
      var wrapperNode = (0, _reactDom.findDOMNode)(this.wrapperRef);
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

      return _react2.default.createElement(WrappedComponent, _extends({
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
  }(_react.Component);

  FocusableComponent.displayName = (0, _getDisplayName2.default)(WrappedComponent);

  return FocusableComponent;
};

var withTheme = exports.withTheme = function withTheme(WrappedComponent) {
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

      return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { theme: theme }));
    };

    return ThemedComponent;
  }(_react.Component);

  ThemedComponent.contextTypes = {
    theme: _propTypes2.default.object
  };

  var _initialiseProps = function _initialiseProps() {
    var _this5 = this;

    this.buildTheme = function (props, context) {
      var theme = props.theme;
      var contextTheme = context.theme;

      var localTheme = (0, _utils.deepMerge)(_vanilla2.default, contextTheme, theme);
      _this5.state = { theme: localTheme };
    };
  };

  ThemedComponent.displayName = (0, _getDisplayName2.default)(WrappedComponent);

  return ThemedComponent;
};

exports.default = { withFocus: withFocus, withTheme: withTheme };
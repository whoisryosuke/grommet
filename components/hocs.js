'use strict';

exports.__esModule = true;
exports.restrictFocusTo = exports.withRestrictScroll = exports.withTheme = exports.withFocus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getDisplayName = require('recompose/getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withFocus = exports.withFocus = function withFocus(WrappedComponent) {
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
        focus: false
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    FocusableComponent.prototype.setMouseActive = function setMouseActive() {
      this.setState({ mouseActive: true });
    };

    FocusableComponent.prototype.resetMouseActive = function resetMouseActive() {
      this.setState({ mouseActive: false });
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
      var _this2 = this;

      var focus = this.state.focus;

      return _react2.default.createElement(WrappedComponent, _extends({
        focus: focus
      }, this.props, {
        onMouseDown: function onMouseDown(event) {
          _this2.setMouseActive();
          var onMouseDown = _this2.props.onMouseDown;

          if (onMouseDown) {
            onMouseDown(event);
          }
        },
        onMouseUp: function onMouseUp(event) {
          _this2.resetMouseActive();
          var onMouseUp = _this2.props.onMouseUp;

          if (onMouseUp) {
            onMouseUp(event);
          }
        },
        onFocus: function onFocus(event) {
          _this2.setFocus();
          var onFocus = _this2.props.onFocus;

          if (onFocus) {
            onFocus(event);
          }
        },
        onBlur: function onBlur(event) {
          _this2.resetFocus();
          var onBlur = _this2.props.onBlur;

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

var withTheme = function withTheme(WrappedComponent) {
  var ThemedComponent = function (_Component2) {
    _inherits(ThemedComponent, _Component2);

    function ThemedComponent() {
      _classCallCheck(this, ThemedComponent);

      return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    ThemedComponent.prototype.render = function render() {
      var _props = this.props,
          theme = _props.theme,
          rest = _objectWithoutProperties(_props, ['theme']);

      var contextTheme = this.context.theme;

      var localTheme = (0, _utils.deepMerge)(contextTheme, theme);
      return _react2.default.createElement(WrappedComponent, _extends({ theme: localTheme }, rest));
    };

    return ThemedComponent;
  }(_react.Component);

  ThemedComponent.contextTypes = {
    theme: _propTypes2.default.object
  };


  ThemedComponent.displayName = (0, _getDisplayName2.default)(WrappedComponent);
  return ThemedComponent;
};

exports.withTheme = withTheme;
var isNotAncestorOf = function isNotAncestorOf(child) {
  return function (parent) {
    return !parent.contains(child);
  };
};

var withRestrictScroll = exports.withRestrictScroll = function withRestrictScroll(WrappedComponent) {
  var RestrictScrollContainer = function (_Component3) {
    _inherits(RestrictScrollContainer, _Component3);

    function RestrictScrollContainer() {
      _classCallCheck(this, RestrictScrollContainer);

      return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
    }

    RestrictScrollContainer.prototype.render = function render() {
      return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { restrictScroll: true }));
    };

    return RestrictScrollContainer;
  }(_react.Component);

  RestrictScrollContainer.displayName = (0, _getDisplayName2.default)(WrappedComponent);
  return RestrictScrollContainer;
};

var restrictFocusTo = exports.restrictFocusTo = function restrictFocusTo(WrappedComponent) {
  var FocusedContainer = function (_Component4) {
    _inherits(FocusedContainer, _Component4);

    function FocusedContainer() {
      _classCallCheck(this, FocusedContainer);

      return _possibleConstructorReturn(this, _Component4.apply(this, arguments));
    }

    FocusedContainer.prototype.componentDidMount = function componentDidMount() {
      var restrictScroll = this.props.restrictScroll;

      var child = (0, _reactDom.findDOMNode)(this.ref);
      (0, _utils.getBodyChildElements)().filter(isNotAncestorOf(child)).forEach(_utils.makeNodeUnfocusable);

      if (restrictScroll) {
        document.body.style.overflow = 'hidden';
      }
    };

    FocusedContainer.prototype.componentWillUnmount = function componentWillUnmount() {
      var restrictScroll = this.props.restrictScroll;

      var child = (0, _reactDom.findDOMNode)(this.ref);
      (0, _utils.getBodyChildElements)().filter(isNotAncestorOf(child)).forEach(_utils.makeNodeFocusable);
      if (restrictScroll) {
        document.body.style.overflow = 'scroll';
      }
    };

    FocusedContainer.prototype.render = function render() {
      var _this6 = this;

      return _react2.default.createElement(WrappedComponent, _extends({ ref: function ref(_ref) {
          _this6.ref = _ref;
        } }, this.props));
    };

    return FocusedContainer;
  }(_react.Component);

  FocusedContainer.displayName = (0, _getDisplayName2.default)(WrappedComponent);
  return FocusedContainer;
};

exports.default = { withFocus: withFocus, withRestrictScroll: withRestrictScroll, withTheme: withTheme, restrictFocusTo: restrictFocusTo };
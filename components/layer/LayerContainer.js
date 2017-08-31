'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deepAssign = require('deep-assign');

var _deepAssign2 = _interopRequireDefault(_deepAssign);

var _StyledLayer = require('./StyledLayer');

var _StyledLayer2 = _interopRequireDefault(_StyledLayer);

var _button = require('../button');

var _keyboard = require('../keyboard');

var _vanilla = require('../../themes/vanilla');

var _vanilla2 = _interopRequireDefault(_vanilla);

var _DOM = require('../utils/DOM');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: replace with grommet-icons
var CloseIcon = function CloseIcon() {
  return _react2.default.createElement(
    'svg',
    {
      version: '1.1',
      viewBox: '0 0 24 24',
      width: '24px',
      height: '24px',
      role: 'img'
    },
    _react2.default.createElement('path', {
      fill: 'none',
      stroke: '#333',
      strokeWidth: '2',
      d: 'M3,3 L21,21 M3,21 L21,3'
    })
  );
};

var LayerContainer = function (_Component) {
  _inherits(LayerContainer, _Component);

  function LayerContainer() {
    _classCallCheck(this, LayerContainer);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LayerContainer.prototype.getChildContext = function getChildContext() {
    var theme = this.props.theme;


    var globalTheme = JSON.parse(JSON.stringify(_vanilla2.default));
    return {
      theme: (0, _deepAssign2.default)(globalTheme, theme)
    };
  };

  LayerContainer.prototype.componentDidMount = function componentDidMount() {
    var layerNode = (0, _reactDom.findDOMNode)(this.layerRef);
    // go over all the body children to remove focus when layer is opened
    (0, _DOM.getBodyChildElements)().forEach(function (node) {
      if (!node.contains(layerNode)) {
        node.setAttribute('aria-hidden', true);
        // prevent children to receive focus
        (0, _DOM.filterByFocusable)(node.getElementsByTagName('*')).forEach(function (element) {
          var originalTabIndex = element.getAttribute('tabindex');
          if (originalTabIndex) {
            element.setAttribute('data-tabindex', originalTabIndex);
          }
          element.setAttribute('tabindex', -1);
        });
      }
    });
    document.body.style.overflow = 'hidden';
    if (layerNode.scrollIntoView) {
      layerNode.scrollIntoView();
    }
    layerNode.focus();
  };

  LayerContainer.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    // go over all the body children to reset focus when layer is closed
    (0, _DOM.getBodyChildElements)().forEach(function (node) {
      if (!node.contains((0, _reactDom.findDOMNode)(_this2.layerRef))) {
        node.setAttribute('aria-hidden', false);

        // reset node focus
        (0, _DOM.filterByFocusable)(node.getElementsByTagName('*')).forEach(function (element) {
          var originalTabIndex = element.getAttribute('data-tabindex');
          if (originalTabIndex) {
            element.setAttribute('tabindex', originalTabIndex);
            element.removeAttribute('data-tabindex');
          } else {
            element.removeAttribute('tabindex', -1);
          }
        });
      }
    });
    document.body.style.overflow = 'scroll';
  };

  LayerContainer.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        children = _props.children,
        closer = _props.closer,
        _props$messages = _props.messages,
        messages = _props$messages === undefined ? {} : _props$messages,
        onClose = _props.onClose,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'closer', 'messages', 'onClose', 'theme']);

    var globalTheme = JSON.parse(JSON.stringify(_vanilla2.default));
    var localTheme = (0, _deepAssign2.default)(globalTheme, theme);

    var closerNode = void 0;
    if ((typeof closer === 'undefined' ? 'undefined' : _typeof(closer)) === 'object') {
      closerNode = closer;
    } else if (onClose) {
      closerNode = _react2.default.createElement(
        _StyledLayer.StyledCloser,
        { theme: localTheme },
        _react2.default.createElement(_button.Button, {
          a11yTitle: messages.closeLayer || 'Close Layer',
          icon: _react2.default.createElement(CloseIcon, null),
          onClick: onClose,
          plain: true
        })
      );
    }

    return _react2.default.createElement(
      _keyboard.Keyboard,
      { onEsc: onClose },
      _react2.default.createElement(
        _StyledLayer2.default,
        {
          tabIndex: '-1',
          ref: function ref(_ref) {
            _this3.layerRef = _ref;
          },
          theme: localTheme
        },
        _react2.default.createElement(
          _StyledLayer.StyledContainer,
          _extends({}, rest, {
            theme: localTheme,
            tabIndex: '-1',
            'aria-hidden': 'true'
          }),
          closerNode,
          children
        )
      )
    );
  };

  return LayerContainer;
}(_react.Component);

LayerContainer.childContextTypes = {
  theme: _propTypes2.default.object
};
LayerContainer.defaultProps = {
  theme: undefined
};
exports.default = LayerContainer;
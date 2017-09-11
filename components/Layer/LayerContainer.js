'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deepAssign = require('deep-assign');

var _deepAssign2 = _interopRequireDefault(_deepAssign);

var _cloneDeep = require('clone-deep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _StyledLayer = require('./StyledLayer');

var _StyledLayer2 = _interopRequireDefault(_StyledLayer);

var _Keyboard = require('../Keyboard');

var _vanilla = require('../../themes/vanilla');

var _vanilla2 = _interopRequireDefault(_vanilla);

var _DOM = require('../utils/DOM');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayerContainer = function (_Component) {
  _inherits(LayerContainer, _Component);

  function LayerContainer() {
    _classCallCheck(this, LayerContainer);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LayerContainer.prototype.getChildContext = function getChildContext() {
    var theme = this.props.theme;
    var contextTheme = this.context.theme;


    return _extends({}, this.context, {
      theme: contextTheme || (0, _deepAssign2.default)((0, _cloneDeep2.default)(_vanilla2.default), theme)
    });
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
        onEsc = _props.onEsc,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'onEsc', 'theme']);

    var globalTheme = JSON.parse(JSON.stringify(_vanilla2.default));
    var localTheme = (0, _deepAssign2.default)(globalTheme, theme);

    return _react2.default.createElement(
      _Keyboard.Keyboard,
      { onEsc: onEsc },
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
            tabIndex: '-1'
          }),
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
LayerContainer.contextTypes = {
  theme: _propTypes2.default.object
};
LayerContainer.defaultProps = {
  theme: undefined
};
exports.default = LayerContainer;
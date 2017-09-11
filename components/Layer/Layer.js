'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _LayerContainer = require('./LayerContainer');

var _LayerContainer2 = _interopRequireDefault(_LayerContainer);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

var _hocs = require('../hocs');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layer = function (_Component) {
  _inherits(Layer, _Component);

  function Layer() {
    _classCallCheck(this, Layer);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Layer.prototype.componentDidMount = function componentDidMount() {
    this.originalFocusedElement = document.activeElement;
    this.layerContainer = (0, _utils.getNewContainer)();
    this.renderLayer();
  };

  Layer.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    if (this.originalFocusedElement) {
      if (this.originalFocusedElement.focus) {
        // wait for the fixed positioning to come back to normal
        // see layer styling for reference
        setTimeout(function () {
          _this2.originalFocusedElement.focus();
        }, 0);
      } else if (this.originalFocusedElement.parentNode && this.originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        this.originalFocusedElement.parentNode.focus();
      }
    }
    (0, _reactDom.unmountComponentAtNode)(this.layerContainer);
    document.body.removeChild(this.layerContainer);
  };

  Layer.prototype.renderLayer = function renderLayer() {
    var ContextProvider = (0, _hocs.createContextProvider)(this.props.context);
    (0, _reactDom.render)(_react2.default.createElement(
      ContextProvider,
      null,
      _react2.default.createElement(_LayerContainer2.default, this.props)
    ), this.layerContainer);
  };

  Layer.prototype.render = function render() {
    return _react2.default.createElement('span', { style: { display: 'none' } });
  };

  return Layer;
}(_react.Component);

Layer.defaultProps = {
  align: 'center'
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Layer);
}

exports.default = Layer;
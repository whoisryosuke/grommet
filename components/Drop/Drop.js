'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _utils = require('../../utils');

var _hocs = require('../hocs');

var _DropContainer = require('./DropContainer');

var _DropContainer2 = _interopRequireDefault(_DropContainer);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drop = function (_Component) {
  _inherits(Drop, _Component);

  function Drop() {
    _classCallCheck(this, Drop);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Drop.prototype.componentWillMount = function componentWillMount() {
    this.originalFocusedElement = document.activeElement;
    this.dropContainer = (0, _utils.getNewContainer)();
  };

  Drop.prototype.componentWillUnmount = function componentWillUnmount() {
    var restrictFocus = this.props.restrictFocus;

    if (restrictFocus && this.originalFocusedElement) {
      if (this.originalFocusedElement.focus) {
        (0, _utils.setFocusWithoutScroll)(this.originalFocusedElement);
      } else if (this.originalFocusedElement.parentNode && this.originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        (0, _utils.setFocusWithoutScroll)(this.originalFocusedElement.parentNode);
      }
    }
    document.body.removeChild(this.dropContainer);
  };

  Drop.prototype.render = function render() {
    return (0, _reactDom.createPortal)(_react2.default.createElement(_DropContainer2.default, this.props), this.dropContainer);
  };

  return Drop;
}(_react.Component);

Drop.defaultProps = {
  align: {
    top: 'top',
    left: 'left'
  }
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Drop);
}

exports.default = (0, _hocs.withTheme)(Drop);
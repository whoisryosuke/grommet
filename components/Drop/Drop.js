'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _DropContainer = require('./DropContainer');

var _DropContainer2 = _interopRequireDefault(_DropContainer);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

var _hocs = require('../hocs');

var _utils = require('../utils');

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

  Drop.prototype.componentDidMount = function componentDidMount() {
    this.dropContainer = (0, _utils.getNewContainer)();
    this.renderDrop();
  };

  Drop.prototype.componentDidUpdate = function componentDidUpdate() {
    this.renderDrop();
  };

  Drop.prototype.componentWillUnmount = function componentWillUnmount() {
    (0, _reactDom.unmountComponentAtNode)(this.dropContainer);
    document.body.removeChild(this.dropContainer);
  };

  Drop.prototype.renderDrop = function renderDrop() {
    var ContextProvider = (0, _hocs.createContextProvider)(this.props.context);
    (0, _reactDom.render)(_react2.default.createElement(
      ContextProvider,
      null,
      _react2.default.createElement(_DropContainer2.default, this.props)
    ), this.dropContainer);
  };

  Drop.prototype.render = function render() {
    return _react2.default.createElement('span', { style: { display: 'none' } });
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

exports.default = Drop;
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Anchor = require('../Anchor/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleAnchor = function (_Component) {
  _inherits(SimpleAnchor, _Component);

  function SimpleAnchor() {
    _classCallCheck(this, SimpleAnchor);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleAnchor.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(
        _Anchor2.default,
        null,
        'Link'
      )
    );
  };

  return SimpleAnchor;
}(_react.Component);

var FocusedAnchor = function (_Component2) {
  _inherits(FocusedAnchor, _Component2);

  function FocusedAnchor() {
    var _temp, _this2, _ret;

    _classCallCheck(this, FocusedAnchor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.ref = _react2.default.createRef(), _temp), _possibleConstructorReturn(_this2, _ret);
  }

  FocusedAnchor.prototype.componentDidMount = function componentDidMount() {
    this.ref.current.focus();
  };

  FocusedAnchor.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(
        _Anchor2.default,
        { ref: this.ref, href: '#' },
        'Link'
      )
    );
  };

  return FocusedAnchor;
}(_react.Component);

(0, _react3.storiesOf)('Anchor', module).add('Simple Anchor', function () {
  return _react2.default.createElement(SimpleAnchor, null);
}).add('Focused Anchor', function () {
  return _react2.default.createElement(FocusedAnchor, null);
});
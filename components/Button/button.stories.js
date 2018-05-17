'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleButton = function (_Component) {
  _inherits(SimpleButton, _Component);

  function SimpleButton() {
    _classCallCheck(this, SimpleButton);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleButton.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_Button2.default, { label: 'Submit', onClick: function onClick() {} })
    );
  };

  return SimpleButton;
}(_react.Component);

var FocusedButton = function (_Component2) {
  _inherits(FocusedButton, _Component2);

  function FocusedButton() {
    var _temp, _this2, _ret;

    _classCallCheck(this, FocusedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.ref = _react2.default.createRef(), _temp), _possibleConstructorReturn(_this2, _ret);
  }

  FocusedButton.prototype.componentDidMount = function componentDidMount() {
    this.ref.current.focus();
  };

  FocusedButton.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_Button2.default, { ref: this.ref, label: 'Submit', onClick: function onClick() {} })
    );
  };

  return FocusedButton;
}(_react.Component);

(0, _react3.storiesOf)('Button', module).add('Simple Button', function () {
  return _react2.default.createElement(SimpleButton, null);
}).add('Focused Button', function () {
  return _react2.default.createElement(FocusedButton, null);
});
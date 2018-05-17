'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _TextArea = require('../TextArea/TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleTextArea = function (_Component) {
  _inherits(SimpleTextArea, _Component);

  function SimpleTextArea() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleTextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { value: '' }, _this.onChange = function (event) {
      return _this.setState({ value: event.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleTextArea.prototype.render = function render() {
    var value = this.state.value;

    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_TextArea2.default, { value: value, onChange: this.onChange })
    );
  };

  return SimpleTextArea;
}(_react.Component);

var FocusedTextArea = function (_Component2) {
  _inherits(FocusedTextArea, _Component2);

  function FocusedTextArea() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, FocusedTextArea);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = { value: '' }, _this2.ref = _react2.default.createRef(), _this2.onChange = function (event) {
      return _this2.setState({ value: event.target.value });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  FocusedTextArea.prototype.componentDidMount = function componentDidMount() {
    this.ref.current.focus();
  };

  FocusedTextArea.prototype.render = function render() {
    var value = this.state.value;

    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_TextArea2.default, { ref: this.ref, value: value, onChange: this.onChange })
    );
  };

  return FocusedTextArea;
}(_react.Component);

(0, _react3.storiesOf)('TextArea', module).add('Simple TextArea', function () {
  return _react2.default.createElement(SimpleTextArea, null);
}).add('Focused TextArea', function () {
  return _react2.default.createElement(FocusedTextArea, null);
});
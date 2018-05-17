'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _RangeSelector = require('../RangeSelector/RangeSelector');

var _RangeSelector2 = _interopRequireDefault(_RangeSelector);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleRangeSelector = function (_Component) {
  _inherits(SimpleRangeSelector, _Component);

  function SimpleRangeSelector() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleRangeSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { values: [5, 10] }, _this.onChange = function (values) {
      return _this.setState({ values: values });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleRangeSelector.prototype.render = function render() {
    var values = this.state.values;

    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_RangeSelector2.default, { values: values, onChange: this.onChange })
    );
  };

  return SimpleRangeSelector;
}(_react.Component);

var FocusedRangeSelector = function (_Component2) {
  _inherits(FocusedRangeSelector, _Component2);

  function FocusedRangeSelector() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, FocusedRangeSelector);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = { values: [5, 10] }, _this2.ref = _react2.default.createRef(), _this2.onChange = function (values) {
      return _this2.setState({ values: values });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  FocusedRangeSelector.prototype.componentDidMount = function componentDidMount() {
    this.ref.current.focus();
  };

  FocusedRangeSelector.prototype.render = function render() {
    var values = this.state.values;

    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_RangeSelector2.default, { ref: this.ref, values: values, onChange: this.onChange })
    );
  };

  return FocusedRangeSelector;
}(_react.Component);

(0, _react3.storiesOf)('RangeSelector', module).add('Simple RangeSelector', function () {
  return _react2.default.createElement(SimpleRangeSelector, null);
}).add('Focused RangeSelector', function () {
  return _react2.default.createElement(FocusedRangeSelector, null);
});
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _themes = require('../../themes');

var _Stack = require('../Stack/Stack');

var _Stack2 = _interopRequireDefault(_Stack);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleStack = function (_Component) {
  _inherits(SimpleStack, _Component);

  function SimpleStack() {
    _classCallCheck(this, SimpleStack);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleStack.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(
        _Stack2.default,
        { anchor: 'center' },
        _react2.default.createElement(_Box2.default, { pad: 'large', background: 'neutral-1' }),
        _react2.default.createElement(_Box2.default, { pad: 'small', background: 'accent-1' })
      )
    );
  };

  return SimpleStack;
}(_react.Component);

var FillStack = function (_Component2) {
  _inherits(FillStack, _Component2);

  function FillStack() {
    _classCallCheck(this, FillStack);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  FillStack.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      { theme: _themes.grommet, full: true },
      _react2.default.createElement(
        _Stack2.default,
        { fill: true },
        _react2.default.createElement(
          _Box2.default,
          { background: 'brand', fill: true },
          'Test'
        )
      )
    );
  };

  return FillStack;
}(_react.Component);

(0, _react3.storiesOf)('Stack', module).add('Simple Stack', function () {
  return _react2.default.createElement(SimpleStack, null);
}).add('Fill Stack', function () {
  return _react2.default.createElement(FillStack, null);
});
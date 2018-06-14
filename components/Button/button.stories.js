'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      _react2.default.createElement(_Button2.default, _extends({ label: 'Submit', onClick: function onClick() {} }, this.props))
    );
  };

  return SimpleButton;
}(_react.Component);

var customTheme = {
  button: {
    border: {
      radius: undefined,
      color: '#2196f3'
    },
    padding: {
      vertical: '12px',
      horizontal: '24px'
    },
    colors: {
      primary: '#2196f3'
    },
    extend: function extend(props) {
      var extraStyles = '';
      if (props.primary) {
        extraStyles = '\n          text-transform: uppercase;\n        ';
      }
      return '\n        color: white;\n\n        span {\n          font-size: 12px;\n        }\n\n        ' + extraStyles + '\n      ';
    }
  }
};

var CustomThemeButton = function (_Component2) {
  _inherits(CustomThemeButton, _Component2);

  function CustomThemeButton() {
    _classCallCheck(this, CustomThemeButton);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  CustomThemeButton.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      { theme: customTheme },
      _react2.default.createElement(_Button2.default, { label: 'Submit', onClick: function onClick() {}, primary: true })
    );
  };

  return CustomThemeButton;
}(_react.Component);

(0, _react3.storiesOf)('Button', module).add('Default', function () {
  return _react2.default.createElement(SimpleButton, null);
}).add('Primary', function () {
  return _react2.default.createElement(SimpleButton, { primary: true });
}).add('Custom theme', function () {
  return _react2.default.createElement(CustomThemeButton, null);
});
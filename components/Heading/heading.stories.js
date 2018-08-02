'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Heading = require('../Heading/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleHeading = function (_Component) {
  _inherits(SimpleHeading, _Component);

  function SimpleHeading() {
    _classCallCheck(this, SimpleHeading);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleHeading.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(
        _Heading2.default,
        null,
        'Brief Heading'
      )
    );
  };

  return SimpleHeading;
}(_react.Component);

(0, _react3.storiesOf)('Heading', module).add('Simple Heading', function () {
  return _react2.default.createElement(SimpleHeading, null);
});
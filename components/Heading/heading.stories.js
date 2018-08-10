'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Heading = require('../Heading/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Grid = require('../Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _ThemeContext = require('../../contexts/ThemeContext');

var _ThemeContext2 = _interopRequireDefault(_ThemeContext);

var _themes = require('../../themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H = function H(_ref) {
  var level = _ref.level,
      size = _ref.size;
  return _react2.default.createElement(
    _Heading2.default,
    { level: level, size: size },
    'Heading ' + level + ' ' + size
  );
};

var Set = function Set(_ref2) {
  var size = _ref2.size,
      theme = _ref2.theme;
  return _react2.default.createElement(
    'div',
    null,
    [1, 2, 3, 4].map(function (level) {
      return _react2.default.createElement(H, { level: level, size: size, theme: theme });
    })
  );
};

var All = function (_Component) {
  _inherits(All, _Component);

  function All() {
    _classCallCheck(this, All);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  All.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _ThemeContext2.default.Consumer,
        null,
        function (theme) {
          return _react2.default.createElement(
            _Grid2.default,
            { columns: 'large', gap: 'medium' },
            _react2.default.createElement(Set, { size: 'medium', theme: theme }),
            _react2.default.createElement(Set, { size: 'small', theme: theme }),
            _react2.default.createElement(Set, { size: 'large', theme: theme })
          );
        }
      )
    );
  };

  return All;
}(_react.Component);

(0, _react3.storiesOf)('Heading', module).add('All', function () {
  return _react2.default.createElement(All, null);
});
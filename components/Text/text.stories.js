'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _themes = require('../../themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizes = ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'];

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
      sizes.map(function (size) {
        return _react2.default.createElement(
          _Box2.default,
          { margin: 'small' },
          _react2.default.createElement(
            _Text2.default,
            { size: size },
            'Text ' + size
          )
        );
      })
    );
  };

  return All;
}(_react.Component);

(0, _react3.storiesOf)('Text', module).add('All', function () {
  return _react2.default.createElement(All, null);
});
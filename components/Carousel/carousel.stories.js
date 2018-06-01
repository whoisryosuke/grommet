'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _grommetIcons = require('grommet-icons');

var _Carousel = require('../Carousel/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleCarousel = function (_Component) {
  _inherits(SimpleCarousel, _Component);

  function SimpleCarousel() {
    _classCallCheck(this, SimpleCarousel);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleCarousel.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(
        _Box2.default,
        { justify: 'center', align: 'center' },
        _react2.default.createElement(
          _Carousel2.default,
          null,
          _react2.default.createElement(
            _Box2.default,
            { pad: 'xlarge', background: 'accent-1' },
            _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' })
          ),
          _react2.default.createElement(
            _Box2.default,
            { pad: 'xlarge', background: 'accent-2' },
            _react2.default.createElement(_grommetIcons.TreeOption, { size: 'xlarge' })
          ),
          _react2.default.createElement(
            _Box2.default,
            { pad: 'xlarge', background: 'accent-3' },
            _react2.default.createElement(_grommetIcons.Car, { size: 'xlarge' })
          )
        )
      )
    );
  };

  return SimpleCarousel;
}(_react.Component);

(0, _react3.storiesOf)('Carousel', module).add('Simple Carousel', function () {
  return _react2.default.createElement(SimpleCarousel, null);
});
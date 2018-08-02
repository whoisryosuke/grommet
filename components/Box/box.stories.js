'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _grommetIcons = require('grommet-icons');

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Anchor = require('../Anchor/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleBox = function (_Component) {
  _inherits(SimpleBox, _Component);

  function SimpleBox() {
    _classCallCheck(this, SimpleBox);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleBox.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(
        _Box2.default,
        {
          direction: 'row-responsive',
          justify: 'center',
          align: 'center',
          pad: 'xlarge',
          background: 'dark-2'
        },
        _react2.default.createElement(
          _Box2.default,
          {
            pad: 'xlarge',
            align: 'center',
            background: { color: 'white-2', opacity: 'strong' }
          },
          _react2.default.createElement(_grommetIcons.Attraction, { size: 'xlarge' }),
          _react2.default.createElement(
            _Text2.default,
            null,
            'Party'
          ),
          _react2.default.createElement(_Anchor2.default, { href: '', label: 'Link' }),
          _react2.default.createElement(_Button2.default, { label: 'Button', onClick: function onClick() {} })
        ),
        _react2.default.createElement(
          _Box2.default,
          {
            pad: 'xlarge',
            align: 'center',
            background: { color: 'accent-2', opacity: 'weak' }
          },
          _react2.default.createElement(_grommetIcons.TreeOption, { size: 'xlarge' }),
          _react2.default.createElement(
            _Text2.default,
            null,
            'Nature'
          ),
          _react2.default.createElement(_Anchor2.default, { href: '', label: 'Link' }),
          _react2.default.createElement(_Button2.default, { label: 'Button', onClick: function onClick() {} })
        ),
        _react2.default.createElement(
          _Box2.default,
          { pad: 'xlarge', align: 'center', background: 'dark-3' },
          _react2.default.createElement(_grommetIcons.Car, { size: 'xlarge', color: 'light-2' }),
          _react2.default.createElement(
            _Text2.default,
            null,
            'Travel'
          ),
          _react2.default.createElement(_Anchor2.default, { href: '', label: 'Link' }),
          _react2.default.createElement(_Button2.default, { label: 'Button', onClick: function onClick() {} })
        )
      )
    );
  };

  return SimpleBox;
}(_react.Component);

var customColorBox = {
  global: {
    colors: {
      'brand-gradient': 'linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)'
    }
  }
};

var CustomColorBox = function (_Component2) {
  _inherits(CustomColorBox, _Component2);

  function CustomColorBox() {
    _classCallCheck(this, CustomColorBox);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  CustomColorBox.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      { theme: customColorBox },
      _react2.default.createElement(
        _Box2.default,
        {
          justify: 'center',
          align: 'center',
          pad: 'xlarge',
          background: { color: 'brand-gradient', dark: true },
          round: 'large'
        },
        _react2.default.createElement(
          _Text2.default,
          null,
          'I have a linear gradient background'
        )
      )
    );
  };

  return CustomColorBox;
}(_react.Component);

(0, _react3.storiesOf)('Box', module).add('Simple Box', function () {
  return _react2.default.createElement(SimpleBox, null);
}).add('Custom color', function () {
  return _react2.default.createElement(CustomColorBox, null);
});
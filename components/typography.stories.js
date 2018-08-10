'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Grommet = require('./Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Box = require('./Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Heading = require('./Heading/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Paragraph = require('./Paragraph/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Text = require('./Text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _themes = require('../themes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var paragraphFiller = '\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua.\n';

var Medium = function (_Component) {
  _inherits(Medium, _Component);

  function Medium() {
    _classCallCheck(this, Medium);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Medium.prototype.render = function render() {
    var margin = undefined;
    return _react2.default.createElement(
      _Grommet2.default,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _Box2.default,
        { pad: 'medium' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Heading2.default,
            { margin: margin },
            'Heading 1 - Medium'
          ),
          _react2.default.createElement(
            _Text2.default,
            { size: 'xlarge' },
            'Text XLarge'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            { size: 'large', margin: margin },
            'Paragraph - Large',
            paragraphFiller
          ),
          _react2.default.createElement(
            _Heading2.default,
            { level: 2, margin: margin },
            'Heading 2 - Medium'
          ),
          _react2.default.createElement(
            _Text2.default,
            { size: 'large' },
            'Text Large'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            { margin: margin },
            'Paragraph - Medium',
            paragraphFiller
          ),
          _react2.default.createElement(
            _Heading2.default,
            { level: 3, margin: margin },
            'Heading 3 - Medium'
          ),
          _react2.default.createElement(
            _Text2.default,
            null,
            'Text Medium'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            { margin: margin },
            'Paragraph - Medium',
            paragraphFiller
          ),
          _react2.default.createElement(
            _Heading2.default,
            { level: 4, margin: margin },
            'Heading 4 - Medium'
          ),
          _react2.default.createElement(
            _Text2.default,
            { size: 'small' },
            'Text Small'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            { size: 'small', margin: margin },
            'Paragraph - Small',
            paragraphFiller
          )
        )
      )
    );
  };

  return Medium;
}(_react.Component);

var Small = function (_Component2) {
  _inherits(Small, _Component2);

  function Small() {
    _classCallCheck(this, Small);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  Small.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _Box2.default,
        { pad: 'medium' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Heading2.default,
            { size: 'small' },
            'Heading 1 - Small'
          ),
          _react2.default.createElement(
            _Text2.default,
            { size: 'large' },
            'Text Large'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            null,
            'Paragraph - Medium',
            paragraphFiller
          ),
          _react2.default.createElement(
            _Heading2.default,
            { level: 2, size: 'small' },
            'Heading 2 - Small'
          ),
          _react2.default.createElement(
            _Text2.default,
            null,
            'Text Medium'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            null,
            'Paragraph - Medium',
            paragraphFiller
          ),
          _react2.default.createElement(
            _Heading2.default,
            { level: 3, size: 'small' },
            'Heading 3 - Small'
          ),
          _react2.default.createElement(
            _Text2.default,
            null,
            'Text Medium'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            { size: 'small' },
            'Paragraph - Small',
            paragraphFiller
          ),
          _react2.default.createElement(
            _Heading2.default,
            { level: 4, size: 'small' },
            'Heading 4 - Small'
          ),
          _react2.default.createElement(
            _Text2.default,
            { size: 'small' },
            'Text Small'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            { size: 'small' },
            'Paragraph - Small',
            paragraphFiller
          )
        )
      )
    );
  };

  return Small;
}(_react.Component);

var Large = function (_Component3) {
  _inherits(Large, _Component3);

  function Large() {
    _classCallCheck(this, Large);

    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  Large.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      { theme: _themes.grommet },
      _react2.default.createElement(
        _Box2.default,
        { pad: 'medium' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _Heading2.default,
            { size: 'large' },
            'Heading 1 - Large'
          ),
          _react2.default.createElement(
            _Text2.default,
            { size: 'xxlarge' },
            'Text XXLarge'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            { size: 'xlarge' },
            'Paragraph - XLarge',
            paragraphFiller
          ),
          _react2.default.createElement(
            _Heading2.default,
            { level: 2, size: 'large' },
            'Heading 2 - Large'
          ),
          _react2.default.createElement(
            _Text2.default,
            { size: 'xlarge' },
            'Text XLarge'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            { size: 'large' },
            'Paragraph - Large',
            paragraphFiller
          ),
          _react2.default.createElement(
            _Heading2.default,
            { level: 3, size: 'large' },
            'Heading 3 - Large'
          ),
          _react2.default.createElement(
            _Text2.default,
            { size: 'large' },
            'Text Large'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            null,
            'Paragraph - Medium',
            paragraphFiller
          ),
          _react2.default.createElement(
            _Heading2.default,
            { level: 4, size: 'large' },
            'Heading 4 - Large'
          ),
          _react2.default.createElement(
            _Text2.default,
            null,
            'Text Medium'
          ),
          _react2.default.createElement(
            _Paragraph2.default,
            null,
            'Paragraph - Medium',
            paragraphFiller
          )
        )
      )
    );
  };

  return Large;
}(_react.Component);

(0, _react3.storiesOf)('Typography', module).add('Small', function () {
  return _react2.default.createElement(Small, null);
}).add('Medium', function () {
  return _react2.default.createElement(Medium, null);
}).add('Large', function () {
  return _react2.default.createElement(Large, null);
});
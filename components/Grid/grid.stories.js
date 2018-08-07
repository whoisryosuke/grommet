'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Grid = require('../Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppGrid = function (_Component) {
  _inherits(AppGrid, _Component);

  function AppGrid() {
    var _temp, _this, _ret;

    _classCallCheck(this, AppGrid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { sidebar: true }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  AppGrid.prototype.render = function render() {
    var _this2 = this;

    var sidebar = this.state.sidebar;

    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(
        _Grid2.default,
        {
          rows: ['auto', 'medium'],
          columns: ['auto', 'flex'],
          areas: [{ name: 'header', start: [0, 0], end: [1, 0] }, { name: 'sidebar', start: [0, 1], end: [0, 1] }, { name: 'main', start: [1, 1], end: [1, 1] }]
        },
        _react2.default.createElement(
          _Box2.default,
          {
            gridArea: 'header',
            direction: 'row',
            align: 'center',
            justify: 'between',
            pad: { horizontal: 'medium', vertical: 'small' },
            background: 'dark-2'
          },
          _react2.default.createElement(
            _Button2.default,
            { onClick: function onClick() {
                return _this2.setState({ sidebar: !sidebar });
              } },
            _react2.default.createElement(
              _Text2.default,
              { size: 'large' },
              'Title'
            )
          ),
          _react2.default.createElement(
            _Text2.default,
            null,
            'my@email'
          )
        ),
        sidebar && _react2.default.createElement(
          _Box2.default,
          {
            gridArea: 'sidebar',
            background: 'dark-5',
            width: 'small',
            animation: [{ type: 'fadeIn', duration: 300 }, { type: 'slideRight', size: 'xlarge', duration: 150 }]
          },
          ['First', 'Second', 'Third'].map(function (name) {
            return _react2.default.createElement(
              _Button2.default,
              { key: name, href: '#', hoverIndicator: true },
              _react2.default.createElement(
                _Box2.default,
                { pad: { horizontal: 'medium', vertical: 'small' } },
                _react2.default.createElement(
                  _Text2.default,
                  null,
                  name
                )
              )
            );
          })
        ),
        _react2.default.createElement(
          _Box2.default,
          { gridArea: 'main', justify: 'center', align: 'center' },
          _react2.default.createElement(
            _Text2.default,
            null,
            'main'
          )
        )
      )
    );
  };

  return AppGrid;
}(_react.Component);

(0, _react3.storiesOf)('Grid', module).add('App', function () {
  return _react2.default.createElement(AppGrid, null);
});
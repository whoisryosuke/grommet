'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Menu = require('../Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleMenu = function (_Component) {
  _inherits(SimpleMenu, _Component);

  function SimpleMenu() {
    _classCallCheck(this, SimpleMenu);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleMenu.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(
        _Box2.default,
        { direction: 'row', gap: 'large' },
        _react2.default.createElement(_Menu2.default, { label: 'Actions', items: [{ label: 'Launch' }, { label: 'Abort' }] }),
        _react2.default.createElement(_Menu2.default, { label: 'Actions', items: [{ label: 'Launch' }, { label: 'Abort' }] })
      )
    );
  };

  return SimpleMenu;
}(_react.Component);

var FocusedMenu = function (_Component2) {
  _inherits(FocusedMenu, _Component2);

  function FocusedMenu() {
    var _temp, _this2, _ret;

    _classCallCheck(this, FocusedMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.ref = _react2.default.createRef(), _temp), _possibleConstructorReturn(_this2, _ret);
  }

  FocusedMenu.prototype.componentDidMount = function componentDidMount() {
    this.ref.current.focus();
  };

  FocusedMenu.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_Menu2.default, {
        ref: this.ref,
        label: 'Actions',
        items: [{ label: 'Launch' }, { label: 'Abort' }]
      })
    );
  };

  return FocusedMenu;
}(_react.Component);

(0, _react3.storiesOf)('Menu', module).add('Simple Menu', function () {
  return _react2.default.createElement(SimpleMenu, null);
}).add('Focused Menu', function () {
  return _react2.default.createElement(FocusedMenu, null);
});
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deepAssign = require('deep-assign');

var _deepAssign2 = _interopRequireDefault(_deepAssign);

var _cloneDeep = require('clone-deep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _StyledGrommet = require('./StyledGrommet');

var _StyledGrommet2 = _interopRequireDefault(_StyledGrommet);

var _vanilla = require('../../themes/vanilla');

var _vanilla2 = _interopRequireDefault(_vanilla);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grommet = function (_Component) {
  _inherits(Grommet, _Component);

  function Grommet() {
    _classCallCheck(this, Grommet);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Grommet.prototype.getChildContext = function getChildContext() {
    var theme = this.props.theme;


    var globalTheme = (0, _cloneDeep2.default)(_vanilla2.default);

    return {
      grommet: {},
      theme: (0, _deepAssign2.default)(globalTheme, theme)
    };
  };

  Grommet.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'theme']);

    var globalTheme = (0, _cloneDeep2.default)(_vanilla2.default);
    return _react2.default.createElement(
      _StyledGrommet2.default,
      _extends({}, rest, { theme: (0, _deepAssign2.default)(globalTheme, theme) }),
      children
    );
  };

  return Grommet;
}(_react.Component);

Grommet.childContextTypes = {
  grommet: _propTypes2.default.object,
  theme: _propTypes2.default.object
};
Grommet.defaultProps = {
  centered: true,
  theme: undefined
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Grommet);
}

exports.default = Grommet;
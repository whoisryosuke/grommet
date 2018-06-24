'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styledComponents = require('styled-components');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('../../../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _contexts = require('../../../../contexts');

var _utils = require('../../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var searchingStyle = (0, _styledComponents.css)(['position:relative;outline:none;box-shadow:none;&:before{content:\'\';position:absolute;bottom:0;left:0;width:100%;height:2px;background:', ';}&:after{content:\'\';position:absolute;bottom:0;left:0;width:80%;height:2px;will-change:left,right;background:', ';animation:progress 1s ease-out infinite;}@keyframes progress{0%{left:-100%;right:100%;}100%{left:100%;right:-50%;}}'], function (props) {
  return (0, _utils.colorForName)('light-2', props.theme);
}, function (props) {
  return (0, _utils.colorForName)('brand', props.theme);
});

var defaultStyle = (0, _styledComponents.css)(['position:relative;outline:none;&:after{content:\'\';position:absolute;bottom:0;left:50%;width:0;height:2px;background:transparent;transition:width .2s ease,background-color .2s ease,left .2s ease;}', ''], function (props) {
  return props.focus && '\n    box-shadow: none;\n    &:after {\n      left: 0;\n      width: 100%;\n      background: ' + (0, _utils.colorForName)('brand', props.theme) + ';\n    }\n  ';
});

var boxBorderTheme = {
  box: {
    extend: function extend(props) {
      return props.searching ? searchingStyle : defaultStyle;
    }
  }
};

var SearchBorderBox = function (_Component) {
  _inherits(SearchBorderBox, _Component);

  function SearchBorderBox() {
    var _temp, _this, _ret;

    _classCallCheck(this, SearchBorderBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SearchBorderBox.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        searching = _props.searching,
        rest = _objectWithoutProperties(_props, ['children', 'searching']);

    var focus = this.state.focus;

    return _react2.default.createElement(
      _contexts.ThemeContext.Extend,
      { value: boxBorderTheme },
      _react2.default.createElement(
        _Box2.default,
        _extends({
          focus: focus,
          searching: searching,
          onFocus: function onFocus() {
            return _this2.setState({ focus: true });
          },
          onBlur: function onBlur() {
            return _this2.setState({ focus: false });
          }
        }, rest),
        children
      )
    );
  };

  return SearchBorderBox;
}(_react.Component);

exports.default = SearchBorderBox;
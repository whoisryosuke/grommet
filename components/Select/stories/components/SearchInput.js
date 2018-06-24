'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _TextInput = require('../../../TextInput/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _SearchBorderBox = require('./SearchBorderBox');

var _SearchBorderBox2 = _interopRequireDefault(_SearchBorderBox);

var _SearchInputContext = require('./SearchInputContext');

var _SearchInputContext2 = _interopRequireDefault(_SearchInputContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchInput = function (_Component) {
  _inherits(SearchInput, _Component);

  function SearchInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, SearchInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.textInputRef = (0, _react.createRef)(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  SearchInput.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    setTimeout(function () {
      (0, _reactDom.findDOMNode)(_this2.textInputRef.current).focus();
    }, 300);
  };

  SearchInput.prototype.render = function render() {
    var _this3 = this;

    return _react2.default.createElement(
      _SearchInputContext2.default.Consumer,
      null,
      function (_ref) {
        var searching = _ref.searching;
        return _react2.default.createElement(
          _SearchBorderBox2.default,
          { searching: searching },
          _react2.default.createElement(_TextInput2.default, _extends({}, _this3.props, {
            plain: true,
            ref: _this3.textInputRef
          }))
        );
      }
    );
  };

  return SearchInput;
}(_react.Component);

exports.default = SearchInput;
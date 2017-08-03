'use strict';

exports.__esModule = true;

var _react = require('react');

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYS = {
  8: 'onBackspace',
  9: 'onTab',
  13: 'onEnter',
  27: 'onEsc',
  32: 'onSpace',
  37: 'onLeft',
  38: 'onUp',
  39: 'onRight',
  40: 'onDown',
  188: 'onComma',
  16: 'onShift'
};

var Keyboard = function (_Component) {
  _inherits(Keyboard, _Component);

  function Keyboard() {
    _classCallCheck(this, Keyboard);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Keyboard.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        _onKeyDown = _props.onKeyDown;


    return (0, _react.cloneElement)(_react.Children.only(children), {
      onKeyDown: function onKeyDown(event) {
        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        var key = event.keyCode ? event.keyCode : event.which;
        var callbackName = KEYS[key];
        if (callbackName && _this2.props[callbackName]) {
          var _props2;

          (_props2 = _this2.props)[callbackName].apply(_props2, [event].concat(rest));
        }
        if (_onKeyDown) {
          _onKeyDown.apply(undefined, [event].concat(rest));
        }
      }
    });
  };

  return Keyboard;
}(_react.Component);

if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Keyboard);
}

exports.default = Keyboard;
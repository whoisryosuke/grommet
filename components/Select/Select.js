'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Box = require('../Box');

var _DropButton = require('../DropButton');

var _Keyboard = require('../Keyboard');

var _TextInput = require('../TextInput');

var _hocs = require('../hocs');

var _SelectContainer = require('./SelectContainer');

var _SelectContainer2 = _interopRequireDefault(_SelectContainer);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectTextInput = (0, _styledComponents2.default)(_TextInput.TextInput).withConfig({
  displayName: 'Select__SelectTextInput'
})(['cursor:pointer;']);

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { open: false }, _this.onOpen = function () {
      _this.setState({ open: true });
    }, _this.onClose = function () {
      var onClose = _this.props.onClose;

      _this.setState({ open: false });
      if (onClose) {
        onClose();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Select.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        a11yTitle = _props.a11yTitle,
        children = _props.children,
        disabled = _props.disabled,
        dropAlign = _props.dropAlign,
        dropTarget = _props.dropTarget,
        messages = _props.messages,
        onChange = _props.onChange,
        onClose = _props.onClose,
        placeholder = _props.placeholder,
        plain = _props.plain,
        size = _props.size,
        theme = _props.theme,
        value = _props.value,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'children', 'disabled', 'dropAlign', 'dropTarget', 'messages', 'onChange', 'onClose', 'placeholder', 'plain', 'size', 'theme', 'value']);

    var open = this.state.open;


    var onSelectChange = function onSelectChange(event) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this2.onClose();
      if (onChange) {
        onChange.apply(undefined, [event].concat(args));
      }
    };

    var SelectIcon = theme.select.icons.down;
    var selectValue = void 0;
    var textValue = void 0;
    if (!_react2.default.isValidElement(value)) {
      if (Array.isArray(value)) {
        if (value.length > 1) {
          if (_react2.default.isValidElement(value[0])) {
            selectValue = value;
          } else {
            textValue = messages.multiple;
          }
        } else if (value.length === 1) {
          if (_react2.default.isValidElement(value[0])) {
            selectValue = value[0];
          } else {
            textValue = value[0];
          }
        } else {
          textValue = '';
        }
      } else {
        textValue = value;
      }
    } else {
      selectValue = value;
    }

    return _react2.default.createElement(
      _Keyboard.Keyboard,
      { onDown: this.onOpen, onUp: this.onOpen },
      _react2.default.createElement(
        _DropButton.DropButton,
        _extends({
          disabled: disabled,
          dropAlign: dropAlign,
          dropTarget: dropTarget
        }, rest, {
          open: open,
          onOpen: this.onOpen,
          onClose: this.onClose,
          a11yTitle: '' + a11yTitle + (typeof value === 'string' ? ', ' + value : ''),
          dropContent: _react2.default.createElement(_SelectContainer2.default, _extends({}, this.props, { onChange: onSelectChange }))
        }),
        _react2.default.createElement(
          _Box.Box,
          {
            align: 'center',
            border: !plain ? 'all' : undefined,
            direction: 'row',
            justify: 'between'
          },
          _react2.default.createElement(
            _Box.Box,
            { direction: 'row', flex: true },
            selectValue || _react2.default.createElement(SelectTextInput, _extends({
              ref: function ref(_ref) {
                _this2.inputRef = _ref;
              }
            }, rest, {
              tabIndex: '-1',
              type: 'text',
              placeholder: placeholder,
              plain: true,
              readOnly: true,
              value: textValue,
              size: size
            }))
          ),
          _react2.default.createElement(
            _Box.Box,
            {
              margin: { horizontal: 'small' },
              flex: false,
              style: { minWidth: 'auto' }
            },
            _react2.default.createElement(SelectIcon, { color: 'brand', size: size })
          )
        )
      )
    );
  };

  return Select;
}(_react.Component);

Select.defaultProps = {
  dropAlign: { top: 'bottom', left: 'left' },
  messages: { multiple: 'multiple' }
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Select);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(Select);
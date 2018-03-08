var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import FormDown from 'grommet-icons/icons/FormDown';


import { Box } from '../Box';
import { DropButton } from '../DropButton';
import { Keyboard } from '../Keyboard';
import { TextInput } from '../TextInput';

import SelectContainer from './SelectContainer';
import doc from './doc';

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
        dropAlign = _props.dropAlign,
        dropTarget = _props.dropTarget,
        onChange = _props.onChange,
        onClose = _props.onClose,
        placeholder = _props.placeholder,
        plain = _props.plain,
        value = _props.value,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'children', 'dropAlign', 'dropTarget', 'onChange', 'onClose', 'placeholder', 'plain', 'value']);

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

    return React.createElement(
      Keyboard,
      { onDown: this.onOpen, onUp: this.onOpen },
      React.createElement(
        DropButton,
        _extends({
          dropAlign: dropAlign,
          dropTarget: dropTarget
        }, rest, {
          open: open,
          onOpen: this.onOpen,
          onClose: this.onClose,
          a11yTitle: '' + a11yTitle + (typeof value === 'string' ? ', ' + value : ''),
          dropContent: React.createElement(SelectContainer, _extends({}, this.props, { onChange: onSelectChange }))
        }),
        React.createElement(
          Box,
          {
            'aria-hidden': true,
            align: 'center',
            border: !plain ? 'all' : undefined,
            direction: 'row',
            justify: 'between'
          },
          React.isValidElement(value) ? value : React.createElement(TextInput, _extends({
            style: { cursor: 'pointer' },
            ref: function ref(_ref) {
              _this2.inputRef = _ref;
            }
          }, rest, {
            tabIndex: '-1',
            type: 'text',
            placeholder: placeholder,
            plain: true,
            readOnly: true,
            value: value
          })),
          React.createElement(
            Box,
            {
              margin: { horizontal: 'small' },
              flex: false,
              style: { minWidth: 'auto' }
            },
            React.createElement(FormDown, null)
          )
        )
      )
    );
  };

  return Select;
}(Component);

Select.defaultProps = {
  dropAlign: { top: 'bottom', left: 'left' }
};


if (process.env.NODE_ENV !== 'production') {
  doc(Select);
}

export default Select;
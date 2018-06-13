function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Add, FormClose, StatusGood, Trash } from 'grommet-icons';

import { Box, Button, Grommet, Heading, Layer, Text } from '../';

var CenterLayer = function (_Component) {
  _inherits(CenterLayer, _Component);

  function CenterLayer() {
    var _temp, _this, _ret;

    _classCallCheck(this, CenterLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onOpen = function () {
      return _this.setState({ open: true });
    }, _this.onClose = function () {
      return _this.setState({ open: undefined });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CenterLayer.prototype.render = function render() {
    var open = this.state.open;

    return React.createElement(
      Grommet,
      null,
      React.createElement(Button, {
        icon: React.createElement(Trash, null),
        label: React.createElement(
          Text,
          null,
          React.createElement(
            'strong',
            null,
            'Remove'
          )
        ),
        onClick: this.onOpen,
        plain: true
      }),
      open && React.createElement(
        Layer,
        {
          position: 'center',
          modal: true,
          onClickOutside: this.onClose,
          onEsc: this.onClose
        },
        React.createElement(
          Box,
          { pad: 'medium', gap: 'small', width: 'medium' },
          React.createElement(
            Heading,
            { level: 3, margin: 'none' },
            'Confirm'
          ),
          React.createElement(
            Text,
            null,
            'Are you sure you want to delete?'
          ),
          React.createElement(
            Box,
            {
              tag: 'footer',
              gap: 'small',
              direction: 'row',
              align: 'center',
              justify: 'end',
              pad: { top: 'medium', bottom: 'small' }
            },
            React.createElement(Button, {
              label: 'Cancel',
              onClick: this.onClose,
              color: 'dark-6'
            }),
            React.createElement(Button, {
              label: React.createElement(
                Text,
                { color: 'white' },
                React.createElement(
                  'strong',
                  null,
                  'Delete'
                )
              ),
              onClick: this.onClose,
              primary: true,
              color: 'status-critical'
            })
          )
        )
      )
    );
  };

  return CenterLayer;
}(Component);

var NotificationLayer = function (_Component2) {
  _inherits(NotificationLayer, _Component2);

  function NotificationLayer() {
    var _temp2, _this2, _ret2;

    _classCallCheck(this, NotificationLayer);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {}, _this2.onOpen = function () {
      return _this2.setState({ open: true });
    }, _this2.onClose = function () {
      return _this2.setState({ open: undefined });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  NotificationLayer.prototype.render = function render() {
    var open = this.state.open;

    return React.createElement(
      Grommet,
      null,
      React.createElement(Button, {
        icon: React.createElement(Add, { color: 'brand' }),
        label: React.createElement(
          Text,
          null,
          React.createElement(
            'strong',
            null,
            'Add'
          )
        ),
        onClick: this.onOpen,
        plain: true
      }),
      open && React.createElement(
        Layer,
        {
          position: 'bottom',
          full: 'horizontal',
          modal: false,
          responsive: false
        },
        React.createElement(
          Box,
          { align: 'start', pad: { vertical: 'medium', horizontal: 'small' } },
          React.createElement(
            Box,
            {
              align: 'center',
              direction: 'row',
              gap: 'small',
              round: 'medium',
              elevation: 'medium',
              pad: { vertical: 'xsmall', horizontal: 'small' },
              background: 'status-ok'
            },
            React.createElement(
              Box,
              { align: 'center', direction: 'row', gap: 'xsmall' },
              React.createElement(StatusGood, null),
              React.createElement(
                Text,
                null,
                'A new virtual machine has been successfully added'
              )
            ),
            React.createElement(Button, { icon: React.createElement(FormClose, null), onClick: this.onClose, plain: true })
          )
        )
      )
    );
  };

  return NotificationLayer;
}(Component);

storiesOf('Layer', module).add('Center', function () {
  return React.createElement(CenterLayer, null);
}).add('Notification', function () {
  return React.createElement(NotificationLayer, null);
});
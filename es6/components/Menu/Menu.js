var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { compose } from 'recompose';

import { FormDown } from 'grommet-icons';

import { Button } from '../Button';
import { Keyboard } from '../Keyboard';
import { Drop } from '../Drop';

import { withTheme } from '../hocs';

import doc from './doc';

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      activeItemIndex: -1,
      showDrop: false
    }, _this.buttonRefs = {}, _this.onDropClose = function () {
      _this.setState({
        activeItemIndex: -1,
        showDrop: false
      });
    }, _this.onSelectMenuItem = function (event) {
      var activeItemIndex = _this.state.activeItemIndex;

      if (activeItemIndex >= 0) {
        event.preventDefault();
        event.stopPropagation();
        findDOMNode(_this.buttonRefs[activeItemIndex]).click();
      }
    }, _this.onNextMenuItem = function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          showDrop = _this$state.showDrop,
          activeItemIndex = _this$state.activeItemIndex;

      if (!showDrop) {
        _this.setState({
          showDrop: true,
          activeItemIndex: -1
        });
      } else {
        var items = _this.props.items;

        var index = Math.min(activeItemIndex + 1, items.length - 1);
        _this.setState({ activeItemIndex: index });
        // this.setState({ activeSuggestionIndex: index },
        //   this._announceSuggestion.bind(this, index));
      }
    }, _this.onPreviousMenuItem = function (event) {
      event.preventDefault();
      var _this$state2 = _this.state,
          showDrop = _this$state2.showDrop,
          activeItemIndex = _this$state2.activeItemIndex;

      if (!showDrop) {
        _this.setState({
          showDrop: true,
          activeItemIndex: -1
        });
      } else {
        var items = _this.props.items;

        var index = activeItemIndex === -1 ? items.length - 1 : Math.max(activeItemIndex - 1, 0);
        _this.setState({ activeItemIndex: index });
        // this.setState({ activeSuggestionIndex: index },
        //   this._announceSuggestion.bind(this, index));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Menu.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        background = _props.background,
        dropAlign = _props.dropAlign,
        icon = _props.icon,
        items = _props.items,
        label = _props.label,
        _props$messages = _props.messages,
        messages = _props$messages === undefined ? {} : _props$messages,
        onKeyDown = _props.onKeyDown,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['background', 'dropAlign', 'icon', 'items', 'label', 'messages', 'onKeyDown', 'theme']);

    var _state = this.state,
        activeItemIndex = _state.activeItemIndex,
        showDrop = _state.showDrop;


    var menuIcon = icon || React.createElement(FormDown, null);

    var controlMirror = React.createElement(Button, {
      justify: dropAlign.right ? 'end' : 'start',
      fill: true,
      a11yTitle: messages.closeMenu || 'Close Menu',
      box: true,
      reverse: true,
      icon: menuIcon,
      label: label,
      direction: 'row',
      pad: 'small',
      onClick: this.onDropClose
    });

    var drop = void 0;
    if (showDrop) {
      drop = React.createElement(
        Drop,
        {
          align: dropAlign,
          background: background,
          ref: function ref(_ref2) {
            _this2.dropRef = _ref2;
          },
          context: _extends({}, this.context),
          control: this.componentRef,
          onClose: this.onDropClose
        },
        dropAlign.top === 'top' ? controlMirror : undefined,
        items.map(function (item, index) {
          return React.createElement(Button, _extends({
            ref: function ref(_ref) {
              _this2.buttonRefs[index] = _ref;
            },
            active: activeItemIndex === index,
            box: true,
            pad: 'small',
            key: 'menuItem_' + index,
            fill: true,
            align: 'start',
            hoverIndicator: 'background'
          }, item, {
            onClick: item.onClick ? function () {
              item.onClick.apply(item, arguments);
              if (item.close !== false) {
                _this2.onDropClose();
              }
            } : undefined
          }));
        }),
        dropAlign.bottom === 'bottom' ? controlMirror : undefined
      );
    }

    return React.createElement(
      Keyboard,
      {
        onEnter: this.onSelectMenuItem,
        onSpace: this.onSelectMenuItem,
        onDown: this.onNextMenuItem,
        onUp: this.onPreviousMenuItem,
        onEsc: this.onDropClose,
        onTab: this.onDropClose,
        onKeyDown: onKeyDown
      },
      React.createElement(
        'div',
        null,
        React.createElement(Button, _extends({
          ref: function ref(_ref3) {
            _this2.componentRef = _ref3;
          },
          a11yTitle: messages.openMenu || 'Open Menu',
          align: 'start',
          box: true,
          reverse: true,
          icon: menuIcon,
          label: label,
          onClick: function onClick() {
            return _this2.setState({ activeItemIndex: -1, showDrop: !_this2.state.showDrop });
          },
          direction: 'row',
          pad: 'small'
        }, rest)),
        drop
      )
    );
  };

  return Menu;
}(Component);

Menu.contextTypes = {
  grommet: PropTypes.object,
  theme: PropTypes.object,
  router: PropTypes.any
};
Menu.defaultProps = {
  dropAlign: { top: 'top', left: 'left' }
};


if (process.env.NODE_ENV !== 'production') {
  doc(Menu);
}

export default compose(withTheme)(Menu);
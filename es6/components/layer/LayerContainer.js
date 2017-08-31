var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import PropTypes from 'prop-types';
import deepAssign from 'deep-assign';

import StyledLayer, { StyledContainer, StyledCloser } from './StyledLayer';

import { Button } from '../button';
import { Keyboard } from '../keyboard';

import baseTheme from '../../themes/vanilla';

import { filterByFocusable, getBodyChildElements } from '../utils/DOM';

// TODO: replace with grommet-icons
var CloseIcon = function CloseIcon() {
  return React.createElement(
    'svg',
    {
      version: '1.1',
      viewBox: '0 0 24 24',
      width: '24px',
      height: '24px',
      role: 'img'
    },
    React.createElement('path', {
      fill: 'none',
      stroke: '#333',
      strokeWidth: '2',
      d: 'M3,3 L21,21 M3,21 L21,3'
    })
  );
};

var LayerContainer = function (_Component) {
  _inherits(LayerContainer, _Component);

  function LayerContainer() {
    _classCallCheck(this, LayerContainer);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LayerContainer.prototype.getChildContext = function getChildContext() {
    var theme = this.props.theme;


    var globalTheme = JSON.parse(JSON.stringify(baseTheme));
    return {
      theme: deepAssign(globalTheme, theme)
    };
  };

  LayerContainer.prototype.componentDidMount = function componentDidMount() {
    var layerNode = findDOMNode(this.layerRef);
    // go over all the body children to remove focus when layer is opened
    getBodyChildElements().forEach(function (node) {
      if (!node.contains(layerNode)) {
        node.setAttribute('aria-hidden', true);
        // prevent children to receive focus
        filterByFocusable(node.getElementsByTagName('*')).forEach(function (element) {
          var originalTabIndex = element.getAttribute('tabindex');
          if (originalTabIndex) {
            element.setAttribute('data-tabindex', originalTabIndex);
          }
          element.setAttribute('tabindex', -1);
        });
      }
    });
    document.body.style.overflow = 'hidden';
    if (layerNode.scrollIntoView) {
      layerNode.scrollIntoView();
    }
    layerNode.focus();
  };

  LayerContainer.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    // go over all the body children to reset focus when layer is closed
    getBodyChildElements().forEach(function (node) {
      if (!node.contains(findDOMNode(_this2.layerRef))) {
        node.setAttribute('aria-hidden', false);

        // reset node focus
        filterByFocusable(node.getElementsByTagName('*')).forEach(function (element) {
          var originalTabIndex = element.getAttribute('data-tabindex');
          if (originalTabIndex) {
            element.setAttribute('tabindex', originalTabIndex);
            element.removeAttribute('data-tabindex');
          } else {
            element.removeAttribute('tabindex', -1);
          }
        });
      }
    });
    document.body.style.overflow = 'scroll';
  };

  LayerContainer.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        children = _props.children,
        closer = _props.closer,
        _props$messages = _props.messages,
        messages = _props$messages === undefined ? {} : _props$messages,
        onClose = _props.onClose,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'closer', 'messages', 'onClose', 'theme']);

    var globalTheme = JSON.parse(JSON.stringify(baseTheme));
    var localTheme = deepAssign(globalTheme, theme);

    var closerNode = void 0;
    if ((typeof closer === 'undefined' ? 'undefined' : _typeof(closer)) === 'object') {
      closerNode = closer;
    } else if (onClose) {
      closerNode = React.createElement(
        StyledCloser,
        { theme: localTheme },
        React.createElement(Button, {
          a11yTitle: messages.closeLayer || 'Close Layer',
          icon: React.createElement(CloseIcon, null),
          onClick: onClose,
          plain: true
        })
      );
    }

    return React.createElement(
      Keyboard,
      { onEsc: onClose },
      React.createElement(
        StyledLayer,
        {
          tabIndex: '-1',
          ref: function ref(_ref) {
            _this3.layerRef = _ref;
          },
          theme: localTheme
        },
        React.createElement(
          StyledContainer,
          _extends({}, rest, {
            theme: localTheme,
            tabIndex: '-1',
            'aria-hidden': 'true'
          }),
          closerNode,
          children
        )
      )
    );
  };

  return LayerContainer;
}(Component);

LayerContainer.childContextTypes = {
  theme: PropTypes.object
};
LayerContainer.defaultProps = {
  theme: undefined
};


export default LayerContainer;
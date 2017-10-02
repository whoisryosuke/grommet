var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import PropTypes from 'prop-types';

import StyledLayer, { StyledContainer } from './StyledLayer';

import { Keyboard } from '../Keyboard';

import baseTheme from '../../themes/vanilla';
import { deepMerge } from '../../utils';

import { filterByFocusable, getBodyChildElements } from '../utils/DOM';

var LayerContainer = function (_Component) {
  _inherits(LayerContainer, _Component);

  function LayerContainer() {
    _classCallCheck(this, LayerContainer);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LayerContainer.prototype.getChildContext = function getChildContext() {
    var theme = this.props.theme;
    var contextTheme = this.context.theme;


    return _extends({}, this.context, {
      theme: contextTheme || deepMerge(baseTheme, theme)
    });
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
        onEsc = _props.onEsc,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'onEsc', 'theme']);

    var contextTheme = this.context.theme;


    var localTheme = deepMerge(baseTheme, contextTheme, theme);

    return React.createElement(
      Keyboard,
      { onEsc: onEsc },
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
            tabIndex: '-1'
          }),
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
LayerContainer.contextTypes = {
  theme: PropTypes.object
};
LayerContainer.defaultProps = {
  theme: undefined
};


export default LayerContainer;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { compose } from 'recompose';

import { restrictFocusTo, withRestrictScroll } from '../hocs';
import { Keyboard } from '../Keyboard';

import StyledLayer, { StyledContainer } from './StyledLayer';

var LayerContainer = function (_Component) {
  _inherits(LayerContainer, _Component);

  function LayerContainer() {
    _classCallCheck(this, LayerContainer);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LayerContainer.prototype.componentDidMount = function componentDidMount() {
    var layerNode = findDOMNode(this.layerNodeRef);
    layerNode.focus();
    if (layerNode.scrollIntoView) {
      layerNode.scrollIntoView();
    }
  };

  LayerContainer.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        onEsc = _props.onEsc,
        plain = _props.plain,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'onEsc', 'plain', 'theme']);

    return React.createElement(
      Keyboard,
      { onEsc: onEsc },
      React.createElement(
        StyledLayer,
        {
          plain: plain,
          theme: theme,
          tabIndex: '-1',
          ref: function ref(_ref) {
            _this2.layerNodeRef = _ref;
          }
        },
        React.createElement(
          StyledContainer,
          _extends({}, rest, { theme: theme, plain: plain }),
          children
        )
      )
    );
  };

  return LayerContainer;
}(Component);

export default compose(withRestrictScroll, restrictFocusTo)(LayerContainer);
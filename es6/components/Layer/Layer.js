function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render, unmountComponentAtNode } from 'react-dom';

import LayerContainer from './LayerContainer';

import doc from './doc';

import { createContextProvider } from '../hocs';
import { getNewContainer } from '../utils';

import { deepMerge } from '../../utils';

var Layer = function (_Component) {
  _inherits(Layer, _Component);

  function Layer() {
    _classCallCheck(this, Layer);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Layer.prototype.componentDidMount = function componentDidMount() {
    this.originalFocusedElement = document.activeElement;
    this.layerContainer = getNewContainer();
    this.renderLayer();
  };

  Layer.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    if (this.originalFocusedElement) {
      if (this.originalFocusedElement.focus) {
        // wait for the fixed positioning to come back to normal
        // see layer styling for reference
        setTimeout(function () {
          _this2.originalFocusedElement.focus();
        }, 0);
      } else if (this.originalFocusedElement.parentNode && this.originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        this.originalFocusedElement.parentNode.focus();
      }
    }
    unmountComponentAtNode(this.layerContainer);
    document.body.removeChild(this.layerContainer);
  };

  Layer.prototype.renderLayer = function renderLayer() {
    var ContextProvider = createContextProvider(deepMerge(this.context, this.props.context));
    render(React.createElement(
      ContextProvider,
      null,
      React.createElement(LayerContainer, this.props)
    ), this.layerContainer);
  };

  Layer.prototype.render = function render() {
    return React.createElement('span', { style: { display: 'none' } });
  };

  return Layer;
}(Component);

Layer.contextTypes = {
  grommet: PropTypes.object,
  theme: PropTypes.object
};
Layer.defaultProps = {
  align: 'center'
};


if (process.env.NODE_ENV !== 'production') {
  doc(Layer);
}

export default Layer;
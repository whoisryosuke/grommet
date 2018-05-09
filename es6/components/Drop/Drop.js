function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { getNewContainer } from '../../utils';

import { withTheme } from '../hocs';

import DropContainer from './DropContainer';
import doc from './doc';

var Drop = function (_Component) {
  _inherits(Drop, _Component);

  function Drop() {
    _classCallCheck(this, Drop);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Drop.prototype.componentWillMount = function componentWillMount() {
    this.originalFocusedElement = document.activeElement;
    this.dropContainer = getNewContainer();
  };

  Drop.prototype.componentWillUnmount = function componentWillUnmount() {
    var restrictFocus = this.props.restrictFocus;

    if (restrictFocus && this.originalFocusedElement) {
      if (this.originalFocusedElement.focus) {
        this.originalFocusedElement.focus();
      } else if (this.originalFocusedElement.parentNode && this.originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        this.originalFocusedElement.parentNode.focus();
      }
    }
    document.body.removeChild(this.dropContainer);
  };

  Drop.prototype.render = function render() {
    return createPortal(React.createElement(DropContainer, this.props), this.dropContainer);
  };

  return Drop;
}(Component);

Drop.defaultProps = {
  align: {
    top: 'top',
    left: 'left'
  }
};


if (process.env.NODE_ENV !== 'production') {
  doc(Drop);
}

export default withTheme(Drop);
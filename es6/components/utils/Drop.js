var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// (C) Copyright 2014 Hewlett Packard Enterprise Development LP

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { findDOMNode, render as _render, unmountComponentAtNode } from 'react-dom';
import { findScrollParents } from './DOM';

import { baseStyle } from './styles';

/*
 * Drop is a utility for rendering components like drop down menus layered above
 * their initiating controls.
 */

var VERTICAL_ALIGN_OPTIONS = ['top', 'bottom'];
var HORIZONTAL_ALIGN_OPTIONS = ['right', 'left'];

var DropContainer = styled.div.withConfig({
  displayName: 'Drop__DropContainer'
})(['', ' position:fixed;z-index:20;border-radius:', ';overflow:auto;background-color:', ';'], baseStyle, function (props) {
  return props.theme.global.drop.border.radius;
}, function (props) {
  return props.background ? props.theme.global.colors[props.background] : props.theme.global.drop.backgroundColor;
});

var normalizeOptions = function normalizeOptions(options) {
  var opts = _extends({}, options);
  // normalize for older interface that just had align content
  if (options.top || options.bottom || options.left || options.right) {
    opts = { align: _extends({}, options) };
  }
  // validate align
  if (options && options.align && options.align.top && VERTICAL_ALIGN_OPTIONS.indexOf(options.align.top) === -1) {
    console.warn('Warning: Invalid align.top value \'' + options.align.top + '\'\n      supplied to Drop,\n      expected one of [' + VERTICAL_ALIGN_OPTIONS.join(',') + ']');
  }
  if (options.align && options.align.bottom && VERTICAL_ALIGN_OPTIONS.indexOf(options.align.bottom) === -1) {
    console.warn('Warning: Invalid align.bottom value \'' + options.align.bottom + '\'\n      supplied to Drop,\n      expected one of [' + VERTICAL_ALIGN_OPTIONS.join(',') + ']');
  }
  if (options.align && options.align.left && HORIZONTAL_ALIGN_OPTIONS.indexOf(options.align.left) === -1) {
    console.warn('Warning: Invalid align.left value \'' + options.align.left + '\'\n      supplied to Drop,\n      expected one of [' + HORIZONTAL_ALIGN_OPTIONS.join(',') + ']');
  }
  if (options.align && options.align.right && HORIZONTAL_ALIGN_OPTIONS.indexOf(options.align.right) === -1) {
    console.warn('Warning: Invalid align.right value \'' + options.align.right + '\'\n      supplied to Drop,\n      expected one of [' + HORIZONTAL_ALIGN_OPTIONS.join(',') + ']');
  }
  opts.align = _extends({}, opts.align) || {};
  if (!options.align.top && !options.align.bottom) {
    opts.align.top = 'top';
  }
  if (!options.align.left && !options.align.right) {
    opts.align.left = 'left';
  }
  opts.responsive = options.responsive !== false ? true : options.responsive;
  return opts;
};

// Drop options:
//
// align: See dropAlignPropType
// className: PropTypes.string
// background: PropTypes.string
//    Background color
// context: PropTypes.object
//    React context to pass through
// focusControl: PropTypes.bool
//    Whether to focus inside the dropped content when added
// responsive: PropTypes.bool
//    Whether to dynamically re-place when resized
//

var Drop = function () {
  function Drop(control, content, opts) {
    var _this = this;

    _classCallCheck(this, Drop);

    var options = normalizeOptions(opts);
    var focusControl = options.focusControl;

    // bind functions to instance

    this.render = this.render.bind(this);
    this.remove = this.remove.bind(this);
    this.place = this.place.bind(this);
    this.onResize = this.onResize.bind(this);
    this.control = control;

    // setup DOM
    var container = document.createElement('div');
    // prepend in body to avoid browser scroll issues
    document.body.insertBefore(container, document.body.firstChild);

    _render(React.createElement(
      DropContainer,
      {
        ref: function ref(_ref) {
          _this.dropContainerRef = _ref;
        },
        theme: options.theme,
        background: options.background
      },
      content
    ), container);

    var scrollParents = findScrollParents(control);

    // initialize state
    this.state = {
      container: container,
      control: control,
      initialFocusNeeded: focusControl,
      options: options,
      scrollParents: scrollParents
    };

    this.listen();

    // position content
    this.place();
  }

  Drop.prototype.listen = function listen() {
    var _this2 = this;

    var scrollParents = this.state.scrollParents;

    scrollParents.forEach(function (scrollParent) {
      return scrollParent.addEventListener('scroll', _this2.place);
    });
    // we intentionally skipped debounce as we believe resizing
    // will not be a common action. Also the UI looks better if the Drop
    // doesn’t lag to align with the control component.
    window.addEventListener('resize', this.onResize);
  };

  Drop.prototype.onResize = function onResize() {
    var _this3 = this;

    var scrollParents = this.state.scrollParents;
    // we need to update scroll parents as Responsive options may change
    // the parent for the target element

    scrollParents.forEach(function (scrollParent) {
      return scrollParent.removeEventListener('scroll', _this3.place);
    });

    var nextScrollParents = findScrollParents(this.control);

    nextScrollParents.forEach(function (scrollParent) {
      return scrollParent.addEventListener('scroll', _this3.place);
    });

    this.state.scrollParents = nextScrollParents;

    this.place();
  };

  Drop.prototype.place = function place() {
    var _state = this.state,
        control = _state.control,
        _state$options = _state.options,
        align = _state$options.align,
        responsive = _state$options.responsive;

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var container = findDOMNode(this.dropContainerRef);
    // clear prior styling
    container.style.left = '';
    container.style.width = '';
    container.style.top = '';
    container.style.maxHeight = '';

    // get bounds
    var controlRect = control.getBoundingClientRect();
    var containerRect = container.getBoundingClientRect();

    // determine width
    var width = Math.min(Math.max(controlRect.width, containerRect.width), windowWidth);

    // set left position
    var left = void 0;
    if (align.left) {
      if (align.left === 'left') {
        left = controlRect.left;
      } else if (align.left === 'right') {
        left = controlRect.left - width;
      }
    } else if (align.right) {
      if (align.right === 'left') {
        left = controlRect.left - width;
      } else if (align.right === 'right') {
        left = controlRect.left + controlRect.width - width;
      }
    }

    if (left + width > windowWidth) {
      left -= left + width - windowWidth;
    } else if (left < 0) {
      left = 0;
    }

    // set top position
    var top = void 0;
    var maxHeight = void 0;
    if (align.top) {
      if (align.top === 'top') {
        top = controlRect.top;
        maxHeight = Math.min(windowHeight - controlRect.top, windowHeight);
      } else {
        top = controlRect.bottom;
        maxHeight = Math.min(windowHeight - controlRect.bottom, windowHeight - controlRect.height);
      }
    } else if (align.bottom) {
      if (align.bottom === 'bottom') {
        top = controlRect.bottom - containerRect.height;
        maxHeight = Math.max(controlRect.bottom, 0);
      } else {
        top = controlRect.top - containerRect.height;
        maxHeight = Math.max(controlRect.top, 0);
      }
    }

    // if we can't fit it all, see if there's more room the other direction
    if (containerRect.height > maxHeight) {
      // We need more room than we have.
      if (align.top && top > windowHeight / 2) {
        // We put it below, but there's more room above, put it above
        if (align.top === 'bottom') {
          if (responsive) {
            top = Math.max(controlRect.top - containerRect.height, 0);
          }
          maxHeight = controlRect.top;
        } else {
          if (responsive) {
            top = Math.max(controlRect.bottom - containerRect.height, 0);
          }
          maxHeight = controlRect.bottom;
        }
      } else if (align.bottom && maxHeight < windowHeight / 2) {
        // We put it above but there's more room below, put it below
        if (align.bottom === 'bottom') {
          if (responsive) {
            top = controlRect.top;
          }
          maxHeight = Math.min(windowHeight - top, windowHeight);
        } else {
          if (responsive) {
            top = controlRect.bottom;
          }
          maxHeight = Math.min(windowHeight - top, windowHeight - controlRect.height);
        }
      }
    }

    container.style.left = left + 'px';
    // offset width by 0.1 to avoid a bug in ie11 that 
    // unnecessarily wraps the text if width is the same
    container.style.width = width + 0.1 + 'px';
    // the (position:absolute + scrollTop) 
    // is presenting issues with desktop scroll flickering
    container.style.top = top + 'px';
    container.style.maxHeight = windowHeight - top + 'px';

    // if (initialFocusNeeded) {
    //   // Now that we've placed it, focus on it
    //   this.focus();
    // }
  };

  // focus() {
  //   const { container } = this.state;
  //   this.state.originalFocusedElement = document.activeElement;
  //   if (!container.contains(document.activeElement)) {
  //     const anchor = container.querySelector(`${CLASS_ROOT}__anchor`);
  //     if (anchor) {
  //       anchor.focus();
  //       anchor.scrollIntoView();
  //     }
  //   }
  //   delete this.state.initialFocusNeeded;
  // }

  Drop.prototype.render = function render(content) {
    var _this4 = this;

    var _state2 = this.state,
        container = _state2.container,
        _state2$options = _state2.options,
        background = _state2$options.background,
        theme = _state2$options.theme;
    // const originalScrollPosition = container.scrollTop;
    // TODO: handle focus control better

    _render(React.createElement(
      DropContainer,
      {
        ref: function ref(_ref2) {
          _this4.dropContainerRef = _ref2;
        },
        theme: theme,
        background: background
      },
      content
    ), container, function () {
      // this.place();
      // // reset container to its original scroll position
      // container.scrollTop = originalScrollPosition;
    });
  };

  Drop.prototype.remove = function remove() {
    var _this5 = this;

    var _state3 = this.state,
        container = _state3.container,
        originalFocusedElement = _state3.originalFocusedElement,
        scrollParents = _state3.scrollParents;

    scrollParents.forEach(function (scrollParent) {
      return scrollParent.removeEventListener('scroll', _this5.place);
    });
    window.removeEventListener('resize', this.onResize);

    // need because of this
    // https://github.com/facebook/react/issues/6232
    setTimeout(function () {
      unmountComponentAtNode(container);
      document.body.removeChild(container);
    }, 0);

    if (originalFocusedElement) {
      originalFocusedElement.focus();
    }

    this.state = undefined;
  };

  return Drop;
}();

// How callers can validate a property for drop alignment which will be
// passed to add().


export default Drop;
export var dropAlignPropType = PropTypes.shape({
  top: PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
  bottom: PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
  left: PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS),
  right: PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS)
});
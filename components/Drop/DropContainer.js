'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deepAssign = require('deep-assign');

var _deepAssign2 = _interopRequireDefault(_deepAssign);

var _cloneDeep = require('clone-deep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _StyledDrop = require('./StyledDrop');

var _StyledDrop2 = _interopRequireDefault(_StyledDrop);

var _vanilla = require('../../themes/vanilla');

var _vanilla2 = _interopRequireDefault(_vanilla);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropContainer = function (_Component) {
  _inherits(DropContainer, _Component);

  function DropContainer() {
    _classCallCheck(this, DropContainer);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.place = _this.place.bind(_this);
    _this.onResize = _this.onResize.bind(_this);
    _this.onRemoveDrop = _this.onRemoveDrop.bind(_this);
    return _this;
  }

  DropContainer.prototype.getChildContext = function getChildContext() {
    var theme = this.props.theme;
    var contextTheme = this.context.theme;


    return _extends({}, this.context, {
      theme: contextTheme || (0, _deepAssign2.default)((0, _cloneDeep2.default)(_vanilla2.default), theme)
    });
  };

  DropContainer.prototype.componentDidMount = function componentDidMount() {
    this.addScrollListener();
    window.addEventListener('resize', this.onResize);
    document.addEventListener('click', this.onRemoveDrop);

    this.place();
  };

  DropContainer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.removeScrollListener();
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('click', this.onRemoveDrop);
  };

  DropContainer.prototype.addScrollListener = function addScrollListener() {
    var _this2 = this;

    var control = this.props.control;

    this.scrollParents = (0, _utils.findScrollParents)(control);
    this.scrollParents.forEach(function (scrollParent) {
      return scrollParent.addEventListener('scroll', _this2.place);
    });
  };

  DropContainer.prototype.removeScrollListener = function removeScrollListener() {
    var _this3 = this;

    this.scrollParents.forEach(function (scrollParent) {
      return scrollParent.removeEventListener('scroll', _this3.place);
    });
  };

  DropContainer.prototype.onRemoveDrop = function onRemoveDrop(event) {
    var onClose = this.props.onClose;

    if (!(0, _reactDom.findDOMNode)(this.componentRef).contains(event.target)) {
      if (onClose) {
        onClose();
      }
    }
  };

  DropContainer.prototype.onResize = function onResize() {
    this.removeScrollListener();
    this.addScrollListener();
    this.place();
  };

  DropContainer.prototype.place = function place() {
    var _props = this.props,
        align = _props.align,
        responsive = _props.responsive;

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var control = (0, _reactDom.findDOMNode)(this.props.control);
    var container = (0, _reactDom.findDOMNode)(this.componentRef);
    if (container && control) {
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
    }
  };

  DropContainer.prototype.render = function render() {
    var _this4 = this;

    var _props2 = this.props,
        children = _props2.children,
        theme = _props2.theme,
        rest = _objectWithoutProperties(_props2, ['children', 'theme']);

    var contextTheme = this.context.theme;


    var globalTheme = (0, _cloneDeep2.default)(_vanilla2.default);
    return _react2.default.createElement(
      _StyledDrop2.default,
      _extends({
        ref: function ref(_ref) {
          _this4.componentRef = _ref;
        }
      }, rest, {
        theme: (0, _deepAssign2.default)(globalTheme, contextTheme, theme)
      }),
      children
    );
  };

  return DropContainer;
}(_react.Component);

DropContainer.childContextTypes = {
  theme: _propTypes2.default.object
};
DropContainer.contextTypes = {
  theme: _propTypes2.default.object
};
DropContainer.defaultProps = {
  centered: true,
  theme: undefined
};
exports.default = DropContainer;
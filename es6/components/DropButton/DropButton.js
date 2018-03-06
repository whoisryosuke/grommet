var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import { Button } from '../Button';
import { Drop } from '../Drop';
import { withTheme } from '../hocs';

import doc from './doc';

var DropButton = function (_Component) {
  _inherits(DropButton, _Component);

  function DropButton(props, context) {
    _classCallCheck(this, DropButton);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.onDropClose = function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          open = _this$props.open;

      _this.setState({ show: open || false }, function () {
        if (onClose) {
          onClose();
        }
      });
    };

    _this.onToggle = function () {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          onOpen = _this$props2.onOpen;
      var show = _this.state.show;

      _this.setState({ show: !show }, show ? onClose && onClose() : onOpen && onOpen());
    };

    _this.state = { show: props.open };
    _this.checkRef = props.open;
    return _this;
  }

  DropButton.prototype.componentDidMount = function componentDidMount() {
    // In case the caller starts with the drop open, before we have the
    // buttonRef, see if we have it now and re-render.
    if (this.checkRef && this.buttonRef) {
      this.checkRef = false;
      this.forceUpdate();
    }
  };

  DropButton.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var open = _ref.open;
    var show = this.state.show;

    if (open !== undefined && open !== show) {
      this.setState({ show: open });
    }
  };

  DropButton.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        dropAlign = _props.dropAlign,
        dropContent = _props.dropContent,
        dropTarget = _props.dropTarget,
        id = _props.id,
        open = _props.open,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['dropAlign', 'dropContent', 'dropTarget', 'id', 'open', 'theme']);

    var show = this.state.show;


    var drop = void 0;
    if (show && this.buttonRef) {
      drop = React.createElement(
        Drop,
        {
          key: 'drop',
          ref: function ref(_ref2) {
            _this2.dropRef = _ref2;
          },
          id: id ? id + '__drop' : undefined,
          restrictFocus: true,
          align: dropAlign,
          target: dropTarget || this.buttonRef,
          onClickOutside: this.onDropClose,
          onEsc: this.onDropClose
        },
        dropContent
      );
    }

    return [React.createElement(Button, _extends({
      key: 'button',
      id: id,
      ref: function ref(_ref3) {
        _this2.buttonRef = _ref3;
      },
      onClick: this.onToggle
    }, rest)), drop];
  };

  return DropButton;
}(Component);

DropButton.defaultProps = {
  a11yTitle: 'Open Drop',
  dropAlign: { top: 'top', left: 'left' }
};


if (process.env.NODE_ENV !== 'production') {
  doc(DropButton);
}

export default compose(withTheme)(DropButton);
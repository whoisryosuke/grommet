var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import { CoreNextLink } from 'grommet-icons';

import StyledAnchor, { StyledIcon } from './StyledAnchor';

import { withFocus, withTheme } from '../hocs';

import doc from './doc';

var Anchor = function (_Component) {
  _inherits(Anchor, _Component);

  function Anchor(props, context) {
    _classCallCheck(this, Anchor);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    var children = props.children,
        icon = props.icon,
        label = props.label;

    if ((icon || label) && children) {
      console.warn('Anchor should not have children if icon or label is provided');
    }
    return _this;
  }

  Anchor.prototype.render = function render() {
    var _props = this.props,
        a11yTitle = _props.a11yTitle,
        children = _props.children,
        disabled = _props.disabled,
        href = _props.href,
        icon = _props.icon,
        focus = _props.focus,
        label = _props.label,
        primary = _props.primary,
        onClick = _props.onClick,
        reverse = _props.reverse,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'children', 'disabled', 'href', 'icon', 'focus', 'label', 'primary', 'onClick', 'reverse', 'theme']);

    var anchorIcon = void 0;
    if (icon) {
      anchorIcon = icon;
    } else if (primary) {
      anchorIcon = React.createElement(CoreNextLink, { color: primary ? 'brand' : undefined });
    }

    if (anchorIcon) {
      anchorIcon = React.createElement(
        StyledIcon,
        { key: 'styled-icon', reverse: reverse, label: label, theme: theme },
        anchorIcon
      );
    }

    var first = reverse ? label : anchorIcon;
    var second = reverse ? anchorIcon : label;

    return React.createElement(
      StyledAnchor,
      _extends({}, rest, {
        'aria-label': a11yTitle,
        disabled: disabled,
        icon: anchorIcon,
        focus: focus,
        label: label,
        primary: primary,
        reverse: reverse,
        theme: theme,
        href: !disabled ? href : undefined,
        onClick: !disabled ? onClick : undefined
      }),
      first || second ? [first, second] : children
    );
  };

  return Anchor;
}(Component);

if (process.env.NODE_ENV !== 'production') {
  doc(Anchor);
}

export default compose(withFocus, withTheme)(Anchor);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { activeStyle, backgroundStyle, colorForName, focusStyle, fontSize, lapAndUp } from '../../utils';

var basicStyle = function basicStyle(props) {
  return css(['border:', ' solid ', ';border-radius:', ';color:', ';'], props.theme.button.border.width, props.color ? colorForName(props.color, props.theme) : props.theme.button.border.color, props.theme.button.border.radius, props.theme.button.colors.text);
};

var primaryStyle = function primaryStyle(props) {
  return css(['', ' border:none;border-radius:', ';svg{fill:', ';stroke:', ';transition:none;}'], backgroundStyle(props.color || 'brand', props.theme), props.theme.button.border.radius, props.theme.global.colors.white, props.theme.global.colors.white);
};

var disabledStyle = '\n  opacity: 0.3;\n  cursor: default;\n';

function getHoverColor(props) {
  if (props.color) {
    return colorForName(props.color, props.theme);
  }
  return props.theme.button.border.color;
}

function getHoverIndicatorStyle(hoverIndicator, theme) {
  var backgroundColor = theme.global.hover.backgroundColor;
  if ((typeof hoverIndicator === 'undefined' ? 'undefined' : _typeof(hoverIndicator)) === 'object') {
    if (typeof hoverIndicator.background === 'string') {
      var colorGroup = hoverIndicator.background.split('-');
      var colorType = colorGroup[0];
      if (!theme.global.colors[colorType]) {
        console.warn('Invalid color ' + hoverIndicator.background + ', using ' + backgroundColor + ' instead');
      } else if (colorGroup.length > 1) {
        // subtract one to use the array
        var colorIndex = colorGroup[1] - 1;
        if (theme.global.colors[colorType].length < colorGroup[1]) {
          console.warn('Invalid color ' + hoverIndicator.background + ', using ' + backgroundColor + ' instead');
        } else {
          backgroundColor = rgba(theme.global.colors[colorType][colorIndex], 0.3) + ';';
        }
      } else if (typeof theme.global.colors[colorType] !== 'string') {
        console.warn('Invalid color ' + hoverIndicator.background + ', using ' + backgroundColor + ' instead');
      } else {
        backgroundColor = rgba(theme.global.colors[colorType], 0.3) + ';';
      }
    }
  }
  return css(['background-color:', ';color:', ';'], backgroundColor, theme.global.hover.textColor);
}

var hoverStyle = /*#__PURE__*/css(['&:hover{', ' ', ' ', '}'], function (props) {
  return props.hoverIndicator && getHoverIndicatorStyle(props.hoverIndicator, props.theme);
}, function (props) {
  return !props.plain && css(['box-shadow:0px 0px 0px 2px ', ';'], getHoverColor(props));
}, function (props) {
  return !props.plain && !props.primary && css(['svg{fill:', ';stroke:', ';transition:none;}'], props.theme.global.hover.textColor, props.theme.global.hover.textColor);
});

var fillStyle = '\n  width: 100%;\n  max-width: none;\n  flex-grow: 1;\n';

var plainFocusStyle = /*#__PURE__*/css(['box-shadow:0 0 ', ' ', ' ', ';'], function (props) {
  return props.theme.global.focus.border.width;
}, function (props) {
  return props.theme.global.focus.border.width;
}, function (props) {
  return props.theme.global.focus.border.color;
});

var plainStyle = /*#__PURE__*/css(['color:inherit;border:none;padding:0;', ''], function (props) {
  return props.focus && props.focusIndicator && plainFocusStyle;
});

var StyledButton = /*#__PURE__*/styled.button.withConfig({
  displayName: 'StyledButton'
})(['cursor:pointer;outline:none;font:inherit;text-decoration:none;font:inherit;margin:0;background-color:transparent;overflow:visible;text-transform:none;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return !props.plain && css(['text-align:center;display:inline-block;min-width:', ';max-width:', ';font-weight:', ';'], props.theme.button.minWidth, props.theme.button.maxWidth, props.theme.global.control.font.weight);
}, function (props) {
  return !props.plain && !props.primary && basicStyle(props);
}, function (props) {
  return !props.plain && props.primary && primaryStyle(props);
}, function (props) {
  return !props.disabled && !props.focus && hoverStyle;
}, function (props) {
  return !props.disabled && props.active && activeStyle;
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return !props.plain && fontSize(props.theme.global.control.font.size, props.theme.global.spacing);
}, function (props) {
  return !props.plain && 'padding: ' + props.theme.button.padding.vertical + ' ' + props.theme.button.padding.horizontal + ';';
}, function (props) {
  return props.focus && (!props.plain || props.focusIndicator) && focusStyle;
}, lapAndUp('\n    transition: 0.1s ease-in-out;\n  '), function (props) {
  return props.plain && plainStyle;
}, function (props) {
  return props.fill && fillStyle;
}, function (props) {
  return props.icon && !props.label && '\n    padding: ' + props.theme.global.edgeSize.small + ';\n  ';
});

export var StyledLabel = /*#__PURE__*/styled.span.withConfig({
  displayName: 'StyledButton__StyledLabel'
})(['&:first-child:not(:last-child){margin-right:', ';}'], function (props) {
  return props.theme.global.edgeSize.small;
});

export var StyledIcon = /*#__PURE__*/styled.span.withConfig({
  displayName: 'StyledButton__StyledIcon'
})(['display:inline-block;&:first-child:not(:last-child){margin-right:', ';}> *{vertical-align:bottom;}'], function (props) {
  return props.theme.global.edgeSize.small;
});

export default StyledButton.extend(_templateObject, function (props) {
  return props.theme.button.extend;
});
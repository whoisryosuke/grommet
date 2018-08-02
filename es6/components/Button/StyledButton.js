var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { activeStyle, backgroundStyle, colorForName, colorIsDark, focusStyle, lapAndUp } from '../../utils';

var basicStyle = function basicStyle(props) {
  return css(['border:', ' solid ', ';border-radius:', ';color:', ';'], props.theme.button.border.width, props.color ? colorForName(props.color, props.theme) : props.theme.button.border.color, props.theme.button.border.radius, props.theme.dark ? props.theme.global.colors.darkBackground.text : props.theme.button.colors.text);
};

var primaryStyle = function primaryStyle(props) {
  return css(['', ' border-radius:', ';svg{fill:', ';stroke:', ';transition:none;}'], backgroundStyle(props.color || props.theme.button.colors.primary || 'brand', props.theme), props.theme.button.border.radius, colorIsDark(colorForName('brand', props.theme)) ? props.theme.global.colors.darkBackground.text : props.theme.global.colors.lightBackground.text, colorIsDark(colorForName('brand', props.theme)) ? props.theme.global.colors.darkBackground.text : props.theme.global.colors.lightBackground.text);
};

var disabledStyle = css(['opacity:', ';cursor:default;'], function (props) {
  return props.theme.button.disabled.opacity;
});

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
  return css(['background:', ';color:', ';'], backgroundColor, theme.global.hover.textColor);
}

var hoverStyle = css(['&:hover{', ' ', ' ', '}'], function (props) {
  return props.hoverIndicator && getHoverIndicatorStyle(props.hoverIndicator, props.theme);
}, function (props) {
  return !props.plain && css(['box-shadow:0px 0px 0px 2px ', ';'], getHoverColor(props));
}, function (props) {
  return !props.plain && !props.primary && css(['svg{fill:', ';stroke:', ';transition:none;}'], props.theme.global.hover.textColor, props.theme.global.hover.textColor);
});

var fillStyle = '\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex: 1 0 auto;\n';

var plainStyle = css(['color:inherit;border:none;padding:0;text-align:inherit;']);

var StyledButton = styled.button.withConfig({
  displayName: 'StyledButton'
})(['display:inline-block;box-sizing:border-box;cursor:pointer;outline:none;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return props.plain && plainStyle;
}, function (props) {
  return !props.plain && basicStyle(props);
}, function (props) {
  return props.primary && primaryStyle(props);
}, function (props) {
  return !props.disabled && !props.focus && hoverStyle;
}, function (props) {
  return !props.disabled && props.active && activeStyle;
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return !props.plain && 'padding: ' + props.theme.button.padding.vertical + ' ' + props.theme.button.padding.horizontal + ';';
}, function (props) {
  return props.focus && (!props.plain || props.focusIndicator) && focusStyle;
}, lapAndUp('\n    transition: 0.1s ease-in-out;\n  '), function (props) {
  return props.fillContainer && fillStyle;
}, function (props) {
  return props.icon && !props.label && !props.plain && '\n    padding: ' + props.theme.global.edgeSize.small + ';\n  ';
});

export default StyledButton.extend(_templateObject, function (props) {
  return props.theme.button.extend;
});
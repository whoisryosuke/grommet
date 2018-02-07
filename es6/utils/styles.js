var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import { css } from 'styled-components';

import { parseMetricToNum } from './mixins';
import { colorForName, colorIsDark, getRGBA } from './colors';

export var activeStyle = /*#__PURE__*/css(['background-color:', ';color:', ';'], function (props) {
  return props.theme.global.hover.backgroundColor;
}, function (props) {
  return props.theme.global.hover.textColor;
});

export var backgroundStyle = function backgroundStyle(background, theme) {
  if ((typeof background === 'undefined' ? 'undefined' : _typeof(background)) === 'object') {
    if (background.image) {
      var color = void 0;
      if (background.dark === false) {
        color = theme.global.colors.text;
      } else if (background.dark) {
        color = theme.global.colors.darkBackground.text;
      } else {
        color = 'inherit';
      }
      return css(['background:', ' no-repeat;background-position:', ';background-size:cover;color:', ';'], background.image, background.position || 'center center', color);
    } else if (background.color) {
      var _color = colorForName(background.color, theme);
      var rgba = getRGBA(_color, background.opacity === true ? theme.global.opacity.medium : theme.global.opacity[background.opacity]);
      if (rgba) {
        return css(['background-color:', ';color:', ';'], rgba, colorIsDark(rgba) ? theme.global.colors.darkBackground.text : theme.global.colors.text);
      }
    } else if (background.dark === false) {
      return css(['color:', ';'], theme.global.colors.text);
    } else if (background.dark) {
      return css(['color:', ';'], theme.global.colors.darkBackground.text);
    }
    return undefined;
  }
  if (background) {
    if (background.lastIndexOf('url', 0) === 0) {
      return css(['background:', ' no-repeat center center;background-size:cover;'], background);
    }
    var _color2 = colorForName(background, theme);
    if (_color2) {
      return css(['background-color:', ';color:', ';'], _color2, colorIsDark(_color2) ? theme.global.colors.darkBackground.text : theme.global.colors.text);
    }
  }
  return undefined;
};

export var baseStyle = /*#__PURE__*/css(['font-family:', ';font-size:', ';line-height:', ';', ' ', ' box-sizing:border-box;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;*{box-sizing:inherit;}'], function (props) {
  return props.theme.global.font.family;
}, function (props) {
  return parseMetricToNum(props.theme.global.font.size) / 16 * 1 + 'em';
}, function (props) {
  return parseMetricToNum(props.theme.global.lineHeight) / parseMetricToNum(props.theme.global.font.size);
}, function (props) {
  return props.theme.global.colors.text && 'color: ' + props.theme.global.colors.text + ';';
}, function (props) {
  return props.theme.global.colors.background && 'background-color: ' + props.theme.global.colors.background + ';';
});

// focus also supports clickable elements inside svg
export var focusStyle = /*#__PURE__*/css(['> circle,> ellipse,> line,> path,> polygon,> polyline,> rect{outline:', ' solid 2px;}border-color:', ';box-shadow:0 0 2px 2px ', ';'], function (props) {
  return props.theme.global.focus.border.color;
}, function (props) {
  return props.theme.global.focus.border.color;
}, function (props) {
  return props.theme.global.focus.border.color;
});

export var inputStyle = /*#__PURE__*/css(['padding:', 'px;border:', ' solid ', ';border-radius:', ';outline:none;background-color:transparent;color:inherit;font:inherit;margin:0;'], function (props) {
  return parseMetricToNum(props.theme.global.spacing) / 2 - parseMetricToNum(props.theme.global.input.border.width);
}, function (props) {
  return props.theme.global.input.border.width;
}, function (props) {
  return props.theme.global.input.border.color;
}, function (props) {
  return props.theme.global.input.border.radius;
});

export default {
  activeStyle: activeStyle, backgroundStyle: backgroundStyle, baseStyle: baseStyle, inputStyle: inputStyle, focusStyle: focusStyle
};
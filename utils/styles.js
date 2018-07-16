'use strict';

exports.__esModule = true;
exports.inputStyle = exports.focusStyle = exports.edgeStyle = exports.baseStyle = exports.backgroundStyle = exports.activeStyle = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _styledComponents = require('styled-components');

var _mixins = require('./mixins');

var _colors = require('./colors');

var activeStyle = exports.activeStyle = (0, _styledComponents.css)(['background-color:', ';color:', ';'], function (props) {
  return props.theme.global.hover.backgroundColor;
}, function (props) {
  return props.theme.global.hover.textColor;
});

var backgroundStyle = exports.backgroundStyle = function backgroundStyle(background, theme) {
  if ((typeof background === 'undefined' ? 'undefined' : _typeof(background)) === 'object') {
    if (background.image) {
      var color = void 0;
      if (background.dark === false) {
        color = theme.global.colors.lightBackground.text;
      } else if (background.dark) {
        color = theme.global.colors.darkBackground.text;
      } else {
        color = 'inherit';
      }
      return (0, _styledComponents.css)(['background:', ' no-repeat;background-position:', ';background-size:cover;color:', ';'], background.image, background.position || 'center center', color);
    } else if (background.color) {
      var _color = (0, _colors.colorForName)(background.color, theme);
      var rgba = (0, _colors.getRGBA)(_color, background.opacity === true ? theme.global.opacity.medium : theme.global.opacity[background.opacity]);
      if (rgba) {
        return (0, _styledComponents.css)(['background-color:', ';', ''], rgba, (!background.opacity || background.opacity !== 'weak') && 'color: ' + ((0, _colors.colorIsDark)(rgba) ? theme.global.colors.darkBackground.text : theme.global.colors.lightBackground.text) + ';');
      }
    } else if (background.dark === false) {
      return (0, _styledComponents.css)(['color:', ';'], theme.global.colors.lightBackground.text);
    } else if (background.dark) {
      return (0, _styledComponents.css)(['color:', ';'], theme.global.colors.darkBackground.text);
    }
    return undefined;
  }
  if (background) {
    if (background.lastIndexOf('url', 0) === 0) {
      return (0, _styledComponents.css)(['background:', ' no-repeat center center;background-size:cover;'], background);
    }
    var _color2 = (0, _colors.colorForName)(background, theme);
    if (_color2) {
      return (0, _styledComponents.css)(['background-color:', ';color:', ';'], _color2, (0, _colors.colorIsDark)(_color2) ? theme.global.colors.darkBackground.text : theme.global.colors.lightBackground.text);
    }
  }
  return undefined;
};

var baseStyle = exports.baseStyle = (0, _styledComponents.css)(['font-family:', ';font-size:', ';line-height:', ';', ' ', ' box-sizing:border-box;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;'], function (props) {
  return props.theme.global.font.family;
}, function (props) {
  return (0, _mixins.parseMetricToNum)(props.theme.global.font.size) / 16 * 1 + 'em';
}, function (props) {
  return (0, _mixins.parseMetricToNum)(props.theme.global.lineHeight) / (0, _mixins.parseMetricToNum)(props.theme.global.font.size);
}, function (props) {
  return props.theme.global.colors.text && 'color: ' + props.theme.global.colors.text + ';';
}, function (props) {
  return props.theme.global.colors.background && 'background-color: ' + props.theme.global.colors.background + ';';
});

var edgeStyle = exports.edgeStyle = function edgeStyle(kind, data, responsive, theme) {
  if (typeof data === 'string') {
    return (0, _styledComponents.css)(['', ':', ';', ''], kind, theme.global.edgeSize[data], responsive ? (0, _mixins.palm)('\n        ' + kind + ': ' + theme.global.edgeSize.narrow[data] + ';\n      ') : '');
  }
  var result = [];
  if (data.horizontal) {
    result.push((0, _styledComponents.css)(['', '-left:', ';', '-right:', ';', ''], kind, theme.global.edgeSize[data.horizontal], kind, theme.global.edgeSize[data.horizontal], responsive ? (0, _mixins.palm)('\n        ' + kind + '-left: ' + theme.global.edgeSize.narrow[data.horizontal] + ';\n        ' + kind + '-right: ' + theme.global.edgeSize.narrow[data.horizontal] + ';\n      ') : ''));
  }
  if (data.vertical) {
    result.push((0, _styledComponents.css)(['', '-top:', ';', '-bottom:', ';', ''], kind, theme.global.edgeSize[data.vertical], kind, theme.global.edgeSize[data.vertical], responsive ? (0, _mixins.palm)('\n        ' + kind + '-top: ' + theme.global.edgeSize.narrow[data.vertical] + ';\n        ' + kind + '-bottom: ' + theme.global.edgeSize.narrow[data.vertical] + ';\n      ') : ''));
  }
  if (data.top) {
    result.push((0, _styledComponents.css)(['', '-top:', ';', ''], kind, theme.global.edgeSize[data.top], responsive ? (0, _mixins.palm)('\n        ' + kind + '-top: ' + theme.global.edgeSize.narrow[data.top] + ';\n      ') : ''));
  }
  if (data.bottom) {
    result.push((0, _styledComponents.css)(['', '-bottom:', ';', ''], kind, theme.global.edgeSize[data.bottom], responsive ? (0, _mixins.palm)('\n        ' + kind + '-bottom: ' + theme.global.edgeSize.narrow[data.bottom] + ';\n      ') : ''));
  }
  if (data.left) {
    result.push((0, _styledComponents.css)(['', '-left:', ';', ''], kind, theme.global.edgeSize[data.left], responsive ? (0, _mixins.palm)('\n        ' + kind + '-left: ' + theme.global.edgeSize.narrow[data.left] + ';\n      ') : ''));
  }
  if (data.right) {
    result.push((0, _styledComponents.css)(['', '-right:', ';', ''], kind, theme.global.edgeSize[data.right], responsive ? (0, _mixins.palm)('\n        ' + kind + '-right: ' + theme.global.edgeSize.narrow[data.left] + ';\n      ') : ''));
  }
  return result;
};

// focus also supports clickable elements inside svg
var focusStyle = exports.focusStyle = (0, _styledComponents.css)(['> circle,> ellipse,> line,> path,> polygon,> polyline,> rect{outline:', ' solid 2px;}border-color:', ';box-shadow:0 0 2px 2px ', ';'], function (props) {
  return props.theme.global.focus.border.color;
}, function (props) {
  return props.theme.global.focus.border.color;
}, function (props) {
  return props.theme.global.focus.border.color;
});

var inputStyle = exports.inputStyle = (0, _styledComponents.css)(['box-sizing:border-box;font-size:inherit;padding:', 'px;border:', ' solid ', ';border-radius:', ';outline:none;background-color:transparent;color:inherit;', ' margin:0;', ''], function (props) {
  return (0, _mixins.parseMetricToNum)(props.theme.global.spacing) / 2 - (0, _mixins.parseMetricToNum)(props.theme.global.input.border.width);
}, function (props) {
  return props.theme.global.input.border.width;
}, function (props) {
  return props.theme.global.input.border.color;
}, function (props) {
  return props.theme.global.input.border.radius;
}, function (props) {
  return props.theme.global.input.weight && (0, _styledComponents.css)(['font-weight:', ';'], props.theme.global.input.weight);
}, function (props) {
  return props.focus && (!props.plain || props.focusIndicator) && focusStyle;
});

exports.default = {
  activeStyle: activeStyle, backgroundStyle: backgroundStyle, baseStyle: baseStyle, edgeStyle: edgeStyle, inputStyle: inputStyle, focusStyle: focusStyle
};
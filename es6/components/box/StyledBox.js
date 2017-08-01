var _FLEX_MAP;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

var ALIGN_MAP = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignStyle = css(['align-items:', ';'], function (props) {
  return ALIGN_MAP[props.align];
});

var ALIGN_CONTENT_MAP = {
  around: 'around',
  between: 'between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignContentStyle = css(['align-content:', ';'], function (props) {
  return ALIGN_CONTENT_MAP[props.alignContent];
});

var ALIGN_SELF_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignSelfStyle = css(['align-self:', ';'], function (props) {
  return ALIGN_SELF_MAP[props.alignSelf];
});

var BASIS_MAP = {
  'full': '100%',
  '1/2': '50%',
  '1/4': '25%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

var basisStyle = css(['flex-basis:', ';'], function (props) {
  return BASIS_MAP[props.basis] || props.theme.global.size[props.basis];
});

var colorIsDark = function colorIsDark(color) {
  // https://stackoverflow.com/a/42429333
  var _color$match$map = color.match(/[A-Za-z0-9]{2}/g).map(function (v) {
    return parseInt(v, 16);
  }),
      red = _color$match$map[0],
      green = _color$match$map[1],
      blue = _color$match$map[2];
  // http://www.had2know.com/technology/
  //  color-contrast-calculator-web-design.html


  var brightness = (299 * red + 587 * green + 114 * blue) / 1000;
  return brightness < 125;
};

var backgroundStyle = function backgroundStyle(background, theme) {
  if ((typeof background === 'undefined' ? 'undefined' : _typeof(background)) === 'object') {
    if (background.image) {
      var _color = void 0;
      if (background.dark === false) {
        _color = theme.global.colors.text;
      } else if (background.dark) {
        _color = theme.global.colors.darkBackgroundTextColor;
      } else {
        _color = 'inherit';
      }
      return css(['background:', ' no-repeat center center;background-size:cover;color:', ';'], background.image, _color);
    }
    return undefined;
  }
  if (background.lastIndexOf('url', 0) === 0) {
    return css(['background:', ' no-repeat center center;background-size:cover;'], background);
  }

  var _background$split = background.split('-'),
      kind = _background$split[0],
      index = _background$split[1];

  var colorSet = theme.global.colors[kind];
  var color = void 0;
  if (Array.isArray(colorSet)) {
    color = theme.global.colors[kind][index];
  } else if (typeof colorSet === 'string') {
    color = colorSet;
  }
  if (color) {
    return css(['background-color:', ';color:', ';'], color, colorIsDark(color) ? theme.global.colors.darkBackgroundTextColor : theme.global.colors.text);
  }
  return undefined;
};

var directionStyle = css(['flex-direction:', ';'], function (props) {
  if (props.direction) {
    return props.reverse ? props.direction + '-reverse' : props.direction;
  }
  return 'column-reverse';
});

var FLEX_MAP = (_FLEX_MAP = {}, _FLEX_MAP[true] = '1 1', _FLEX_MAP[false] = '0 0 auto', _FLEX_MAP.grow = '1 0', _FLEX_MAP.shrink = '0 1', _FLEX_MAP);

var flexStyle = css(['flex:', ';'], function (props) {
  return FLEX_MAP[props.flex];
});

var JUSTIFY_MAP = {
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start'
};

var justifyStyle = css(['justify-content:', ';'], function (props) {
  return JUSTIFY_MAP[props.justify];
});

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};

var textAlignStyle = css(['text-align:', ';'], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});

var wrapStyle = 'flex-wrap: true;';

var edgeStyle = function edgeStyle(kind, data, theme) {
  if (typeof data === 'string') {
    return kind + ': ' + theme.global.edgeSize[data] + ';';
  }
  if (data.horizontal) {
    return '\n      ' + kind + '-left: ' + theme.global.edgeSize[data.horizontal] + ';\n      ' + kind + '-right: ' + theme.global.edgeSize[data.horizontal] + ';\n    ';
  }
  if (data.vertical) {
    return '\n      ' + kind + '-top: ' + theme.global.edgeSize[data.vertical] + ';\n      ' + kind + '-bottom: ' + theme.global.edgeSize[data.vertical] + ';\n    ';
  }
  if (data.top) {
    return kind + '-top: ' + theme.global.edgeSize[data.top] + ';';
  }
  if (data.bottom) {
    return kind + '-bottom: ' + theme.global.edgeSize[data.bottom] + ';';
  }
  if (data.left) {
    return kind + '-left: ' + theme.global.edgeSize[data.left] + ';';
  }
  if (data.right) {
    return kind + '-right: ' + theme.global.edgeSize[data.right] + ';';
  }
  return '';
};

var StyledBox = styled.div.withConfig({
  displayName: 'StyledBox__StyledBox'
})(['display:flex;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return props.align && alignStyle;
}, function (props) {
  return props.alignContent && alignContentStyle;
}, function (props) {
  return props.alignSelf && alignSelfStyle;
}, function (props) {
  return props.basis && basisStyle;
}, function (props) {
  return props.background && backgroundStyle(props.background, props.theme);
}, function (props) {
  return (props.direction || props.reverse) && directionStyle;
}, function (props) {
  return props.flex !== undefined && flexStyle;
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.margin && edgeStyle('margin', props.margin, props.theme);
}, function (props) {
  return props.pad && edgeStyle('padding', props.pad, props.theme);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.wrap && wrapStyle;
});

export default StyledBox.extend(_templateObject, function (props) {
  return props.theme.box && props.theme.box.extend;
});
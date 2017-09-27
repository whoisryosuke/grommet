'use strict';

exports.__esModule = true;

var _FLEX_MAP;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ALIGN_MAP = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignStyle = (0, _styledComponents.css)(['align-items:', ';'], function (props) {
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

var alignContentStyle = (0, _styledComponents.css)(['align-content:', ';'], function (props) {
  return ALIGN_CONTENT_MAP[props.alignContent];
});

var ALIGN_SELF_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignSelfStyle = (0, _styledComponents.css)(['align-self:', ';'], function (props) {
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

var basisStyle = (0, _styledComponents.css)(['flex-basis:', ';'], function (props) {
  return BASIS_MAP[props.basis] || props.theme.global.size[props.basis];
});

var directionStyle = (0, _styledComponents.css)(['flex-direction:', ';'], function (props) {
  if (props.direction) {
    return props.reverse ? props.direction + '-reverse' : props.direction;
  }
  return 'column-reverse';
});

var FLEX_MAP = (_FLEX_MAP = {}, _FLEX_MAP[true] = '1 1', _FLEX_MAP[false] = '0 0', _FLEX_MAP.grow = '1 0', _FLEX_MAP.shrink = '0 1', _FLEX_MAP);

var flexStyle = (0, _styledComponents.css)(['flex:', ';'], function (props) {
  return FLEX_MAP[props.flex];
});

var fullStyle = function fullStyle(full) {
  if (full === 'horizontal') {
    return '\n      max-width: 100%;\n      width: 100vw;\n    ';
  }
  if (full === 'vertical') {
    return '\n      height: 100vh;\n      max-height: 100%;\n      overflow: auto;\n    ';
  }
  if (full === 'grow') {
    return '\n      max-width: 100%;\n      width: 100vw;\n      min-height: 100vh;\n    ';
  }
  if (full) {
    return '\n      max-width: 100%;\n      width: 100vw;\n      height: 100vh;\n      max-height: 100%;\n      overflow: auto;\n    ';
  }
  return undefined;
};

var gridAreaStyle = (0, _styledComponents.css)(['grid-area:', ';'], function (props) {
  return props.gridArea;
});

var JUSTIFY_MAP = {
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start'
};

var justifyStyle = (0, _styledComponents.css)(['justify-content:', ';'], function (props) {
  return JUSTIFY_MAP[props.justify];
});

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};

var textAlignStyle = (0, _styledComponents.css)(['text-align:', ';'], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});

var wrapStyle = 'flex-wrap: wrap;';

var borderStyle = function borderStyle(data, theme) {
  var style = '';
  var color = (0, _utils.colorForName)(data.color || 'light-2', theme);
  var size = data.size || 'small';
  var side = typeof data === 'string' ? data : data.side || 'all';
  var value = 'solid ' + theme.global.borderSize[size] + ' ' + color;
  if (side === 'top' || side === 'bottom' || side === 'left' || side === 'right') {
    style = 'border-' + side + ': ' + value + ';';
  } else if (side === 'horizontal') {
    style = '\n      border-left: ' + value + ';\n      border-right: ' + value + ';\n    ';
  } else if (side === 'vertical') {
    style = '\n      border-top: ' + value + ';\n      border-bottom: ' + value + ';\n    ';
  } else {
    style = 'border: ' + value + ';';
  }
  return '\n    ' + style + '\n\n    ' + (data.radius ? 'border-radius: ' + theme.global.borderSize[data.radius] + ';' : '') + '\n  ';
};

var edgeStyle = function edgeStyle(kind, data, theme) {
  if (typeof data === 'string') {
    return kind + ': ' + theme.global.edgeSize[data] + ';';
  }
  var result = '';
  if (data.horizontal) {
    result += '\n      ' + kind + '-left: ' + theme.global.edgeSize[data.horizontal] + ';\n      ' + kind + '-right: ' + theme.global.edgeSize[data.horizontal] + ';\n    ';
  }
  if (data.vertical) {
    result += '\n      ' + kind + '-top: ' + theme.global.edgeSize[data.vertical] + ';\n      ' + kind + '-bottom: ' + theme.global.edgeSize[data.vertical] + ';\n    ';
  }
  if (data.top) {
    result += kind + '-top: ' + theme.global.edgeSize[data.top] + ';';
  }
  if (data.bottom) {
    result += kind + '-bottom: ' + theme.global.edgeSize[data.bottom] + ';';
  }
  if (data.left) {
    result += kind + '-left: ' + theme.global.edgeSize[data.left] + ';';
  }
  if (data.right) {
    result += kind + '-right: ' + theme.global.edgeSize[data.right] + ';';
  }
  return result;
};

var ROUND_MAP = {
  'full': '100%'
};

var roundStyle = (0, _styledComponents.css)(['border-radius:', ';'], function (props) {
  return ROUND_MAP[props.round] || props.theme.global.edgeSize[props.round];
});

var responsiveStyle = (0, _styledComponents.css)(['', '}'], function (props) {
  return (0, _utils.palm)('\n    flex-direction: column;\n    flex-basis: auto;\n\n    ' + (props.justify === 'center' && 'align-items: stretch;') + '\n    ' + (props.reverse && 'flex-direction: column-reverse') + '\n  ');
});

// NOTE: basis must be after flex! Otherwise, flex overrides basis
var StyledBox = _styledComponents2.default.div.withConfig({
  displayName: 'StyledBox'
})(['display:flex;max-width:100%;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return props.align && alignStyle;
}, function (props) {
  return props.alignContent && alignContentStyle;
}, function (props) {
  return props.alignSelf && alignSelfStyle;
}, function (props) {
  return props.background && (0, _utils.backgroundStyle)(props.background, props.theme);
}, function (props) {
  return props.border && borderStyle(props.border, props.theme);
}, function (props) {
  return (props.direction || props.reverse) && directionStyle;
}, function (props) {
  return props.flex !== undefined && flexStyle;
}, function (props) {
  return props.basis && basisStyle;
}, function (props) {
  return props.full && fullStyle(props.full);
}, function (props) {
  return props.gridArea && gridAreaStyle;
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.margin && edgeStyle('margin', props.margin, props.theme);
}, function (props) {
  return props.pad && edgeStyle('padding', props.pad, props.theme);
}, function (props) {
  return props.round && roundStyle;
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.wrap && wrapStyle;
}, function (props) {
  return props.responsive && responsiveStyle;
});

exports.default = StyledBox.extend(_templateObject, function (props) {
  return props.theme.box && props.theme.box.extend;
});
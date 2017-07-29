'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ALIGN_MAP = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var ALIGN_CONTENT_MAP = {
  around: 'around',
  between: 'between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var ALIGN_SELF_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var JUSTIFY_MAP = {
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start'
};

var BASIS_MAP = {
  'full': '100%',
  '1/2': '50%',
  '1/4': '25%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

var alignStyle = (0, _styledComponents.css)(['align-items:', ';'], function (props) {
  return ALIGN_MAP[props.align];
});

var alignContentStyle = (0, _styledComponents.css)(['align-content:', ';'], function (props) {
  return ALIGN_CONTENT_MAP[props.alignContent];
});

var alignSelfStyle = (0, _styledComponents.css)(['align-self:', ';'], function (props) {
  return ALIGN_SELF_MAP[props.alignSelf];
});

var directionStyle = (0, _styledComponents.css)(['flex-direction:', ';'], function (props) {
  if (props.direction) {
    return props.reverse ? props.direction + '-reverse' : props.direction;
  }
  return 'column-reverse';
});

var justifyStyle = (0, _styledComponents.css)(['justify-content:', ';'], function (props) {
  return JUSTIFY_MAP[props.justify];
});

var basisStyle = (0, _styledComponents.css)(['flex-basis:', ';'], function (props) {
  return BASIS_MAP[props.basis] || props.theme.brand.size[props.basis];
});

var StyledBox = _styledComponents2.default.div.withConfig({
  displayName: 'StyledBox__StyledBox'
})(['display:flex;', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return props.align && alignStyle;
}, function (props) {
  return props.alignContent && alignContentStyle;
}, function (props) {
  return props.alignSelf && alignSelfStyle;
}, function (props) {
  return props.basis && basisStyle;
}, function (props) {
  return (props.direction || props.reverse) && directionStyle;
}, function (props) {
  return props.justify && justifyStyle;
});

exports.default = StyledBox.extend(_templateObject, function (props) {
  return props.theme.box && props.theme.box.extend;
});
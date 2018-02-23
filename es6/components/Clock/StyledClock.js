var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css, keyframes } from 'styled-components';

export var StyledHour = /*#__PURE__*/styled.line.withConfig({
  displayName: 'StyledClock__StyledHour'
})(['stroke-width:', ';stroke:', ';transition:stroke 1s ease-out;'], function (props) {
  return props.theme.clock.analog.hour.width;
}, function (props) {
  return props.theme.clock.analog.hour.color[props.grommet.dark ? 'dark' : 'light'];
});

export var StyledMinute = /*#__PURE__*/styled.line.withConfig({
  displayName: 'StyledClock__StyledMinute'
})(['stroke-width:', ';stroke:', ';transition:stroke 1s ease-out;'], function (props) {
  return props.theme.clock.analog.minute.width;
}, function (props) {
  return props.theme.clock.analog.minute.color[props.grommet.dark ? 'dark' : 'light'];
});

export var StyledSecond = /*#__PURE__*/styled.line.withConfig({
  displayName: 'StyledClock__StyledSecond'
})(['stroke-width:', ';stroke:', ';transition:stroke 1s ease-out;'], function (props) {
  return props.theme.clock.analog.second.width;
}, function (props) {
  return props.theme.clock.analog.second.color[props.grommet.dark ? 'dark' : 'light'];
});

export var StyledAnalog = styled.svg.withConfig({
  displayName: 'StyledClock__StyledAnalog'
})(['width:', ';height:', ';'], function (props) {
  return props.theme.clock.analog.size[props.size];
}, function (props) {
  return props.theme.clock.analog.size[props.size];
}).extend(_templateObject, function (props) {
  return props.theme.clock.analog && props.theme.clock.analog.extend;
});

var sizeStyle = function sizeStyle(props) {
  // size is a combination of the level and size properties
  var size = props.size || 'medium';
  var data = props.theme.clock.digital.text[size];
  return css(['font-size:', ';line-height:', ';'], data.size, data.height);
};

export var StyledDigitalDigit = /*#__PURE__*/styled.div.withConfig({
  displayName: 'StyledClock__StyledDigitalDigit'
})(['position:relative;width:0.8em;text-align:center;overflow:hidden;', ''], function (props) {
  return sizeStyle(props);
});

var previousUp = /*#__PURE__*/keyframes(['0%{transform:translateY(0);}100%{transform:translateY(-100%);}']);

var previousDown = /*#__PURE__*/keyframes(['0%{transform:translateY(0);}100%{transform:translateY(100%);}']);

export var StyledDigitalPrevious = /*#__PURE__*/styled.div.withConfig({
  displayName: 'StyledClock__StyledDigitalPrevious'
})(['position:absolute;top:0;left:0;width:0.8em;text-align:center;animation:', ' 0.5s forwards;'], function (props) {
  return props.direction === 'down' ? previousDown : previousUp;
});

var nextUp = /*#__PURE__*/keyframes(['0%{transform:translateY(100%);}100%{transform:translateY(0);}']);

var nextDown = /*#__PURE__*/keyframes(['0%{transform:translateY(-100%);}100%{transform:translateY(0);}']);

export var StyledDigitalNext = /*#__PURE__*/styled.div.withConfig({
  displayName: 'StyledClock__StyledDigitalNext'
})(['position:absolute;top:0;left:0;width:0.8em;text-align:center;animation:', ' 0.5s forwards;'], function (props) {
  return props.direction === 'down' ? nextDown : nextUp;
});
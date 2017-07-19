var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  color: ', ';\n\n  // TODO: revisit this\n  svg {\n    fill: ', ';\n    stroke: ', ';\n    transition: none;\n  }\n'], ['\n  background-color: ', ';\n  color: ', ';\n\n  // TODO: revisit this\n  svg {\n    fill: ', ';\n    stroke: ', ';\n    transition: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-color: ', ';\n'], ['\n  border-color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  &:hover {\n    ', '\n\n    ', '\n    \n  }\n'], ['\n  &:hover {\n    ', '\n\n    ', '\n    \n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: auto;\n  height: auto;\n  min-width: 0;\n  max-width: none;\n  text-align: inherit;\n  font-weight: inherit;\n  padding: ', 'px;\n  \n  ', '\n'], ['\n  width: auto;\n  height: auto;\n  min-width: 0;\n  max-width: none;\n  text-align: inherit;\n  font-weight: inherit;\n  padding: ', 'px;\n  \n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  border: ', ' solid ', ';\n  border-radius: ', ';\n  color: ', ';\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  min-width: ', ';\n  max-width: ', ';\n  margin: 0;\n  overflow: visible;\n  text-transform: none;\n  background-color: transparent;\n  -webkit-appearance: button;\n  font: inherit;\n  font-weight: ', ';\n\n  ', '\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  border: ', ' solid ', ';\n  border-radius: ', ';\n  color: ', ';\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  min-width: ', ';\n  max-width: ', ';\n  margin: 0;\n  overflow: visible;\n  text-transform: none;\n  background-color: transparent;\n  -webkit-appearance: button;\n  font: inherit;\n  font-weight: ', ';\n\n  ', '\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  &:first-child:not(:last-child) {\n    margin-right: ', 'px;\n  }\n'], ['\n  &:first-child:not(:last-child) {\n    margin-right: ', 'px;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: inline-block;\n\n  &:first-child:not(:last-child) {\n    margin-right: ', 'px;\n  }\n\n  > * {\n    vertical-align: bottom;\n  }\n'], ['\n  display: inline-block;\n\n  &:first-child:not(:last-child) {\n    margin-right: ', 'px;\n  }\n\n  > * {\n    vertical-align: bottom;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

import { fontSize, lapAndUp } from '../mixins';
import { focusStyle, parseMetricToInt } from '../utils';

var primaryStyle = css(_templateObject, function (props) {
  return props.theme.colors.brand;
}, function (props) {
  return props.theme.colors.activeTextColor;
}, function (props) {
  return props.theme.colors.activeTextColor;
}, function (props) {
  return props.theme.colors.activeTextColor;
});

var accentStyle = css(_templateObject2, function (props) {
  return props.theme.button.colors.accent;
});

var criticalStyle = css(_templateObject2, function (props) {
  return props.theme.button.colors.critical;
});

var secondaryStyle = css(_templateObject2, function (props) {
  return props.theme.button.colors.secondary;
});

var disabledStyle = '\n  opacity: 0.3;\n  cursor: default;\n';

function getHoverColor(props) {
  if (props.accent) {
    return props.theme.button.colors.accent;
  } else if (props.critical) {
    return props.theme.button.colors.critical;
  } else if (props.secondary) {
    return props.theme.button.colors.secondary;
  }
  return props.theme.button.border.color || props.theme.colors.brand;
}

var hoverStyle = css(_templateObject3, function (props) {
  return !props.plain && 'box-shadow: 0px 0px 0px 2px ' + getHoverColor(props) + ';';
}, function (props) {
  return !props.plain && !props.primary && '\n        // TODO: revisit this\n        svg {\n          fill: ' + props.theme.colors.hoverTextColor + ';\n          stroke: ' + props.theme.colors.hoverTextColor + ';\n          transition: none;\n        }\n      ';
});

var plainStyle = css(_templateObject4, function (props) {
  return parseMetricToInt(props.theme.brand.spacing) / 4;
}, function (props) {
  return !props.focus && 'border-color: transparent;';
});

var StyledButton = styled.button(_templateObject5, function (props) {
  return props.theme.button.border.width;
}, function (props) {
  return props.theme.button.border.color || props.theme.colors.brand;
}, function (props) {
  return props.theme.button.border.radius;
}, function (props) {
  return props.theme.button.color || props.theme.colors.text;
}, function (props) {
  return props.theme.button.minWidth;
}, function (props) {
  return props.theme.button.maxWidth;
}, function (props) {
  return props.theme.brand.control.font.weight;
}, function (props) {
  return !props.disabled && !props.focus && hoverStyle;
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return fontSize(props.theme.brand.control.font.size, props.theme.brand.spacing);
}, function (props) {
  return !props.plain && !props.box && 'padding: ' + props.theme.button.padding.vertical + ' ' + props.theme.button.padding.horizontal + ';';
}, function (props) {
  if (props.primary) {
    return primaryStyle;
  } else if (props.accent) {
    return accentStyle;
  } else if (props.critical) {
    return criticalStyle;
  } else if (props.secondary) {
    return secondaryStyle;
  }
  return '';
}, function (props) {
  return props.plain && plainStyle;
}, function (props) {
  return props.focus && focusStyle;
}, lapAndUp('\n    transition: 0.1s ease-in-out;\n  '));

export var StyledLabel = styled.span(_templateObject6, function (props) {
  return parseMetricToInt(props.theme.brand.spacing) / 2;
});

export var StyledIcon = styled.span(_templateObject7, function (props) {
  return parseMetricToInt(props.theme.brand.spacing) / 2;
});

export default StyledButton.extend(_templateObject8, function (props) {
  return props.theme.button.extend;
});
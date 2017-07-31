'use strict';

exports.__esModule = true;
exports.focusStyle = undefined;
exports.parseMetricToInt = parseMetricToInt;
exports.findAllByType = findAllByType;

var _styledComponents = require('styled-components');

var focusStyle = exports.focusStyle = (0, _styledComponents.css)(['border-color:', ';box-shadow:0 0 1px 1px ', ';'], function (props) {
  return props.theme.global.focus.border.color || props.theme.global.colors.accent[0];
}, function (props) {
  return props.theme.global.focus.border.color || props.theme.global.colors.accent[0];
});

function parseMetricToInt(fontAsString) {
  return parseInt(fontAsString.replace(/[^0-9]/g, ''), 10);
}

function findAllByType(component, type) {
  var matches = [];

  if (component.type === type) {
    matches.push(component);
  }

  if (component.children) {
    component.children.forEach(function (child) {
      matches = matches.concat(findAllByType(child, type));
    });
  }

  return matches;
}

exports.default = { findAllByType: findAllByType, focusStyle: focusStyle, parseMetricToInt: parseMetricToInt };
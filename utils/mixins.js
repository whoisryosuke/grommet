'use strict';

exports.__esModule = true;
exports.parseMetricToNum = parseMetricToNum;
exports.fontSize = fontSize;
exports.lapAndUp = lapAndUp;
exports.palm = palm;
exports.findAllByType = findAllByType;
exports.getAvailableAtBadge = getAvailableAtBadge;

var _styledComponents = require('styled-components');

function parseMetricToNum(fontAsString) {
  return parseFloat(fontAsString.replace(/[^0-9/.]/g, ''), 10);
}

function fontSize(size, lineHeight) {
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';'], function (props) {
    return parseMetricToNum(size) / parseMetricToNum(props.theme.global.font.size) * 1 + 'rem';
  }, function (props) {
    return lineHeight || Math.ceil(parseMetricToNum(size) / parseMetricToNum(props.theme.global.lineHeight)) * (parseMetricToNum(props.theme.global.lineHeight) / parseMetricToNum(size)) + 'px';
  });
}

function lapAndUp(content) {
  return (0, _styledComponents.css)(['@media only screen and (min-width:', '){', ';}'], function (props) {
    return props.theme.global.breakpoints.narrow + 1 + 'px';
  }, content);
}

function palm(content) {
  return (0, _styledComponents.css)(['@media only screen and (max-width:', '){', ';}'], function (props) {
    return props.theme.global.breakpoints.narrow + 'px';
  }, content);
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

function getAvailableAtBadge(availableAt) {
  return {
    url: 'https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=' + availableAt.toLowerCase() + '&module=%2Fsrc%2F' + availableAt + '.js',
    badge: 'https://codesandbox.io/static/img/play-codesandbox.svg'
  };
}

exports.default = {
  fontSize: fontSize, findAllByType: findAllByType, getAvailableAtBadge: getAvailableAtBadge, lapAndUp: lapAndUp, palm: palm
};
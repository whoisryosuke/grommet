'use strict';

exports.__esModule = true;
exports.colorIsDark = undefined;
exports.parseMetricToInt = parseMetricToInt;
exports.fontSize = fontSize;
exports.lapAndUp = lapAndUp;
exports.findAllByType = findAllByType;

var _styledComponents = require('styled-components');

function parseMetricToInt(fontAsString) {
  return parseInt(fontAsString.replace(/[^0-9]/g, ''), 10);
}

var colorIsDark = exports.colorIsDark = function colorIsDark(color) {
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

function fontSize(size, lineHeight) {
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';'], function (props) {
    return parseMetricToInt(size) / parseMetricToInt(props.theme.global.font.size) * 1 + 'rem';
  }, function (props) {
    return lineHeight || Math.ceil(parseMetricToInt(size) / parseMetricToInt(props.theme.global.lineHeight)) * (parseMetricToInt(props.theme.global.lineHeight) / parseMetricToInt(size)) + 'px';
  });
}

var lapStart = '481px';
function lapAndUp(content) {
  return '\n    @media only screen and (min-width:' + lapStart + ') { ' + content + '; }\n  ';
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

exports.default = {
  colorIsDark: colorIsDark, fontSize: fontSize, findAllByType: findAllByType, lapAndUp: lapAndUp
};
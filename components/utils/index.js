'use strict';

exports.__esModule = true;
exports.KeyboardAccelerators = exports.Drop = undefined;

var _styles = require('./styles');

Object.keys(_styles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styles[key];
    }
  });
});

var _DOM = require('./DOM');

Object.keys(_DOM).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DOM[key];
    }
  });
});

var _Drop = require('./Drop');

Object.defineProperty(exports, 'Drop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Drop).default;
  }
});

var _KeyboardAccelerators = require('./KeyboardAccelerators');

Object.defineProperty(exports, 'KeyboardAccelerators', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_KeyboardAccelerators).default;
  }
});
exports.findAllByType = findAllByType;
exports.fontSize = fontSize;
exports.lapAndUp = lapAndUp;

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function fontSize(size, lineHeight) {
  return (0, _styledComponents.css)(['font-size:', ';line-height:', ';'], function (props) {
    return (0, _styles.parseMetricToInt)(size) / (0, _styles.parseMetricToInt)(props.theme.global.font.size) * 1 + 'rem';
  }, function (props) {
    return lineHeight || Math.ceil((0, _styles.parseMetricToInt)(size) / (0, _styles.parseMetricToInt)(props.theme.global.lineHeight)) * ((0, _styles.parseMetricToInt)(props.theme.global.lineHeight) / (0, _styles.parseMetricToInt)(size)) + 'px';
  });
}

var lapStart = '481px';
function lapAndUp(content) {
  return '\n    @media only screen and (min-width:' + lapStart + ') { ' + content + '; }\n  ';
}
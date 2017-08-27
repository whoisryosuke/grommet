var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import { parseMetricToInt } from '../utils/mixins';
import { colorForName } from '../utils/colors';

var Bar = function (_Component) {
  _inherits(Bar, _Component);

  function Bar() {
    _classCallCheck(this, Bar);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Bar.prototype.render = function render() {
    var _props = this.props,
        initialBounds = _props.bounds,
        color = _props.color,
        cap = _props.cap,
        size = _props.size,
        theme = _props.theme,
        thickness = _props.thickness,
        title = _props.title,
        values = _props.values;


    var bounds = initialBounds;
    if (!bounds) {
      // derive from values, TODO: move outside of render()
      bounds = [[], []];
      (values || []).forEach(function (value) {
        bounds[0][0] = Math.min(bounds[0][0], value[0]);
        bounds[0][1] = Math.max(bounds[0][1], value[0]);
        bounds[1][0] = Math.min(bounds[1][0], value[1]);
        bounds[1][1] = Math.max(bounds[1][1], value[1]);
      });
    }

    var sizeWidth = typeof size === 'string' ? size : size.width;
    var sizeHeight = typeof size === 'string' ? size : size.height;
    var width = sizeWidth === 'full' ? bounds[0][1] - bounds[0][0] : parseMetricToInt(theme.global.size[sizeWidth]);
    var height = sizeHeight === 'full' ? bounds[1][1] - bounds[1][0] : parseMetricToInt(theme.global.size[sizeHeight]);
    var strokeWidth = parseMetricToInt(theme.global.edgeSize[thickness]);
    var scaleX = width / (bounds[0][1] - bounds[0][0]);
    var scaleY = height / (bounds[1][1] - bounds[1][0]);

    var paths = (values || []).map(function (valueArg, index) {
      var label = valueArg.label,
          value = valueArg.value,
          rest = _objectWithoutProperties(valueArg, ['label', 'value']);

      var key = 'p-' + index;
      var d = 'M ' + value[0] * scaleX + ',' + (height - bounds[1][0] * scaleY) + '\n        L ' + value[0] * scaleX + ',' + (height - value[1] * scaleY);

      return React.createElement(
        'g',
        {
          key: key,
          fill: 'none',
          stroke: colorForName(color, theme),
          strokeWidth: strokeWidth,
          strokeLinecap: cap
        },
        React.createElement(
          'title',
          null,
          label
        ),
        React.createElement('path', _extends({ d: d }, rest))
      );
    });

    return React.createElement(
      'svg',
      {
        viewBox: '-' + strokeWidth / 2 + ' -' + strokeWidth / 2 + ' ' + (width + strokeWidth) + ' ' + (height + strokeWidth),
        preserveAspectRatio: 'none',
        width: size === 'full' ? '100%' : width,
        height: height
      },
      React.createElement(
        'title',
        null,
        title
      ),
      paths
    );
  };

  return Bar;
}(Component);

export default Bar;
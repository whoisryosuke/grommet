var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { compose } from 'recompose';

import { colorForName, parseMetricToNum } from '../../utils';

import { withTheme } from '../hocs';

import StyledDiagram from './StyledDiagram';

import doc from './doc';

var computeMidPoint = function computeMidPoint(fromPoint, toPoint) {
  return [fromPoint[0] > toPoint[0] ? toPoint[0] + (fromPoint[0] - toPoint[0]) / 2 : fromPoint[0] + (toPoint[0] - fromPoint[0]) / 2, fromPoint[1] > toPoint[1] ? toPoint[1] + (fromPoint[1] - toPoint[1]) / 2 : fromPoint[1] + (toPoint[1] - fromPoint[1]) / 2];
};

var COMMANDS = {
  curved: function curved(fromPoint, toPoint, offset) {
    var midPoint = computeMidPoint(fromPoint, toPoint);
    return 'M ' + (fromPoint[0] + offset) + ',' + (fromPoint[1] + offset) + ' ' + ('Q ' + (fromPoint[0] + offset) + ',' + (midPoint[1] + offset) + ' ') + (midPoint[0] + offset + ',' + (midPoint[1] + offset) + ' ') + ('T ' + (toPoint[0] + offset) + ',' + (toPoint[1] + offset));
  },
  direct: function direct(fromPoint, toPoint, offset) {
    return 'M ' + (fromPoint[0] + offset) + ',' + (fromPoint[1] + offset) + ' ' + ('L ' + (toPoint[0] + offset) + ',' + (toPoint[1] + offset));
  },
  rectilinear: function rectilinear(fromPoint, toPoint, offset) {
    var midPoint = computeMidPoint(fromPoint, toPoint);
    return 'M ' + (fromPoint[0] + offset) + ',' + (fromPoint[1] + offset) + ' ' + ('L ' + (fromPoint[0] + offset) + ',' + (midPoint[1] + offset) + ' ') + ('L ' + (toPoint[0] + offset) + ',' + (midPoint[1] + offset) + ' ') + ('L ' + (toPoint[0] + offset) + ',' + (toPoint[1] + offset));
  }
};

var Diagram = function (_Component) {
  _inherits(Diagram, _Component);

  function Diagram(props, context) {
    _classCallCheck(this, Diagram);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.onResize = function () {
      var _this$state = _this.state,
          width = _this$state.width,
          height = _this$state.height;

      var parent = findDOMNode(_this.containerRef).parentNode;
      if (parent) {
        var rect = parent.getBoundingClientRect();
        if (rect.width !== width || rect.height !== height) {
          _this.setState({ width: rect.width, height: rect.height });
        }
      }
    };

    _this.state = { height: 0, width: 0 };
    return _this;
  }

  Diagram.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  };

  Diagram.prototype.componentDidUpdate = function componentDidUpdate() {
    this.onResize();
  };

  Diagram.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  };

  Diagram.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        connections = _props.connections,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['connections', 'theme']);

    var _state = this.state,
        height = _state.height,
        width = _state.width;


    var paths = void 0;
    if (this.containerRef) {
      paths = connections.map(function (_ref, index) {
        var fromId = _ref.fromId,
            toId = _ref.toId,
            color = _ref.color,
            offset = _ref.offset,
            round = _ref.round,
            thickness = _ref.thickness,
            type = _ref.type;

        var containerRect = findDOMNode(_this2.containerRef).getBoundingClientRect();
        var fromElement = document.getElementById(fromId);
        var toElement = document.getElementById(toId);
        if (!fromElement) {
          console.warn('Diagram cannot find ' + fromId);
        }
        if (!toElement) {
          console.warn('Diagram cannot find ' + toId);
        }
        var path = void 0;
        if (fromElement && toElement) {
          var fromRect = fromElement.getBoundingClientRect();
          var toRect = toElement.getBoundingClientRect();
          var fromPoint = [fromRect.x - containerRect.x + fromRect.width / 2, fromRect.y - containerRect.y + fromRect.height / 2];
          var toPoint = [toRect.x - containerRect.x + toRect.width / 2, toRect.y - containerRect.y + toRect.height / 2];
          var offsetWidth = offset ? parseMetricToNum(theme.global.edgeSize[offset]) : 0;
          var d = COMMANDS[type || 'curved'](fromPoint, toPoint, offsetWidth);
          var strokeWidth = thickness ? parseMetricToNum(theme.global.edgeSize[thickness]) : 1;
          path = React.createElement('path', {
            key: fromId + '-' + toId + '-' + index,
            stroke: colorForName(color, theme),
            strokeWidth: strokeWidth,
            strokeLinecap: round ? 'round' : 'butt',
            strokeLinejoin: round ? 'round' : 'miter',
            fill: 'none',
            d: d
          });
        }
        return path;
      });
    }

    return React.createElement(
      StyledDiagram,
      _extends({
        ref: function ref(_ref2) {
          _this2.containerRef = _ref2;
        },
        viewBox: '0 0 ' + width + ' ' + height,
        preserveAspectRatio: 'xMinYMin meet',
        width: width,
        height: height
      }, rest),
      React.createElement(
        'g',
        null,
        paths
      )
    );
  };

  return Diagram;
}(Component);

Diagram.defaultProps = { connections: [] };


if (process.env.NODE_ENV !== 'production') {
  doc(Diagram);
}

export default compose(withTheme)(Diagram);
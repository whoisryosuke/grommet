function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Drop, Grommet } from '../';
import { grommet } from '../../themes';

var SimpleDrop = function (_Component) {
  _inherits(SimpleDrop, _Component);

  function SimpleDrop() {
    _classCallCheck(this, SimpleDrop);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleDrop.prototype.componentDidMount = function componentDidMount() {
    this.forceUpdate();
  };

  SimpleDrop.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      Grommet,
      { theme: grommet },
      React.createElement(
        Box,
        { align: 'start' },
        React.createElement(
          Box,
          {
            background: 'dark-4',
            pad: 'medium',
            align: 'center',
            justify: 'start',
            ref: function ref(_ref) {
              _this2.targetRef = _ref;
            }
          },
          'Target'
        ),
        React.createElement(
          Drop,
          {
            align: { top: 'bottom', left: 'left' },
            target: this.targetRef
          },
          React.createElement(
            Box,
            { pad: 'large' },
            'Drop Contents'
          )
        )
      )
    );
  };

  return SimpleDrop;
}(Component);

storiesOf('Drop', module).add('Default', function () {
  return React.createElement(SimpleDrop, null);
});
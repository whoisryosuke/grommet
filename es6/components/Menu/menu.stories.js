function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Menu from '../Menu/Menu';
import Grommet from '../Grommet/Grommet';
import Box from '../Box/Box';

var SimpleMenu = function (_Component) {
  _inherits(SimpleMenu, _Component);

  function SimpleMenu() {
    _classCallCheck(this, SimpleMenu);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleMenu.prototype.render = function render() {
    return React.createElement(
      Grommet,
      null,
      React.createElement(
        Box,
        { direction: 'row', gap: 'large' },
        React.createElement(Menu, { label: 'Actions', items: [{ label: 'Launch' }, { label: 'Abort' }] })
      )
    );
  };

  return SimpleMenu;
}(Component);

storiesOf('Menu', module).add('Simple Menu', function () {
  return React.createElement(SimpleMenu, null);
});
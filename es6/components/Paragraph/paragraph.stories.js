function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Paragraph from '../Paragraph/Paragraph';
import Grommet from '../Grommet/Grommet';

var SimpleParagraph = function (_Component) {
  _inherits(SimpleParagraph, _Component);

  function SimpleParagraph() {
    _classCallCheck(this, SimpleParagraph);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleParagraph.prototype.render = function render() {
    return React.createElement(
      Grommet,
      null,
      React.createElement(
        Paragraph,
        null,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      )
    );
  };

  return SimpleParagraph;
}(Component);

storiesOf('Paragraph', module).add('Simple Paragraph', function () {
  return React.createElement(SimpleParagraph, null);
});
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Anchor from '../Anchor/Anchor';
import Grommet from '../Grommet/Grommet';

var SimpleAnchor = function (_Component) {
  _inherits(SimpleAnchor, _Component);

  function SimpleAnchor() {
    _classCallCheck(this, SimpleAnchor);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleAnchor.prototype.render = function render() {
    return React.createElement(
      Grommet,
      null,
      React.createElement(
        Anchor,
        null,
        'Link'
      )
    );
  };

  return SimpleAnchor;
}(Component);

var FocusedAnchor = function (_Component2) {
  _inherits(FocusedAnchor, _Component2);

  function FocusedAnchor() {
    var _temp, _this2, _ret;

    _classCallCheck(this, FocusedAnchor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.ref = React.createRef(), _temp), _possibleConstructorReturn(_this2, _ret);
  }

  FocusedAnchor.prototype.componentDidMount = function componentDidMount() {
    this.ref.current.focus();
  };

  FocusedAnchor.prototype.render = function render() {
    return React.createElement(
      Grommet,
      null,
      React.createElement(
        Anchor,
        { ref: this.ref, href: '#' },
        'Link'
      )
    );
  };

  return FocusedAnchor;
}(Component);

storiesOf('Anchor', module).add('Simple Anchor', function () {
  return React.createElement(SimpleAnchor, null);
}).add('Focused Anchor', function () {
  return React.createElement(FocusedAnchor, null);
});
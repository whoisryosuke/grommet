function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction, Car, TreeOption } from 'grommet-icons';

import Tabs from '../Tabs/Tabs';
import Tab from '../Tabs/Tab';
import Box from '../Box/Box';
import Grommet from '../Grommet/Grommet';

var SimpleTabs = function (_Component) {
  _inherits(SimpleTabs, _Component);

  function SimpleTabs() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleTabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onActive = function (index) {
      return _this.setState({ index: index });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleTabs.prototype.render = function render() {
    var index = this.state.index;

    return React.createElement(
      Grommet,
      null,
      React.createElement(
        Tabs,
        { activeIndex: index, onActive: this.onActive },
        React.createElement(
          Tab,
          { title: 'Tab 1' },
          React.createElement(
            Box,
            { pad: 'large', align: 'center', background: 'accent-1' },
            React.createElement(Attraction, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 2' },
          React.createElement(
            Box,
            { pad: 'large', align: 'center', background: 'accent-2' },
            React.createElement(TreeOption, { size: 'xlarge' })
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 3' },
          React.createElement(
            Box,
            { pad: 'large', align: 'center', background: 'accent-3' },
            React.createElement(Car, { size: 'xlarge' })
          )
        )
      )
    );
  };

  return SimpleTabs;
}(Component);

storiesOf('Tabs', module).add('Simple Tabs', function () {
  return React.createElement(SimpleTabs, null);
});
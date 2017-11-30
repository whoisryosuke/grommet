var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { cloneElement, Children, Component } from 'react';
import { compose } from 'recompose';

import { Box } from '../Box';

import { withTheme } from '../hocs';

import doc from './doc';

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props, context) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.activateTab = function (index) {
      if (!_this.props.activeIndex) {
        _this.setState({ activeIndex: index });
      }
      if (_this.props.onActive) {
        _this.props.onActive(index);
      }
    };

    _this.state = {
      activeIndex: props.activeIndex
    };
    return _this;
  }

  Tabs.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex === (nextProps.activeIndex || 0) && this.state.activeIndex !== nextProps.activeIndex) {
      this.setState({ activeIndex: nextProps.activeIndex });
    }
  };

  Tabs.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        justify = _props.justify,
        tabContents = _props.messages.tabContents,
        rest = _objectWithoutProperties(_props, ['children', 'justify', 'messages']);

    delete rest.activeIndex;
    delete rest.onActive;
    var activeIndex = this.state.activeIndex;


    var activeContent = void 0;
    var activeTitle = void 0;
    var tabs = Children.map(children, function (tab, index) {
      if (!tab) return undefined;

      var tabProps = tab.props || {};

      var isTabActive = index === activeIndex;

      if (isTabActive) {
        activeContent = tabProps.children;
        activeTitle = tabProps.title;
      }

      return cloneElement(tab, {
        active: isTabActive,
        onActivate: function onActivate() {
          _this2.activateTab(index);
        }
      });
    }, this);

    var tabContentTitle = (activeTitle || '') + ' ' + tabContents;

    return React.createElement(
      'div',
      { role: 'tablist' },
      React.createElement(
        Box,
        _extends({
          border: 'bottom',
          direction: 'row',
          justify: justify,
          margin: { vertical: 'small' }
        }, rest),
        tabs
      ),
      React.createElement(
        'div',
        { 'aria-label': tabContentTitle, role: 'tabpanel' },
        activeContent
      )
    );
  };

  return Tabs;
}(Component);

Tabs.defaultProps = {
  children: [],
  activeIndex: 0,
  justify: 'center',
  messages: {
    tabContents: 'Tab Contents'
  },
  responsive: true
};


if (process.env.NODE_ENV !== 'production') {
  doc(Tabs);
}

export default compose(withTheme)(Tabs);
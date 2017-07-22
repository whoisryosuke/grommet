var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import deepAssign from 'deep-assign';

import StyledGrommet from './StyledGrommet';

import baseTheme from '../../themes/vanilla';

import doc from './doc';

var Grommet = function (_Component) {
  _inherits(Grommet, _Component);

  function Grommet() {
    _classCallCheck(this, Grommet);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Grommet.prototype.getChildContext = function getChildContext() {
    var theme = this.props.theme;


    var globalTheme = JSON.parse(JSON.stringify(baseTheme));
    return {
      theme: deepAssign(globalTheme, theme)
    };
  };

  Grommet.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['children', 'theme']);

    var globalTheme = JSON.parse(JSON.stringify(baseTheme));
    return React.createElement(
      StyledGrommet,
      _extends({}, rest, { theme: deepAssign(globalTheme, theme) }),
      children
    );
  };

  return Grommet;
}(Component);

Grommet.childContextTypes = {
  theme: PropTypes.object
};
Grommet.defaultProps = {
  centered: true,
  theme: undefined
};


doc(Grommet);

export default Grommet;
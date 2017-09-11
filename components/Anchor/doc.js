'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.routedAnchor = routedAnchor;

var _reactDesc = require('react-desc');

var _utils = require('../utils');

function routedAnchor(RoutedAnchor) {
  return (0, _reactDesc.schema)(RoutedAnchor, {
    description: 'An Anchor with support for React Router.',
    usage: 'import { RoutedAnchor } from \'grommet\';\n    <RoutedAnchor primary={true} path="/documentation" />',
    props: _extends({}, _utils.ROUTER_PROPS)
  });
}

exports.default = function (Anchor) {
  return (0, _reactDesc.schema)(Anchor, {
    description: 'A text link. We have a separate component from the browser\n  base so we can style it. You can either set the icon and/or label properties\n  or just use children.',
    usage: 'import { Anchor } from \'grommet\';\n  <Anchor href={location} label="Label" />',
    props: {
      a11yTitle: [_reactDesc.PropTypes.string, 'Custom title to be used by screen readers.'],
      href: [_reactDesc.PropTypes.string, 'Hyperlink reference to place in the anchor.'],
      icon: [_reactDesc.PropTypes.element, 'Icon element to place in the anchor.'],
      label: [_reactDesc.PropTypes.node, 'Label text to place in the anchor.'],
      onClick: [_reactDesc.PropTypes.func, 'Click handler. It can be used, for example, \n      to add analytics and track who clicked in the anchor.'],
      primary: [_reactDesc.PropTypes.bool, 'Whether this is a primary anchor.'],
      reverse: [_reactDesc.PropTypes.bool, 'Whether an icon and label should be reversed so that the icon is at ' + 'the end of the anchor.']
    }
  });
};
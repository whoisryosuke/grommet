var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { schema, PropTypes } from 'react-desc';

import { ROUTER_PROPS } from '../utils';

export function routedAnchor(RoutedAnchor) {
  return schema(RoutedAnchor, {
    description: 'An Anchor with support for React Router.',
    usage: 'import { RoutedAnchor } from \'grommet\';\n    <RoutedAnchor primary={true} path="/documentation" />',
    props: _extends({}, ROUTER_PROPS)
  });
}

export default (function (Anchor) {
  return schema(Anchor, {
    description: 'A text link. We have a separate component from the browser\n  base so we can style it. You can either set the icon and/or label properties\n  or just use children.',
    usage: 'import { Anchor } from \'grommet\';\n  <Anchor href={location} label="Label" />',
    props: {
      a11yTitle: [PropTypes.string, 'Custom title to be used by screen readers.'],
      href: [PropTypes.string, 'Hyperlink reference to place in the anchor.'],
      icon: [PropTypes.element, 'Icon element to place in the anchor.'],
      label: [PropTypes.node, 'Label text to place in the anchor.'],
      onClick: [PropTypes.func, 'Click handler. It can be used, for example, \n      to add analytics and track who clicked in the anchor.'],
      primary: [PropTypes.bool, 'Whether this is a primary anchor.'],
      reverse: [PropTypes.bool, 'Whether an icon and label should be reversed so that the icon is at ' + 'the end of the anchor.']
    }
  });
});
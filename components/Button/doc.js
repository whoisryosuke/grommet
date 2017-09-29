'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.routedButton = routedButton;

var _reactDesc = require('react-desc');

var _utils = require('../utils');

function routedButton(RoutedButton) {
  return (0, _reactDesc.schema)(RoutedButton, {
    description: 'A button with support for React Router.',
    usage: 'import { RoutedButton } from \'grommet\';\n    <RoutedButton primary={true} path="/documentation" />',
    props: _extends({}, _utils.ROUTER_PROPS)
  });
}

exports.default = function (Button) {
  return (0, _reactDesc.schema)(Button, {
    description: 'A button. We have a separate component\n  from the browser base so we can style it.',
    usage: 'import { Button } from \'grommet\';\n  <Button primary={true} label="Label" />',
    props: {
      a11yTitle: [_reactDesc.PropTypes.string, 'Custom title to be used by screen readers.'],
      accent: [_reactDesc.PropTypes.bool, 'Whether this is a accent button.'],
      active: [_reactDesc.PropTypes.bool, 'Whether the button is active.'],
      critical: [_reactDesc.PropTypes.bool, 'Whether this is an critical button.'],
      fill: [_reactDesc.PropTypes.bool, 'Whether the button expands to fill all of the available width and height.'],
      hoverIndicator: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['background']), _reactDesc.PropTypes.shape({
        background: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.string])
      })]), 'Optional. The hover indicator to apply when the user is mousing over the\n      button. An object can be also be specified for color index support:\n      {background: \'neutral-2\'}. This prop is meant to be used only\n      with plain Buttons.'],
      href: [_reactDesc.PropTypes.string, 'If specified, the button will behave like an anchor tag.'],
      icon: [_reactDesc.PropTypes.element, 'Icon element to place in the button.'],
      label: [_reactDesc.PropTypes.node, 'Label text to place in the button.'],
      onClick: [_reactDesc.PropTypes.func, 'Click handler. Not setting this property and not specifying a href\n      causes the Button to be disabled.'],
      plain: [_reactDesc.PropTypes.bool, 'Whether this is a plain button with no border or padding.\n      Use this when wrapping children that provide the complete visualization\n      of the control. Do not use plain with label or icon properties.'],
      primary: [_reactDesc.PropTypes.bool, 'Whether this is a primary button. There should be at most one\n      per page or screen.'],
      reverse: [_reactDesc.PropTypes.bool, 'Whether an icon and label should be reversed so that the icon is at the\n      end of the anchor.'],
      secondary: [_reactDesc.PropTypes.bool, 'Whether this is a secondary button.'],
      type: [_reactDesc.PropTypes.oneOf(['button', 'reset', 'submit']), 'The type of button. Set the type to submit for the default button\n      on forms.', {
        defaultProp: 'button'
      }]
    }
  });
};
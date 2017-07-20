import { schema, PropTypes } from 'react-desc';

export default (function (Button) {
  return schema(Button, {
    description: 'A button. We have a separate component \n  from the browser base so we can style it.',
    usage: 'import { Button } from \'grommet\';\n  <Button primary={true} label="Label" />',
    props: {
      a11yTitle: [PropTypes.string, 'Custom title used by screen readers.'],
      accent: [PropTypes.bool, 'Whether this is a accent button.'],
      align: [PropTypes.oneOf(['start', 'center', 'end']), 'How to align the contents along the cross axis.'],
      box: [PropTypes.bool, 'Whether the button should support Box props. \n      This is useful if you want your children to be a \n      flexbox container.'],
      centered: [PropTypes.bool, 'Whether this is an accent button.'],
      critical: [PropTypes.bool, 'Whether this is an critical button.'],
      fill: [PropTypes.bool, 'Whether the button expands to fill all of the available width and height.'],
      hoverIndicator: [PropTypes.oneOfType([PropTypes.oneOf(['background']), PropTypes.shape({
        background: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
      })]), 'Optional. The hover indicator to apply when the user is mousing over the\n      button. An object can be also be specified for color index support:\n      {background: \'neutral-2\'}. This prop is meant to be used only \n      with plain Buttons.'],
      href: [PropTypes.string, 'If specified, the button will behave like an anchor tag.'],
      icon: [PropTypes.element, 'Icon element to place in the button.'],
      label: [PropTypes.node, 'Label text to place in the button.'],
      onClick: [PropTypes.func, 'Click handler. Not setting this property and not specifying a href \n      causes the Button to be disabled.'],
      plain: [PropTypes.bool, 'Whether this is a plain button with no border or padding. \n      Use this when wrapping children that provide the complete visualization\n      of the control. Do not use plain with label or icon properties.'],
      primary: [PropTypes.bool, 'Whether this is a primary button. There should be at most one \n      per page or screen.'],
      reverse: [PropTypes.bool, 'Whether an icon and label should be reversed so that the icon is at the\n      end of the anchor.'],
      secondary: [PropTypes.bool, 'Whether this is a secondary button.'],
      type: [PropTypes.oneOf(['button', 'reset', 'submit']), 'The type of button. Set the type to submit for the default button \n      on forms.', {
        defaultProp: 'button'
      }]
    }
  });
});
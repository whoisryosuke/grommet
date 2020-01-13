import React, {
  cloneElement,
  Children,
  forwardRef,
  useContext,
  useState,
} from 'react';

import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import {
  colorIsDark,
  normalizeBackground,
  normalizeColor,
  colorPropType,
  genericProps,
  hoverIndicatorPropType,
} from '../../utils';
import { defaultProps } from '../../default-props';

import { Box } from '../Box';

import { StyledButton } from './StyledButton';

/**
 * This is a button
 */
const Button = forwardRef(
  (
    {
      a11yTitle,
      color, // munged to avoid styled-components putting it in the DOM
      children,
      disabled,
      icon,
      focusIndicator = true,
      gap = 'small',
      fill, // munged to avoid styled-components putting it in the DOM
      href,
      label,
      onBlur,
      onClick,
      onFocus,
      onMouseOut,
      onMouseOver,
      plain,
      primary,
      reverse,
      type = 'button',
      as,
      ...rest
    },
    ref,
  ) => {
    const theme = useContext(ThemeContext) || defaultProps.theme;
    const [focus, setFocus] = useState();

    if ((icon || label) && children) {
      console.warn(
        'Button should not have children if icon or label is provided',
      );
    }

    const isDarkBackground = () => {
      const backgroundColor = normalizeBackground(
        normalizeColor(
          color ||
            theme.button.primary.color ||
            theme.global.colors.control ||
            'brand',
          theme,
        ),
        theme,
      );

      return colorIsDark(backgroundColor, theme);
    };

    const [hover, setHover] = useState(false);

    const onMouseOverButton = event => {
      setHover(true);
      if (onMouseOver) {
        onMouseOver(event);
      }
    };

    const onMouseOutButton = event => {
      setHover(false);
      if (onMouseOut) {
        onMouseOut(event);
      }
    };

    let buttonIcon = icon;
    // only change color if user did not specify the color themselves...
    if (primary && icon && !icon.props.color) {
      buttonIcon = cloneElement(icon, {
        color: theme.global.colors.text[isDarkBackground() ? 'dark' : 'light'],
      });
    }

    const domTag = !as && href ? 'a' : as;
    const first = reverse ? label : buttonIcon;
    const second = reverse ? buttonIcon : label;

    let contents;
    if (first && second) {
      contents = (
        <Box direction="row" align="center" justify="center" gap={gap}>
          {first}
          {second}
        </Box>
      );
    } else if (typeof children === 'function') {
      contents = children({ hover, focus });
    } else {
      contents = first || second || children;
    }
    return (
      <StyledButton
        {...rest}
        as={domTag}
        ref={ref}
        aria-label={a11yTitle}
        colorValue={color}
        disabled={disabled}
        hasIcon={!!icon}
        gap={gap}
        hasLabel={!!label}
        fillContainer={fill}
        focus={focus}
        focusIndicator={focusIndicator}
        href={href}
        onClick={onClick}
        onFocus={event => {
          setFocus(true);
          if (onFocus) onFocus(event);
        }}
        onBlur={event => {
          setFocus(false);
          if (onBlur) onBlur(event);
        }}
        onMouseOver={onMouseOverButton}
        onMouseOut={onMouseOutButton}
        pad={!plain}
        plain={
          typeof plain !== 'undefined'
            ? plain
            : Children.count(children) > 0 || (icon && !label)
        }
        primary={primary}
        type={!href ? type : undefined}
      >
        {contents}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

export default Button;

Button.propTypes = {
  ...genericProps,
  /**
   * Whether the button is active.
   */
  active: PropTypes.bool,

  /**
   * Fill color for primary, label color for plain, border color otherwise.
   */
  color: colorPropType,

  /**
   * Whether the button is disabled.
   */
  disabled: PropTypes.bool,

  /**
     * Whether the button expands to fill all of the available width and/or 
        height.
     */
  fill: PropTypes.oneOfType([
    PropTypes.oneOf(['horizontal', 'vertical']),
    PropTypes.bool,
  ]),

  /**
   * Whether when 'plain' it should receive a focus outline.
   */
  focusIndicator: PropTypes.bool,

  /**
     * The hover indicator to apply when the user is mousing over the
button. An object can be also be specified for color index support:
{background: 'neutral-2'}. This prop is meant to be used only
with plain Buttons.
     */
  hoverIndicator: hoverIndicatorPropType,

  /**
   * If specified, the button will behave like an anchor tag.
   */
  href: PropTypes.string,

  /**
   * Specifies where to display the URL defined in the href property.
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),

  /**
   * Icon element to place in the button.
   */
  icon: PropTypes.element,

  /**
   * The amount of spacing between icon and label in the button.
   */
  gap: PropTypes.oneOfType([
    PropTypes.oneOf([
      'none',
      'xxsmall',
      'xsmall',
      'small',
      'medium',
      'large',
      'xlarge',
    ]),
    PropTypes.string,
  ]),

  /**
   * Label text to place in the button.
   */
  label: PropTypes.node,

  /**
   * Click handler. Not setting this property and not specifying a href
causes the Button to be disabled.
   */
  onClick: PropTypes.func,

  /**
   * Whether this is a plain button with no border or pad.
Non plain button will show both pad and border.
The plain button has no border and unless the icon prop exist it has no pad as 
well
   */
  plain: PropTypes.bool,

  /**
   * Whether this is a primary button. There should be at most one per page
         or screen.
   */
  primary: PropTypes.bool,

  /**
   * Whether an icon and label should be reversed so that the icon is at the
end of the anchor.
   */
  reverse: PropTypes.bool,

  /**
   * The type of button. Set the type to submit for the default button on 
        forms.
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),

  /**
   * The DOM tag or react component to use for the element.
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Button.defaultProps = {
  active: false,
  as: 'button',
  color: 'brand',
  disabled: false,
  fill: false,
  href: '#',
  hoverIndicator: false,
  icon: [],
  focusIndicator: true,
  gap: 'small',
  label: 'Text',
  onClick: () => {},
  plain: false,
  primary: false,
  reverse: false,
  target: 'self',
  type: 'button',
};

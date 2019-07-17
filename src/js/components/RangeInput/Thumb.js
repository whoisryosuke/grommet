import React, { Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from 'styled-components';
import { withForwardRef } from '../hocs';

import { defaultProps } from '../../default-props';

import { Box } from '../Box';
import { normalizeColor } from '../../utils/colors';
import { parseMetricToNum } from '../../utils/mixins';

class Thumb extends Component {
  state = {};

  render() {
    const { color, theme } = this.props;
    const { focused } = this.state;

    const size = parseMetricToNum(theme.global.spacing) / 2;

    const type =
      (theme.rangeInput &&
        theme.rangeInput.edge &&
        theme.rangeInput.edge.type) ||
      'disc';

    // TODO see how to reuse smartly the logic from EdgeControl
    let node;
    if (type === 'bar') {
      node = (
        <Box
          flex
          justifySelf="stretch"
          width={`${size}px`}
          background={normalizeColor(color || 'control', theme)}
          border={
            focused ? { color: normalizeColor('focus', theme) } : undefined
          }
        />
      );
    } else if (type === 'disc') {
      node = (
        <Box
          width={`${size + (focused ? 2 : 0)}px`}
          height={`${size + (focused ? 2 : 0)}px`}
          round="full"
          background={normalizeColor(color || 'control', theme)}
          border={
            focused ? { color: normalizeColor('focus', theme) } : undefined
          }
        />
      );
    } else {
      node = type;
    }
    return <Box>{node}</Box>;
  }
}

Thumb.defaultProps = {};
Object.setPrototypeOf(Thumb.defaultProps, defaultProps);

const ThumbWrapper = compose(
  withForwardRef,
  withTheme,
)(Thumb);

export { ThumbWrapper as Thumb };

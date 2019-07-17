import React, { Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from 'styled-components';
import { withForwardRef } from '../hocs';

import { defaultProps } from '../../default-props';
import { normalizeColor } from '../../utils/colors';

import { Box } from '../Box';

class Track extends Component {
  state = {};

  render() {
    const { theme, track } = this.props;
    // TODO handle the use case of track as a single string of color
    const colorBefore = track.before;
    const colorAfter = track.after;
    console.log('colorBefore: ', colorBefore);
    return (
      <Box direction="row">
        {/* TODO Not sure about the `controls` color */}
        <Box
          style={{ flex: `0 0 10` }}
          fill
          height="large"
          background={normalizeColor(colorBefore || 'control', theme)}
        />
        <Box
          fill
          style={{ flex: `10 0 0` }}
          height="large"
          background={normalizeColor(colorAfter || 'control', theme)}
        />
      </Box>
    );
  }
}

Track.defaultProps = {};
Object.setPrototypeOf(Track.defaultProps, defaultProps);

const TrackWrapper = compose(
  withForwardRef,
  withTheme,
)(Track);

export { TrackWrapper as Track };

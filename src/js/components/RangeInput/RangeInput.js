import React, { Component } from 'react';
import { compose } from 'recompose';

import { StyledRangeInput } from './StyledRangeInput';
import { Thumb } from './Thumb';
import { Track } from './Track';

import { withFocus, withForwardRef } from '../hocs';

import { Stack } from '../Stack';

class RangeInput extends Component {
  state = {};

  render() {
    const { forwardRef, track, thumb, ...rest } = this.props;
    // TODO make sure this works backwards <StyledRangeInput {...rest} ref={forwardRef} type="range" />
    return (
      <Stack>
        {track && <Track track={track} />}
        {thumb && <Thumb />}
        <StyledRangeInput {...rest} ref={forwardRef} type="range" />
      </Stack>
    );
  }
}
let RangeInputDoc;
if (process.env.NODE_ENV !== 'production') {
  RangeInputDoc = require('./doc').doc(RangeInput); // eslint-disable-line global-require
}
const RangeInputWrapper = compose(
  withFocus(),
  withForwardRef,
)(RangeInputDoc || RangeInput);

export { RangeInputWrapper as RangeInput };

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Grommet, RangeInput } from 'grommet';
import { grommet } from 'grommet/themes';

class Interactive extends Component {
  state = { value: 5 };

  onChange = event => this.setState({ value: event.target.value });

  render() {
    const { value } = this.state;
    return (
      <Grommet theme={grommet}>
        <Box align="center" pad="large">
          <RangeInput
            track={{ before: { color: 'red' }, after: { color: 'green' } }}
            value={value}
            onChange={this.onChange}
          />
        </Box>
      </Grommet>
    );
  }
}

storiesOf('RangeInput', module).add('Interactive', () => <Interactive />);

import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import { storiesOf } from '@storybook/react';
import { Box, MaskedInput } from 'grommet';

const FILTERS = {
  filterA01: ['shimi', 'valueA02', 'valueA03'],
  filterB02: ['valueB01', 'valueB02', 'valueB03'],
  filterC03: ['valueC01', 'valueC02', 'valueC03'],
  filterD04: ['valueD01', 'valueD02', 'valueD03'],
  filterE05: ['valueE01', 'valueE02', 'valueE03'],
  filterF06: ['valueF01', 'valueF02', 'valueF03'],
  filterG07: ['valueG01', 'valueG02', 'valueG03'],
  filterH08: ['valueH01', 'valueH02', 'valueH03'],
  filterI09: ['valueI01', 'valueI02', 'valueI03'],
  filterJ10: ['valueJ01', 'valueJ02', 'valueJ03'],
};

const getFilterKeys = () => Object.keys(FILTERS);
const getFilterValue = key => FILTERS[key] || [];

export const Search = () => {
  const [value, setValue] = useState('');
  const [filterKey, filterValue] = value.split(':');

  const getFilterKeysOptions = () =>
    getFilterKeys().filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(filterKey.toLowerCase()) !== -1,
    );

  const getFilterValueOptions = () => {
    return !isEmpty(filterKey) && typeof filterValue !== 'undefined'
      ? getFilterValue(filterKey).filter(
          suggestion =>
            suggestion.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1,
        )
      : [];
  };

  const onChange = event => {
    setValue(event.target.value);
  };

  return (
    <Box fill>
      <Box align="center" direction="row">
        <Box pad="small">tags</Box>
        <MaskedInput
          mask={[
            {
              options: getFilterKeysOptions(),
              placeholder: 'filter',
            },
            { fixed: ':' },
            {
              options: getFilterValueOptions(),
              placeholder: 'value',
            },
            { fixed: '' },
          ]}
          onChange={onChange}
          value={value}
        />
      </Box>
    </Box>
  );
};

storiesOf('MaskedInput', module).add('Search', () => <Search />);

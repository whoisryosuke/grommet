import React from 'react';
import { storiesOf } from '@storybook/react';

import { Add } from 'grommet-icons';

import { Anchor, Grommet } from '../';

storiesOf('Anchor', module).add('Default', function () {
  return React.createElement(
    Grommet,
    null,
    React.createElement(
      Anchor,
      { href: '#' },
      'Link'
    )
  );
}).add('Icon', function () {
  return React.createElement(
    Grommet,
    null,
    React.createElement(Anchor, { icon: React.createElement(Add, null), label: 'Add', href: '#' })
  );
}).add('With Text', function () {
  return React.createElement(
    Grommet,
    null,
    'This is a ',
    React.createElement(Anchor, { label: 'link', href: '#' }),
    ' with text.'
  );
});
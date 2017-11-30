import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

import Tab from './Tab';

export default (function (Tabs) {
  var DocumentedTabs = describe(Tabs).availableAt(getAvailableAtBadge('Tabs')).description('A tabular view component.').usage('import { Tabs, Tab } from \'grommet\';\n<Tabs>\n  <Tab title=\'Tab 1\'>...</Tab>\n  <Tab title=\'Tab 2\'>...</Tab>\n</Tabs>');

  DocumentedTabs.propTypes = {
    activeIndex: PropTypes.number.description('Active tab index. If specified, Tabs will be a controlled component. This means that future\ntab changes will not work unless you subscribe to onActive function and update activeIndex\naccordingly.').defaultValue(0),
    children: PropTypes.arrayOf(PropTypes.instanceOf(Tab)).description('Array of Tab.').isRequired,
    justify: PropTypes.oneOf(['start', 'center', 'end']).description('How to align the tabs along the main axis.').defaultValue('center'),
    messages: PropTypes.shape({
      tabContents: PropTypes.string
    }).description('Custom messages for Tabs. Used for accessibility by screen readers.').defaultValue({
      tabContents: 'Tab Contents'
    }),
    onActive: PropTypes.func.description('Function that will be called with the active tab index when the currently active\ntab changes.')
  };
  return DocumentedTabs;
});
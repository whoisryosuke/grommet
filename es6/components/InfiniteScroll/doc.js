import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export default (function (InfiniteScroll) {
  var DocumentedInfiniteScroll = describe(InfiniteScroll).availableAt(getAvailableAtBadge('InfiniteScroll')).description('A container that lazily renders items.').usage('import { InfiniteScroll } from \'grommet\';\n<InfiniteScroll />');

  DocumentedInfiniteScroll.propTypes = {
    children: PropTypes.func.description('Function that will be called when each item is rendered.'),
    items: PropTypes.arrayOf(PropTypes.any).description('The children callback will be called to render each item.'),
    onMore: PropTypes.func.description('Use this to indicate that \'items\' doesn\'t contain all that it could.\n      It will be called when the entire list of items has been rendered.\n      This might be used when the total number of items that could be retrieved\n      is more than you\'d want to load into the browser. \'onMore\' allows you\n      to lazily fetch more from the server only when needed.'),
    step: PropTypes.number.description('How many items to render at a time.').defaultValue(50)
  };

  return DocumentedInfiniteScroll;
});
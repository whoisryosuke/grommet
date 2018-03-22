'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (InfiniteScroll) {
  var DocumentedInfiniteScroll = (0, _reactDesc.describe)(InfiniteScroll).availableAt((0, _utils.getAvailableAtBadge)('InfiniteScroll')).description('A container that lazily renders items.').usage('import { InfiniteScroll } from \'grommet\';\n<InfiniteScroll />');

  DocumentedInfiniteScroll.propTypes = {
    children: _reactDesc.PropTypes.func.description('Function that will be called when each item is rendered.'),
    items: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.any).description('The children callback will be called to render each item.'),
    onMore: _reactDesc.PropTypes.func.description('Use this to indicate that \'items\' doesn\'t contain all that it could.\n      It will be called when the entire list of items has been rendered.\n      This might be used when the total number of items that could be retrieved\n      is more than you\'d want to load into the browser. \'onMore\' allows you\n      to lazily fetch more from the server only when needed.'),
    step: _reactDesc.PropTypes.number.description('How many items to render at a time.').defaultValue(50)
  };

  return DocumentedInfiniteScroll;
};
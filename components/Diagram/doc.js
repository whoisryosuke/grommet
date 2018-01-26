'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Diagram) {
  var DocumentedDiagram = (0, _reactDesc.describe)(Diagram).availableAt((0, _utils.getAvailableAtBadge)('Diagram')).description('Graphical lines between DOM elements.\n      Diagram is meant to be used with Stack.').usage("import { Diagram } from 'grommet';\n<Diagram />");

  DocumentedDiagram.propTypes = {
    connections: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      fromId: _reactDesc.PropTypes.string.isRequired,
      label: _reactDesc.PropTypes.string, // for accessibility
      offset: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
      thickness: _reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
      toId: _reactDesc.PropTypes.string.isRequired,
      type: _reactDesc.PropTypes.oneOf(['direct', 'curved', 'rectilinear'])
    })).description('Array of objects describing the connections.\n      The \'fromId\' and \'toId\' must be DOM element ids.\n      \'offset\' can be used to shift a bit to reduce the amount of overlap\n      with other connection lines').isRequired
  };

  return DocumentedDiagram;
};
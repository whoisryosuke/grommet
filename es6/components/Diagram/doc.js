import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export default (function (Diagram) {
  var DocumentedDiagram = describe(Diagram).availableAt(getAvailableAtBadge('Diagram')).description('Graphical lines between DOM elements.\n      Diagram is meant to be used with Stack.').usage("import { Diagram } from 'grommet';\n<Diagram />");

  DocumentedDiagram.propTypes = {
    connections: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      fromId: PropTypes.string.isRequired,
      label: PropTypes.string, // for accessibility
      offset: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
      thickness: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
      toId: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['direct', 'curved', 'rectilinear'])
    })).description('Array of objects describing the connections.\n      The \'fromId\' and \'toId\' must be DOM element ids.\n      \'offset\' can be used to shift a bit to reduce the amount of overlap\n      with other connection lines').isRequired
  };

  return DocumentedDiagram;
});
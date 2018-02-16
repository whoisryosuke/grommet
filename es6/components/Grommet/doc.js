import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export default (function (Grommet) {
  var DocumentedGrommet = describe(Grommet).availableAt(getAvailableAtBadge('Grommet')).description('This is the top level Grommet container.').usage('import { Grommet } from \'grommet\';\n<Grommet>...</Grommet>');

  DocumentedGrommet.propTypes = {
    dir: PropTypes.oneOf(['rtl', 'ltr']).description('Whether text should be rendered right to left or not. Defaults to\n      inherit from the document context.'),
    full: PropTypes.bool.description('Whether to take the whole viewport.'),
    theme: PropTypes.object.description('Custom styles for Grommet app component.')
  };

  return DocumentedGrommet;
});
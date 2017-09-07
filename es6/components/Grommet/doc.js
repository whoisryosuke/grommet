import { schema, PropTypes } from 'react-desc';

export default (function (Grommet) {
  return schema(Grommet, {
    description: 'This is the top level Grommet container.',
    usage: 'import { Grommet } from \'grommet\';\n  <Grommet>...</Grommet>',
    props: {
      dir: [PropTypes.oneOf(['rtl', 'ltr']), 'Whether text should be rendered right to left or not. Defaults to\n      inherit from the document context.'],
      theme: [PropTypes.object, 'Custom styles for Grommet app component.']
    }
  });
});
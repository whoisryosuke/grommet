import { schema, PropTypes } from 'react-desc';

export default (function (Grommet) {
  return schema(Grommet, {
    description: 'This is the primary Grommet container outer.',
    usage: 'import { Grommet } from \'grommet\';\n  <Grommet centered={true}>...</Grommet>',
    props: {
      centered: [PropTypes.bool, 'Whether to centralize or not the content inside the container.', {
        defaultProp: true
      }],
      theme: [PropTypes.object, 'Custom styles for Grommet app component.']
    }
  });
});
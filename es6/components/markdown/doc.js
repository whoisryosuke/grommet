import { schema, PropTypes } from 'react-desc';

export default (function (Markdown) {
  return schema(Markdown, {
    description: 'Markdown formatting using Grommet components.',
    usage: 'import { Markdown } from \'grommet\';\n  <Markdown/>',
    props: {
      content: [PropTypes.string, 'The markdown text to render.']
    }
  });
});
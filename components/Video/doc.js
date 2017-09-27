'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Video) {
  return (0, _reactDesc.schema)(Video, {
    description: 'A video player.',
    usage: 'import { Video } from \'grommet\';\n  <Video/>',
    props: {
      autoPlay: [_reactDesc.PropTypes.bool, 'Enables automatic playback of the video as soon as it is loaded. Defaults to false.'],
      controls: [_reactDesc.PropTypes.oneOf([false, 'over', 'below']), 'Whether to show playback controls and where to place them. Defaults to "over".'],
      fit: [_reactDesc.PropTypes.oneOf(['cover', 'contain']), 'How the image fills its container.'],
      loop: [_reactDesc.PropTypes.bool, 'Enables continuous video looping. Defaults to false.'],
      mute: [_reactDesc.PropTypes.bool, 'Enables video muting. This option is best used with the autoPlay flag.\n      Defaults to false.']
    }
  });
};
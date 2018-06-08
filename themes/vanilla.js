'use strict';

exports.__esModule = true;

var _polished = require('polished');

var _styledComponents = require('styled-components');

var _grommetIcons = require('grommet-icons');

var _utils = require('../utils');

var brandColor = '#865CD6';
var accentColors = ['#FD6FFF', '#60EB9F', '#60EBE1', '#FFCA58'];
var neutralColors = ['#EB6060', '#01C781', '#6095EB', '#FFB200'];
var statusColors = {
  critical: '#E1746A',
  error: '#E1746A',
  warning: '#F7E464',
  ok: '#7DD892',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8'
};
var darkColors = ['#333333', '#444444', '#555555', '#666666', '#777777', '#999999'];
var lightColors = ['#F6F6F6', '#EEEEEE', '#DDDDDD', '#CCCCCC', '#BBBBBB', '#AAAAAA'];
var backgroundColor = '#FFFFFF';
var textColor = '#444444';
var borderColor = 'rgba(0, 0, 0, 0.33)';
var focusColor = accentColors[0];
var activeColor = (0, _polished.rgba)('#DDDDDD', 0.5);

var colors = {
  active: activeColor,
  accent: accentColors, // deprecated
  black: '#000000',
  border: borderColor,
  brand: brandColor,
  dark: darkColors, // deprecated
  darkBackground: {
    text: '#FFFFFF'
  },
  focus: focusColor,
  light: lightColors, // deprecated
  lightBackground: {
    text: textColor
  },
  neutral: neutralColors, // deprecated
  placeholder: '#AAAAAA',
  status: statusColors, // deprecated
  text: textColor,
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors[prefix + '-' + (index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors['status-' + color] = statusColors[color];
});

var workSansPath = 'https://fonts.gstatic.com/s/worksans/v2';
var zillaSlabPath = 'https://fonts.gstatic.com/s/zillaslab/v3';

var baseSpacing = 24;

var borderWidth = 2;

exports.default = (0, _utils.deepFreeze)({
  global: {
    animation: {
      duration: '1s',
      jiggle: {
        duration: '0.1s'
      }
    },
    borderSize: {
      xsmall: '1px',
      small: '2px',
      medium: baseSpacing / 6 + 'px',
      large: baseSpacing / 2 + 'px',
      xlarge: baseSpacing + 'px',
      narrow: {
        xsmall: '1px',
        small: '2px',
        medium: baseSpacing / 6 + 'px',
        large: baseSpacing / 4 + 'px',
        xlarge: baseSpacing / 2 + 'px'
      }
    },
    breakpoints: {
      narrow: 699
    },
    colors: colors,
    control: {
      border: {
        width: '2px'
      },
      font: {
        weight: 600,
        size: '19px'
      }
    },
    drop: {
      backgroundColor: {
        light: '#f8f8f8',
        dark: '#222222'
      },
      border: {
        width: '0px',
        radius: '0px'
      },
      shadow: {
        light: '0px 3px 8px rgba(100, 100, 100, 0.50)',
        dark: '0px 3px 8px rgba(255, 255, 255, 0.40)'
      }
    },
    edgeSize: {
      none: '0',
      xsmall: baseSpacing / 4 + 'px',
      small: baseSpacing / 2 + 'px',
      medium: baseSpacing + 'px',
      large: baseSpacing * 2 + 'px',
      xlarge: baseSpacing * 4 + 'px',
      narrow: {
        none: '0',
        xsmall: baseSpacing / 8 + 'px',
        small: baseSpacing / 4 + 'px',
        medium: baseSpacing / 2 + 'px',
        large: baseSpacing + 'px',
        xlarge: baseSpacing * 2 + 'px'
      }
    },
    elevation: {
      light: {
        none: 'none',
        xsmall: '0px 1px 2px rgba(100, 100, 100, 0.50)',
        small: '0px 2px 4px rgba(100, 100, 100, 0.50)',
        medium: '0px 3px 8px rgba(100, 100, 100, 0.50)',
        large: '0px 6px 12px rgba(100, 100, 100, 0.50)',
        xlarge: '0px 8px 16px rgba(100, 100, 100, 0.50)'
      },
      dark: {
        none: 'none',
        xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
        small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
        medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
        large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
        xlarge: '0px 10px 24px rgba(255, 255, 255, 0.40)'
      }
    },
    focus: {
      border: {
        color: (0, _styledComponents.css)(['', ''], function (props) {
          return (0, _utils.colorForName)('focus', props.theme);
        }),
        width: '2px'
      }
    },
    font: {
      family: "'Work Sans', Arial, sans-serif",
      face: '\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 400;\n          src:\n            local(\'Work Sans\'),\n            local(\'WorkSans-Regular\'),\n            url("' + workSansPath + '/ElUAY9q6T0Ayx4zWzW63VJBw1xU1rKptJj_0jans920.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 600;\n          src:\n            local(\'Work Sans SemiBold\'),\n            local(\'WorkSans-SemiBold\'),\n            url("' + workSansPath + '/z9rX03Xuz9ZNHTMg1_ghGRampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Zilla Slab\';\n          font-style: normal;\n          font-weight: 400;\n          src:\n            local(\'Zilla Slab Regular\'),\n            local(\'ZillaSlab-Regular\'),\n            url("' + zillaSlabPath + '/dFa6ZfeM_74wlPZtksIFajo6_V6LVlA.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Zilla Slab\';\n          font-style: normal;\n          font-weight: 600;\n          src:\n            local(\'Zilla Slab SemiBold\'),\n            local(\'ZillaSlab-SemiBold\'),\n            url("' + zillaSlabPath + '/dFa5ZfeM_74wlPZtksIFYuUe6HOpW3pwfa0.woff2") format(\'woff2\');\n        }\n      ',
      size: '16px'
    },
    hover: {
      backgroundColor: (0, _styledComponents.css)(['', ''], function (props) {
        return props.theme.global.colors.active;
      }),
      textColor: '#000000'
    },
    input: {
      border: {
        width: '1px',
        radius: '4px',
        color: (0, _styledComponents.css)(['', ''], function (props) {
          return props.theme.global.colors.border;
        })
      },
      weight: 600
    },
    lineHeight: '24px',
    opacity: {
      strong: '0.8',
      medium: '0.4',
      weak: '0.1'
    },
    spacing: baseSpacing + 'px',
    size: {
      xxsmall: baseSpacing * 2 + 'px', // 48
      xsmall: baseSpacing * 4 + 'px', // 96
      small: baseSpacing * 8 + 'px', // 192
      medium: baseSpacing * 16 + 'px', // 384
      large: baseSpacing * 32 + 'px', // 768
      xlarge: baseSpacing * 48 + 'px', // 1152
      full: '100%',
      narrow: {
        xxsmall: baseSpacing + 'px', // 24
        xsmall: baseSpacing * 2 + 'px', // 48
        small: baseSpacing * 4 + 'px', // 96
        medium: baseSpacing * 8 + 'px', // 192
        large: baseSpacing * 16 + 'px', // 384
        xlarge: baseSpacing * 32 + 'px', // 768
        full: '100%'
      }
    }
  },
  accordion: {
    icons: {
      collapse: _grommetIcons.FormUp,
      expand: _grommetIcons.FormDown
    },
    iconColor: (0, _styledComponents.css)(['', ''], function (props) {
      return props.theme.global.colors.brand;
    })

  },
  anchor: {
    textDecoration: 'none',
    fontWeight: 600,
    color: (0, _styledComponents.css)(['', ''], function (props) {
      return props.theme.global.colors.brand;
    })
  },
  button: {
    border: {
      color: (0, _styledComponents.css)(['', ''], function (props) {
        return props.theme.global.colors.brand;
      }),
      width: borderWidth + 'px',
      radius: baseSpacing + 'px'
    },
    colors: {
      accent: (0, _styledComponents.css)(['', ''], function (props) {
        return (0, _utils.colorForName)('accent-1', props.theme);
      }),
      critical: (0, _styledComponents.css)(['', ''], function (props) {
        return props.theme.global.colors.status.critical;
      }),
      secondary: (0, _styledComponents.css)(['', ''], function (props) {
        return (0, _utils.colorForName)('neutral-2', props.theme);
      }),
      text: (0, _styledComponents.css)(['', ''], function (props) {
        return props.theme.global.colors.text;
      })
    },
    disabled: {
      opacity: 0.3
    },
    minWidth: baseSpacing * 4 + 'px',
    maxWidth: baseSpacing * 16 + 'px',
    padding: {
      vertical: baseSpacing / 2 - borderWidth + 'px',
      horizontal: baseSpacing * 2 - borderWidth + 'px'
    }
  },
  calendar: {
    small: {
      fontSize: '16px',
      lineHeight: 1.375,
      daySize: baseSpacing * 8 / 7 + 'px',
      slideDuration: '0.2s'
    },
    medium: {
      fontSize: '22px',
      lineHeight: 1.45,
      daySize: baseSpacing * 16 / 7 + 'px',
      slideDuration: '0.5s'
    },
    large: {
      fontSize: '36px',
      lineHeight: 1.11,
      daySize: baseSpacing * 32 / 7 + 'px',
      slideDuration: '0.8s'
    },
    icons: {
      previous: _grommetIcons.Previous,
      next: _grommetIcons.Next,
      small: {
        previous: _grommetIcons.FormPrevious,
        next: _grommetIcons.FormNext
      }
    }
  },
  carousel: {
    icons: {
      current: _grommetIcons.Subtract,
      next: _grommetIcons.Next,
      previous: _grommetIcons.Previous
    }
  },
  checkBox: {
    check: {
      color: (0, _styledComponents.css)(['', ''], function (props) {
        return props.theme.global.colors.brand;
      }),
      width: '4px'
    },
    border: {
      color: {
        dark: 'rgba(255, 255, 255, 0.5)',
        light: 'rgba(0, 0, 0, 0.15)'
      },
      radius: '4px',
      width: '2px'
    },
    size: baseSpacing + 'px',
    toggle: {
      color: '#d9d9d9',
      radius: baseSpacing + 'px',
      size: baseSpacing * 2 + 'px'
    }
  },
  clock: {
    analog: {
      hour: {
        color: {
          dark: (0, _styledComponents.css)(['', ''], function (props) {
            return (0, _utils.colorForName)('light-3', props.theme);
          }),
          light: (0, _styledComponents.css)(['', ''], function (props) {
            return (0, _utils.colorForName)('dark-3', props.theme);
          })
        },
        width: baseSpacing / 3 + 'px',
        size: baseSpacing + 'px',
        shape: 'round'
      },
      minute: {
        color: {
          dark: (0, _styledComponents.css)(['', ''], function (props) {
            return (0, _utils.colorForName)('light-5', props.theme);
          }),
          light: (0, _styledComponents.css)(['', ''], function (props) {
            return (0, _utils.colorForName)('dark-5', props.theme);
          })
        },
        width: baseSpacing / 6 + 'px',
        size: Math.round(baseSpacing / 2) + 'px',
        shape: 'round'
      },
      second: {
        color: {
          dark: (0, _styledComponents.css)(['', ''], function (props) {
            return (0, _utils.colorForName)('accent-2', props.theme);
          }),
          light: (0, _styledComponents.css)(['', ''], function (props) {
            return (0, _utils.colorForName)('accent-2', props.theme);
          })
        },
        width: baseSpacing / 8 + 'px',
        size: Math.round(baseSpacing / 2.666) + 'px',
        shape: 'round'
      },
      size: {
        small: baseSpacing * 3 + 'px',
        medium: baseSpacing * 4 + 'px',
        large: baseSpacing * 6 + 'px',
        xlarge: baseSpacing * 9 + 'px',
        huge: baseSpacing * 12 + 'px'
      }
    },
    digital: {
      text: {
        medium: { size: '16px', height: 1.375 },
        xsmall: { size: '12px', height: 1.5 },
        small: { size: '14px', height: 1.43 },
        large: { size: '24px', height: 1.167 },
        xlarge: { size: '32px', height: 1.1875 },
        xxlarge: { size: '48px', height: 1.125 }
      }
    }
  },
  collapsible: {
    minSpeed: 150,
    baseHeight: 500
  },
  formField: {
    border: {
      color: 'border',
      position: 'inner',
      side: 'bottom',
      error: {
        color: 'status-critical'
      }
    },
    error: { color: 'status-critical' },
    help: { color: 'dark-5' },
    label: {}
  },
  grommet: {},
  heading: {
    font: {
      family: "'Zilla Slab', 'Work Sans', Arial, sans-serif"
    },
    // maxWidth chosen to be ~50 characters wide
    // see: https://ux.stackexchange.com/a/34125
    level: {
      1: {
        medium: { size: '48px', height: 1.125, maxWidth: baseSpacing * 48 + 'px' },
        small: { size: '24px', height: 1.333, maxWidth: baseSpacing * 24 + 'px' },
        large: { size: '96px', height: 1.125, maxWidth: baseSpacing * 96 + 'px' }
      },
      2: {
        medium: { size: '36px', height: 1.23, maxWidth: baseSpacing * 36 + 'px' },
        small: { size: '18px', height: 1.333, maxWidth: baseSpacing * 18 + 'px' },
        large: { size: '48px', height: 1.125, maxWidth: baseSpacing * 48 + 'px' }
      },
      3: {
        medium: { size: '24px', height: 1.333, maxWidth: baseSpacing * 24 + 'px' },
        small: { size: '18px', height: 1.333, maxWidth: baseSpacing * 18 + 'px' },
        large: { size: '36px', height: 1.23, maxWidth: baseSpacing * 36 + 'px' }
      },
      4: {
        medium: { size: '18px', height: 1.333, maxWidth: baseSpacing * 18 + 'px' },
        small: { size: '16px', height: 1.375, maxWidth: baseSpacing * 16 + 'px' },
        large: { size: '24px', height: 1.333, maxWidth: baseSpacing * 24 + 'px' }
      }
    },
    weight: 600
  },
  icon: {
    colors: colors
  },
  iconThemes: {},
  layer: {
    backgroundColor: backgroundColor,
    border: {
      radius: '4px'
    },
    overlayBackgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  menu: {
    icons: {
      down: _grommetIcons.FormDown
    }
  },
  paragraph: {
    // maxWidth chosen to be ~50 characters wide
    // see: https://ux.stackexchange.com/a/34125
    medium: { size: '16px', height: 1.375, maxWidth: baseSpacing * 16 + 'px' },
    small: { size: '14px', height: 1.43, maxWidth: baseSpacing * 14 + 'px' },
    large: { size: '24px', height: 1.333, maxWidth: baseSpacing * 24 + 'px' },
    xlarge: { size: '32px', height: 1.1875, maxWidth: baseSpacing * 32 + 'px' }
  },
  radioButton: {
    check: {
      color: (0, _styledComponents.css)(['', ''], function (props) {
        return props.theme.global.colors.brand;
      })
    },
    border: {
      color: {
        dark: 'rgba(255, 255, 255, 0.5)',
        light: 'rgba(0, 0, 0, 0.15)'
      },
      radius: '100%',
      width: '2px'
    },
    size: baseSpacing + 'px'
  },
  rangeInput: {
    track: {
      color: (0, _styledComponents.css)(['', ''], function (props) {
        return (0, _polished.rgba)(props.theme.global.colors.text, 0.2);
      })
    }
  },
  select: {
    icons: {
      down: _grommetIcons.FormDown
    }
  },
  text: {
    medium: { size: '16px', height: 1.375 },
    xsmall: { size: '12px', height: 1.5 },
    small: { size: '14px', height: 1.43 },
    large: { size: '24px', height: 1.167 },
    xlarge: { size: '32px', height: 1.1875 },
    xxlarge: { size: '48px', height: 1.125 }
  },
  video: {
    captions: {
      background: (0, _polished.rgba)(0, 0, 0, 0.7)
    },
    icons: {
      closedCaption: _grommetIcons.ClosedCaption,
      configure: _grommetIcons.Actions,
      fullScreen: _grommetIcons.Expand,
      pause: _grommetIcons.Pause,
      play: _grommetIcons.Play,
      reduceVolume: _grommetIcons.VolumeLow,
      volume: _grommetIcons.Volume
    }
  },
  worldMap: {
    continent: {
      active: '8px',
      base: '6px'
    },
    place: {
      active: '20px',
      base: '8px'
    }
  }
});
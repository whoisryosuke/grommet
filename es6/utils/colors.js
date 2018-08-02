var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

export var colorForName = function colorForName(name, theme) {
  var color = theme.global.colors[name];
  if (color) {
    return color;
  }

  var _name$split = name.split('-'),
      kind = _name$split[0],
      index = _name$split[1];

  var colorSet = theme.global.colors[kind];
  if (Array.isArray(colorSet)) {
    color = colorSet[index - 1];
  } else if ((typeof colorSet === 'undefined' ? 'undefined' : _typeof(colorSet)) === 'object') {
    color = colorSet[index];
  } else if (typeof colorSet === 'string') {
    color = colorSet;
  } else {
    color = name;
  }
  return color;
};

function parseHexToRGB(color) {
  // https://stackoverflow.com/a/42429333
  return color.match(/[A-Za-z0-9]{2}/g).map(function (v) {
    return parseInt(v, 16);
  });
}

var canExtractRGBArray = function canExtractRGBArray(color) {
  return (/^#/.test(color) || /^rgb/.test(color)
  );
};

function getRGBArray(color) {
  if (/^#/.test(color)) {
    return parseHexToRGB(color);
  } else if (/^rgb/.test(color)) {
    return color.match(/rgba?\((\s?[0-9]*\s?),(\s?[0-9]*\s?),(\s?[0-9]*\s?).*?\)/).splice(1);
  }
  return color;
}

export var colorIsDark = function colorIsDark(color) {
  var _getRGBArray = getRGBArray(color),
      red = _getRGBArray[0],
      green = _getRGBArray[1],
      blue = _getRGBArray[2];
  // http://www.had2know.com/technology/
  //  color-contrast-calculator-web-design.html


  var brightness = (299 * red + 587 * green + 114 * blue) / 1000;
  return brightness < 125;
};

export var getRGBA = function getRGBA(color, opacity) {
  if (color && canExtractRGBArray(color)) {
    var _getRGBArray2 = getRGBArray(color),
        red = _getRGBArray2[0],
        green = _getRGBArray2[1],
        blue = _getRGBArray2[2];

    return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + (opacity || 1) + ')';
  }
  return undefined;
};

export var backgroundIsDark = function backgroundIsDark(background, theme) {
  var dark = void 0;
  if (background) {
    if ((typeof background === 'undefined' ? 'undefined' : _typeof(background)) === 'object') {
      if (background.dark !== undefined) {
        dark = background.dark;
      } else if (background.color && (
      // weak opacity means we keep the existing darkness
      !background.opacity || background.opacity !== 'weak')) {
        var color = colorForName(background.color, theme);
        if (color) {
          dark = colorIsDark(color);
        }
      }
    } else {
      var _color = colorForName(background, theme);
      if (_color) {
        dark = colorIsDark(_color);
      }
    }
  }
  return dark;
};

export default { backgroundIsDark: backgroundIsDark, colorForName: colorForName, colorIsDark: colorIsDark, getRGBA: getRGBA };
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _Box = require('../Box');

var _Button = require('../Button');

var _Menu = require('../Menu');

var _Meter = require('../Meter');

var _Stack = require('../Stack');

var _Text = require('../Text');

var _hocs = require('../hocs');

var _utils = require('../../utils');

var _StyledVideo = require('./StyledVideo');

var _StyledVideo2 = _interopRequireDefault(_StyledVideo);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Split the volume control into 6 segments. Empirically determined.
var VOLUME_STEP = 0.166667;

var formatTime = function formatTime(time) {
  var minutes = Math.round(time / 60);
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  var seconds = Math.round(time) % 60;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return minutes + ':' + seconds;
};

var Video = function (_Component) {
  _inherits(Video, _Component);

  function Video() {
    var _temp, _this, _ret;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      captions: [],
      mouseActive: false
    }, _this.hasPlayed = false, _this.injectUpdateVideoEvents = function () {
      var videoEvents = ['onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting'];

      return videoEvents.reduce(function (previousValue, currentValue) {
        var nextValue = _extends({}, previousValue);
        nextValue[currentValue] = function (e) {
          if (currentValue in _this.props && typeof _this.props[currentValue] === 'function') {
            _this.props[currentValue](e);
          }
          _this.update();
        };

        return nextValue;
      }, {});
    }, _this.update = function () {
      var video = (0, _reactDom.findDOMNode)(_this.videoRef);
      // Set flag for Video first play
      if (!_this.hasPlayed && !video.paused && !video.loading || video.currentTime) {
        _this.hasPlayed = true;
      }

      var interacting = _this.state.interacting;
      if (video.ended) {
        interacting = false;
      }

      _this.setState({
        duration: video.duration,
        currentTime: video.currentTime,
        buffered: video.buffered,
        paused: video.paused,
        muted: video.muted,
        volume: video.volume,
        ended: video.ended,
        readyState: video.readyState,
        interacting: interacting,
        // computed values
        hasPlayed: _this.hasPlayed,
        playing: !video.paused && !video.loading,
        percentageBuffered: video.buffered.length && video.buffered.end(video.buffered.length - 1) / video.duration * 100,
        percentagePlayed: video.currentTime / video.duration * 100,
        loading: video.readyState < video.HAVE_ENOUGH_DATA
      });
    }, _this.play = function () {
      (0, _reactDom.findDOMNode)(_this.videoRef).play();
    }, _this.pause = function () {
      (0, _reactDom.findDOMNode)(_this.videoRef).pause();
    }, _this.scrub = function (event) {
      var duration = _this.state.duration;

      if (_this.scrubberRef) {
        var scrubberRect = (0, _reactDom.findDOMNode)(_this.scrubberRef).getBoundingClientRect();
        var percent = (event.clientX - scrubberRect.left) / scrubberRect.width;
        _this.setState({ scrubTime: duration * percent });
      }
    }, _this.seek = function (event) {
      var duration = _this.state.duration;

      if (_this.scrubberRef) {
        var scrubberRect = (0, _reactDom.findDOMNode)(_this.scrubberRef).getBoundingClientRect();
        var percent = (event.clientX - scrubberRect.left) / scrubberRect.width;
        (0, _reactDom.findDOMNode)(_this.videoRef).currentTime = duration * percent;
      }
    }, _this.unmute = function () {
      (0, _reactDom.findDOMNode)(_this.videoRef).muted = false;
    }, _this.mute = function () {
      (0, _reactDom.findDOMNode)(_this.videoRef).muted = true;
    }, _this.louder = function () {
      (0, _reactDom.findDOMNode)(_this.videoRef).volume += VOLUME_STEP;
    }, _this.quieter = function () {
      (0, _reactDom.findDOMNode)(_this.videoRef).volume -= VOLUME_STEP;
    }, _this.fullscreen = function () {
      var video = (0, _reactDom.findDOMNode)(_this.videoRef);
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else {
        console.warn('Your browser doesn\'t support fullscreen.');
      }
    }, _this.interactionStart = function () {
      _this.setState({ interacting: true });
      clearTimeout(_this.interactionTimer);
      _this.interactionTimer = setTimeout(_this.interactionStop, 3000);
    }, _this.interactionStop = function () {
      var focus = _this.state.focus;

      if (!focus && !_this.unmounted) {
        _this.setState({ interacting: false });
      }
    }, _this.restate = function () {
      var _this$state = _this.state,
          captions = _this$state.captions,
          height = _this$state.height,
          width = _this$state.width;

      var video = (0, _reactDom.findDOMNode)(_this.videoRef);

      if (video.videoHeight) {
        // set the size based on the video aspect ratio
        var rect = video.getBoundingClientRect();
        var ratio = rect.width / rect.height;
        var videoRatio = video.videoWidth / video.videoHeight;
        if (videoRatio > ratio) {
          var nextHeight = rect.width / videoRatio;
          if (nextHeight !== height) {
            _this.setState({ height: nextHeight, width: undefined });
          }
        } else {
          var nextWidth = rect.height * videoRatio;
          if (nextWidth !== width) {
            _this.setState({ height: undefined, width: nextWidth });
          }
        }
      }

      // remember the state of the text tracks for subsequent rendering
      var textTracks = video.textTracks;
      if (textTracks.length > 0) {
        if (textTracks.length === 1) {
          var active = textTracks[0].mode === 'showing';
          if (!captions || !captions[0] || captions[0].active !== active) {
            _this.setState({ captions: [{ active: active }] });
          }
        } else {
          var nextCaptions = [];
          var set = false;
          for (var i = 0; i < textTracks.length; i += 1) {
            var track = textTracks[i];
            var _active = track.mode === 'showing';
            nextCaptions.push({ label: track.label, active: _active });
            if (!captions || !captions[i] || captions[i].active !== _active) {
              set = true;
            }
          }
          if (set) {
            _this.setState({ captions: nextCaptions });
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Video.prototype.componentWillMount = function componentWillMount() {
    this.update = (0, _utils.throttle)(this.update, 100, this);
    this.mediaEventProps = this.injectUpdateVideoEvents();
  };

  Video.prototype.componentDidMount = function componentDidMount() {
    var mute = this.props.mute;

    var video = (0, _reactDom.findDOMNode)(this.videoRef);

    if (mute) {
      this.mute();
    }

    // hide all captioning to start with
    var textTracks = video.textTracks;
    for (var i = 0; i < textTracks.length; i += 1) {
      textTracks[i].mode = 'hidden';
    }

    this.restate();
  };

  Video.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.autoPlay && !this.props.autoPlay) {
      // Caller wants the video to play now.
      this.play();
    }
    // Dynamically modifying a source element and its attribute when
    // the element is already inserted in a video or audio element will
    // have no effect.
    // From HTML Specs:
    // https://html.spec.whatwg.org/multipage/embedded-content.html
    //   #the-source-element
    // Using forceUpdate to force redraw of video when receiving new <source>
    this.forceUpdate();
  };

  Video.prototype.componentDidUpdate = function componentDidUpdate() {
    this.restate();
  };

  Video.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;
  };

  Video.prototype.showCaptions = function showCaptions(index) {
    var textTracks = (0, _reactDom.findDOMNode)(this.videoRef).textTracks;
    for (var i = 0; i < textTracks.length; i += 1) {
      textTracks[i].mode = i === index ? 'showing' : 'hidden';
    }
    // Using forceUpdate to force redraw of controls when changing captions
    this.forceUpdate();
  };

  Video.prototype.renderControls = function renderControls() {
    var _this2 = this;

    var _props = this.props,
        controls = _props.controls,
        theme = _props.theme;
    var _state = this.state,
        captions = _state.captions,
        currentTime = _state.currentTime,
        duration = _state.duration,
        interacting = _state.interacting,
        percentagePlayed = _state.percentagePlayed,
        playing = _state.playing,
        scrubTime = _state.scrubTime,
        volume = _state.volume;

    var over = controls === 'over';
    var background = over ? { color: 'dark-2', opacity: 'strong' } : undefined;
    var iconColor = over ? 'light-1' : undefined;

    var formattedTime = formatTime(scrubTime || currentTime || duration);

    var Icons = {
      ClosedCaption: theme.video.icons.closedCaption,
      Configure: theme.video.icons.configure,
      FullScreen: theme.video.icons.fullScreen,
      Pause: theme.video.icons.pause,
      Play: theme.video.icons.play,
      ReduceVolume: theme.video.icons.reduceVolume,
      Volume: theme.video.icons.volume
    };

    var captionControls = captions.map(function (caption) {
      return {
        icon: caption.label ? undefined : _react2.default.createElement(Icons.ClosedCaption, { color: iconColor }),
        label: caption.label,
        active: caption.active,
        onClick: function onClick() {
          return _this2.showCaptions(caption.active ? -1 : 0);
        }
      };
    });

    return _react2.default.createElement(
      _StyledVideo.StyledVideoControls,
      {
        over: over,
        active: !this.hasPlayed || controls === 'below' || over && interacting
      },
      _react2.default.createElement(
        _Box.Box,
        {
          direction: 'row',
          align: 'center',
          justify: 'between',
          background: background
        },
        _react2.default.createElement(_Button.Button, {
          icon: playing ? _react2.default.createElement(Icons.Pause, { color: iconColor }) : _react2.default.createElement(Icons.Play, { color: iconColor }),
          hoverIndicator: 'background',
          onClick: playing ? this.pause : this.play
        }),
        _react2.default.createElement(
          _Box.Box,
          { direction: 'row', align: 'center', flex: true },
          _react2.default.createElement(
            _Box.Box,
            { flex: true },
            _react2.default.createElement(
              _Stack.Stack,
              null,
              _react2.default.createElement(_Meter.Meter, {
                'aria-label': 'Video progress',
                background: over ? 'dark-3' : undefined,
                size: 'full',
                thickness: 'small',
                values: [{ value: percentagePlayed || 0 }]
              }),
              _react2.default.createElement(_StyledVideo.StyledVideoScrubber, {
                ref: function ref(_ref) {
                  _this2.scrubberRef = _ref;
                },
                tabIndex: 0,
                role: 'button',
                value: scrubTime ? Math.round(scrubTime / duration * 100) : undefined,
                onMouseMove: this.scrub,
                onMouseLeave: function onMouseLeave() {
                  return _this2.setState({ scrubTime: undefined });
                },
                onClick: this.seek,
                theme: this.props.theme
              })
            )
          ),
          _react2.default.createElement(
            _Box.Box,
            { pad: { horizontal: 'small' } },
            _react2.default.createElement(
              _Text.Text,
              { margin: 'none' },
              formattedTime
            )
          )
        ),
        _react2.default.createElement(_Menu.Menu, {
          icon: _react2.default.createElement(Icons.Configure, { color: iconColor }),
          dropAlign: { bottom: 'top', right: 'right' },
          dropBackground: background,
          items: [{
            icon: _react2.default.createElement(Icons.Volume, { color: iconColor }),
            onClick: volume <= 1 - VOLUME_STEP ? this.louder : undefined,
            close: false
          }, {
            icon: _react2.default.createElement(Icons.ReduceVolume, { color: iconColor }),
            onClick: volume >= VOLUME_STEP ? this.quieter : undefined,
            close: false
          }].concat(captionControls, [{
            icon: _react2.default.createElement(Icons.FullScreen, { color: iconColor }),
            onClick: this.fullscreen
          }])
        })
      )
    );
  };

  Video.prototype.render = function render() {
    var _this3 = this;

    var _props2 = this.props,
        autoPlay = _props2.autoPlay,
        children = _props2.children,
        controls = _props2.controls,
        loop = _props2.loop,
        rest = _objectWithoutProperties(_props2, ['autoPlay', 'children', 'controls', 'loop']);

    var _state2 = this.state,
        height = _state2.height,
        width = _state2.width;


    var controlsElement = controls ? this.renderControls() : undefined;

    var mouseEventListeners = void 0;
    if (controls === 'over') {
      mouseEventListeners = {
        onMouseEnter: this.interactionStart,
        onMouseMove: this.interactionStart,
        onTouchStart: this.interactionStart
      };
    }

    var style = void 0;
    if (rest.fit === 'contain' && controls === 'over') {
      // constrain the size to fit the aspect ratio so the controls overlap correctly
      if (width) {
        style = { width: width };
      } else if (height) {
        style = { height: height };
      }
    }

    return _react2.default.createElement(
      _StyledVideo.StyledVideoContainer,
      _extends({}, mouseEventListeners, { style: style }),
      _react2.default.createElement(
        _StyledVideo2.default,
        _extends({
          ref: function ref(_ref2) {
            _this3.videoRef = _ref2;
          }
        }, rest, this.mediaEventProps, {
          autoPlay: autoPlay || false,
          loop: loop || false
        }),
        children
      ),
      controlsElement
    );
  };

  return Video;
}(_react.Component);

Video.contextTypes = {
  grommet: _propTypes2.default.object,
  theme: _propTypes2.default.object,
  router: _propTypes2.default.any
};
Video.defaultProps = {
  controls: 'over'
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Video);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(Video);
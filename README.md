# videojs-replay

[![Current version](https://img.shields.io/npm/v/videojs-replay.svg)](https://www.npmjs.com/package/videojs-replay) [![Dependencies](https://img.shields.io/versioneye/d/nodejs/videojs-replay.svg)](https://www.versioneye.com/nodejs/videojs-replay)

A [Video.js](https://www.videojs.com) plugin that turns the play button into a replay button at the end of playback

## Installation

```sh
npm install --save videojs-replay
```

## Usage

To include videojs-replay on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-replay.min.js"></script>
<script>
  var player = videojs('my-video');

  player.replayButton();
</script>
```

### Browserify

When using with Browserify, install videojs-replay via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-replay');

var player = videojs('my-video');

player.replayButton();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-replay'], function(videojs) {
  var player = videojs('my-video');

  player.replayButton();
});
```

## License

MIT or Apache-2.0. Copyright (c) Derk-Jan Hartman


[videojs]: http://videojs.com/

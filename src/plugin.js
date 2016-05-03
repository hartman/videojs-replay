import videojs from 'video.js';

// Default options for the plugin.
const defaults = {};

const addReplayClass = (player) => {
  if (player.duration() !== Infinity) {
    player.addClass('vjs-replay')
      .getChild('controlBar')
      .getChild('playToggle')
      .controlText(player.localize('Replay'));
  }
};

const removeReplayClass = (player) => {
  let controlLabel;

  if (!player.hasClass('vjs-replay')) {
    return;
  }

  // Reset the control's label
  if (player.paused()) {
    controlLabel = player.localize('Play');
  } else {
    controlLabel = player.localize('Pause');
  }
  player.removeClass('vjs-replay')
    .getChild('controlBar')
    .getChild('playToggle')
    .controlText(controlLabel);
};

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
const onPlayerReady = (player, options) => {
  player.on('ended', () => {
    addReplayClass(player);
  });
  player.on('play', () => {
    removeReplayClass(player);
  });
  player.on('seeking', () => {
    removeReplayClass(player);
  });
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function replayButton
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const replayButton = function(options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
videojs.plugin('replayButton', replayButton);

// Include the version number.
replayButton.VERSION = '__VERSION__';

export default replayButton;

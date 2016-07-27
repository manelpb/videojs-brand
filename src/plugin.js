import videojs from 'video.js';

// Default options for the plugin.
const defaults = {
  image: "/logo-example.png",
  title: "Logo Title",
  destination: "http://www.google.com",
  destinationTarget: "_blank"
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
	let containerElement = document.createElement("div");
	containerElement.className = "vjs-brand-container";

	let linkElement = document.createElement("a");
	linkElement.className = "vjs-brand-container-link";
	linkElement.setAttribute("href", options.destination || defaults.destination);
	linkElement.setAttribute("title", options.title || defaults.title);
	linkElement.setAttribute("target", options.destinationTarget || defaults.destinationTarget)

	let imageElement = document.createElement("img");
	imageElement.src = options.image || defaults.image;

	linkElement.appendChild(imageElement);
	containerElement.appendChild(linkElement);

	player.controlBar.el().insertBefore(containerElement, player.controlBar.fullscreenToggle.el());
  player.addClass('vjs-brand');
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function brand
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const brand = function(options) {
  this.ready(() => {
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
videojs.plugin('brand', brand);

// Include the version number.
brand.VERSION = '__VERSION__';

export default brand;

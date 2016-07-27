# videojs-brand

Simple plugin that adds your logo brand in the player controls

![alt tag](https://raw.githubusercontent.com/manelpb/videojs-brand/master/screenshot.png)

## Installation

```sh
npm install --save videojs-brand
```

## Usage

To include videojs-brand on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-brand.min.js"></script>
<script>
  var player = videojs('my-video');
  player.brand({
  	image: "/logo-example.png",
    title: "Logo Title",
    destination: "http://www.google.com",
    destinationTarget: "_top"
  });
</script>
```

## License

MIT. Copyright (c) Emmanuel Alves / http://github.com/manelpb


[videojs]: http://videojs.com/

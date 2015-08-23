define(function() {
  function SwampThing(canvas, x, y) {
    var assets = ['/img/st_r0.png'];
    this.canvas = canvas;
    this.x = x || 0;
    this.y = y || 0;
    this.frames = [];
    this.frameIndex = 0;

    assets.forEach(function (asset) {
      var img = new Image();
      img.src = asset;
      this.frames.push(img);
    }, this);
  }

  SwampThing.prototype = {
    update(time) {
    },

    render(context) {
      context.drawImage(this.frames[this.frameIndex], this.x, this.y);
    }
  };

  return SwampThing;
});

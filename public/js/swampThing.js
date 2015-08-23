define(function() {
  function SwampThing(canvas, x, y) {
    var assets = ['/img/st_r0.png'];
    this.canvas = canvas;
    this.x = x || 0;
    this.y = y || undefined;
    this.frames = [];
    this.frameIndex = 0;
    this.movement = 'still';
    this.speed = 3;
    this.imagesLoaded = false;

    window.test = this;

    assets.forEach(function (asset, i) {
      var img = new Image();
      img.src = asset;
      img.onload = this.setImagesLoaded.bind(this, true, i);
      this.frames.push(img);
    }, this);
  }

  SwampThing.prototype = {
    init() {
    },

    update(time) {
      this.updateMovement();
    },

    render(context) {
      if (this.imagesLoaded) {
        context.drawImage(this.frames[this.frameIndex], this.x, this.y);
      }
    },

    moveLeft() {
      this.movement = 'left';
    },

    moveRight() {
      this.movement = 'right';
    },

    moveStill() {
      this.movement = 'still';
    },

    updateMovement() {
      switch(this.movement) {
        case 'left':
          this.x -= this.speed;
          break;
        case 'right':
          this.x += this.speed;
          break;
        case 'still':
          break;
      }
    },

    setImagesLoaded(status) {
      this.imagesLoaded = Boolean(status);
      this.y = typeof this.y === 'number' ? this.y : this.getSwampThingStartingPointYAxis();
    },

    getSwampThingStartingPointYAxis: function() {
      var y;
      this.frames.forEach(function (frame) {
        if (frame.complete) {
          y = this.canvas.height - frame.height;
        }
      }, this);
      return y;
    }
  };

  return SwampThing;
});

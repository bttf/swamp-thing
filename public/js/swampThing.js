define(function() {
  function SwampThing(canvas, x, y) {
    var assets = ['/img/st_r0.png',
                  '/img/st_r1.png',
                  '/img/st_r2.png',
                  '/img/st_l0.png',
                  '/img/st_l1.png',
                  '/img/st_l2.png'];
    this.canvas = canvas;
    this.x = x || 0;
    this.y = y || undefined;
    this.frames = [];
    this.frameIndex = 0;
    this.movement = 'still';
    this.speed = 2;
    this.imagesLoaded = false;
    this.lastTick = 0;
    this.fps = 1000 / 4;

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
      if (time > this.lastTick + this.fps) {
        this.animate();
        this.lastTick = time;
      }
      this.move();
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

    move() {
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

    animate() {
      switch(this.movement) {
        case 'left':
          this.frameIndex = ++this.frameIndex % 3 + 3;
          break;
        case 'right':
          this.frameIndex = ++this.frameIndex % 3;
          break;
        case 'still':
          this.frameIndex = this.frameIndex < 3 ? 0 : 3;
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
          y = this.canvas.height - frame.height - 125;
        }
      }, this);
      return y;
    }
  };

  return SwampThing;
});

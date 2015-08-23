define(function() {
  function VelvetRope(canvas, swampThing) {
    var assets = ['/img/velvetrope01.png'];
    this.canvas = canvas;
    this.frames = [];
    this.cols = 0;
    this.rows = 0;
    this.imagesLoaded = false;
    this.st = swampThing;

    assets.forEach(function (asset) {
      var img = new Image();
      img.src = asset;
      img.onload = this.setImagesLoaded.bind(this);
      this.frames.push(img);
    }, this);
  }

  VelvetRope.prototype = {
    init() {
    },

    update() {
    },

    render(context) {
      var y = this.canvas.height - this.st.frames[0].height - 125 + (this.st.frames[0].height - this.frames[0].height);
      for (var colIndex = 0; colIndex < this.cols; colIndex++) {
        context.drawImage(this.frames[0], colIndex * this.frames[0].width, y);
      }
      Array(this.rows).forEach(function(undefined, rowIndex) {
        Array(this.cols).forEach(function(undefined, colIndex) {
        });
      });
    },

    setImagesLoaded() {
      this.imagesLoaded = true;
      this.setRowsAndCols();
    },

    setRowsAndCols() {
      this.cols = Math.ceil(this.canvas.width / this.frames[0].width);
    },
  };

  return VelvetRope;
});

define(function() {
  function Floor(canvas) {
    var assets = ['/img/floor01.png'];
    this.canvas = canvas;
    this.frames = [];
    this.cols = 0;
    this.rows = 0;
    this.imagesLoaded = false;

    assets.forEach(function (asset) {
      var img = new Image();
      img.src = asset;
      img.onload = this.setImagesLoaded.bind(this);
      this.frames.push(img);
    }, this);
  }

  Floor.prototype = {
    init() {
    },

    update() {
    },

    render(context) {
      var y = this.canvas.height - this.canvas.height / 4;
      for (var rowIndex = 0; rowIndex < this.rows; rowIndex++) {
        for (var colIndex = 0; colIndex < this.cols; colIndex++) {
          context.drawImage(this.frames[0], colIndex * this.frames[0].width, y + (this.frames[0].height - 10) * rowIndex);
        }
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
      this.rows = Math.ceil((this.canvas.height / 3) / this.frames[0].height);
    },
  };

  return Floor;
});

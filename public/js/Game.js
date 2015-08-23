define(['./swampThing', './floor', './velvetRope'], function(SwampThing, Floor, VelvetRope) {
  function Game(canvas) {
    this.canvas = canvas;
    this.entities = [];
    this.st = new SwampThing(canvas);
    this.floor = new Floor(canvas);
    this.velvetRope = new VelvetRope(canvas, this.st);
  }

  Game.prototype = {
    init(canvas) {
      this.entities.push(this.floor, this.st, this.velvetRope);
      this.entities.forEach(function (entity) {
        entity.init();
      });
    },

    update(time) {
      this.entities.forEach(function (entity) {
        entity.update(time);
      });
    },

    render(context) {
      this.entities.forEach(function (entity) {
        entity.render(context);
      });
    },

    keyDown(e) {
      e.preventDefault();
      switch(e.keyCode) {
        case 37:
          this.st.moveLeft();
          break;
        case 39:
          this.st.moveRight();
          break;
      }
    },

    keyUp(e) {
      e.preventDefault();
      switch(e.keyCode) {
        case 37:
        case 39:
          this.st.moveStill();
          break;
      }
    },
  };

  return Game;
});

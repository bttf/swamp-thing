define(['./swampThing'], function(SwampThing) {
  function Game(canvas) {
    this.canvas = canvas;
    this.entities = [];
    this.st = new SwampThing(canvas);
  }

  Game.prototype = {
    init(canvas) {
      this.st.init();
      this.entities.push(this.st);
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
      switch(e.keyCode) {
        case 37:
        case 39:
          this.st.moveStill();
          break;
      }
      e.preventDefault();
    },
  };

  return Game;
});

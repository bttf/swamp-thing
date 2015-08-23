define(['./swampThing'], function(SwampThing) {
  function Game() {
    this.entities = [];
  }

  Game.prototype = {
    init(canvas) {
      this.st = new SwampThing(canvas);
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
    }
  };

  return Game;
});

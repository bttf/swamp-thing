require(['js/game'], function (Game) {
  // polyfill courtesy of paul irish
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(/* function */ callback, /* DOMElement */ element){
              window.setTimeout(callback, 1000 / 60);
            };
    })();

  var canvas;
  var context;
  var g;

  init();
  loop(0);

  function init() {
    console.log('debug: init');
    init_browser();
    g = new Game(canvas);
    g.init(canvas);
  };

  function init_browser() {
    console.log('debug: init_browser');
    var body = document.getElementsByTagName("body")[0];
    canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = window.innerWidth - 15;
    canvas.height = window.innerHeight - 25;
    body.appendChild(canvas);
    context = canvas.getContext('2d');
    addEventListeners(body);
  };

  function addEventListeners(body) {
    body.addEventListener("keydown", keyDown, false);
    body.addEventListener("keyup", keyUp, false);

    // body.addEventListener("keypress", g.keyPress, false);
    // body.addEventListener("mousedown", mouse_down, false);
    // body.addEventListener("mouseup", mouse_up, false);
    // body.addEventListener("mousemove", mouse_move, false);
  };

  function keyDown(e) {
    g.keyDown(e);
  }

  function keyUp(e) {
    g.keyUp(e);
  }

  function loop(time) {
    requestAnimFrame(loop);
    context.clearRect(0, 0, canvas.width, canvas.height);
    update(time);
    render(context);
  };

  function update(time) {
    g.update(time);
  };

  function render(context) {
    g.render(context);
  };
});


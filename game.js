createjs.Ticker.addEventListener('tick',tick);

function init(){
  stage = new createjs.Stage('cnvs');  
  player = new Player;
}


function tick(){
  player.update();
  stage.update();
}

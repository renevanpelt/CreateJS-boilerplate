var GRAVITY = 1.81;

createjs.Ticker.addEventListener('tick',tick);

function init(){
  stage = new createjs.Stage('cnvs');  
  player = new Player;
}


function tick(){
  player.update();
  stage.update();

  if(keyObject.up ){
    player.controlHandler('up');

  }
  if(keyObject.down){

    player.controlHandler('down');

  }
  if(keyObject.left){

    player.controlHandler('left');
  }
  if(keyObject.right){

    player.controlHandler('right');
  }

}

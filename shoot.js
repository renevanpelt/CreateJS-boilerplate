/**
 * Created by René on 17-12-2014.
 */

var Bullet = function(position,speed){
    this.live = true;
    this.easelShape = new createjs.Shape();
    this.acceleration = new Vector2D(0,0);
    this.position = position; // Vector2D object
    this.speed= speed; // Vector2D object
    this.easelShape.graphics.beginFill("#BCBCBC").drawCircle(this.position.x,this.position.y,5);
    stage.addChild(this.easelShape);
    console.log(this.position);
    console.log(player.position);
};

Bullet.prototype.update = function(){
    if(this.position.y > 300){
        this.live = false;
    }
    this.speed.add(this.acceleration);
    this.position.add(this.speed);
    this.easelShape.x = this.position.x;
    this.easelShape.y = this.position.y;


};
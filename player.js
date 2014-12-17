Player = function(width, height, mass) {
  // easelShape is the Shape object provided by easeljs. It contains the graphics object.
  this.easelShape = new createjs.Shape();
  this.bullets = [];
  this.jumping=false;
  // Define the graphics, this should be made generic 
  // in a later stage, so do that Wiebe.
  this.grounded = false;
  this.mass = mass || 1;
  this.height = height || 40;
  this.width = width || 25;
  this.speed = new Vector2D();
  this.position = new Vector2D(30,30);
  this.acceleration = new Vector2D(0,GRAVITY);
  this.force = new Vector2D(0,0);
  this.easelShape.graphics.beginFill("#BCBCBC").drawRect(0,0,this.width,this.height);

  stage.addChild(this.easelShape);
};

Player.prototype.shoot = function(){

  this.bullets.push(new Bullet(new Vector2D(this.position.x,this.position.y),new Vector2D(0,0)));



};

Player.prototype.controlHandler = function(key){

  // Just for testing the eventlisteners in controls.js
  if(key == 'up'){
    if(this.grounded==true) {
      this.speed.y += -25;
    }
  }
  if(key == 'down'){
    this.position.y += 5;
  }
  if(key == 'left'){
    this.position.x += -15;
  }
  if(key == 'right'){
    this.position.x += 15;
  }

};


Player.prototype.update = function(){

  for(i=0;i<this.bullets.length;i++){
    this.bullets[i].update();
  }

  //this.easelShape.rotation += 3;
  // Update the player object
  this.speed.add(this.acceleration);
  this.position.add(this.speed);

  if(this.position.y >= 300 - this.height){
    if(this.grounded == false){
      this.grounded = true;
      this.acceleration.y = 0;
    }
    this.position.y = 300-this.height;
    this.speed.y = 0;

  } else {
    if(this.grounded == true){
      this.grounded = false;
    }
    this.acceleration.y = GRAVITY;
  }

  // The actual createjs object needs to be updated
  this.easelShape.x = this.position.x;
  this.easelShape.y = this.position.y;

}

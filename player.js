Player = function() {
  // easelShape is the Shape object provided by easeljs. It contains the graphics object.
  this.easelShape = new createjs.Shape(); 

  // Define the graphics, this should be made generic 
  // in a later stage, so do that Wiebe.

  this.easelShape.graphics.beginFill("#303030").drawRect(10,10,40,40);


  this.speed = new Vector2D();
  this.position = new Vector2D(30,30);
  this.acceleration = new Vector2D();

  stage.addChild(this.easelShape);
}

Player.prototype.update = function(){
  
  // Just for testing the eventlisteners in controls.js
  if(keyObject.up){
	  this.position.y += -5;
  }
  if(keyObject.down){
	  this.position.y += 5;
  }
  if(keyObject.left){
	  this.position.x += -5;
  }
  if(keyObject.right){
	  this.position.x += 5;
  }
  
  // Update the player object
  this.speed.addV(this.acceleration);
  this.position.addV(this.speed);

  

  // The actual createjs object needs to be updated
  this.easelShape.x = this.position.x;
  this.easelShape.y = this.position.y;

}

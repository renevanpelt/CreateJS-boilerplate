
/*
@param owner: The one who shot this bullet, e.g. should not be hit by it themselves for instance.
*/
Bullet = function(game, x, y, owner, speed, angle){
	//Call parent constructor
	Phaser.Sprite.call(this, game, x, y, 'bullet' );
	
	game.add.existing(this);//Add object to game.


	//Object Properties
	this.deathTimer = game.time.now + Bullet.lifeSpan;

	//Physics
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.anchor.setTo(0.5, 0.5);

	//Shoot bullet on creation.
	game.physics.arcade.velocityFromAngle(angle, speed, this.body.velocity);

	//Kill if leaving the game
	this.outOfBoundsKill = true;
	this.checkWorldBounds = true;

	this.body.bounce = new Phaser.Point(Bullet.reboundEnergy, Bullet.reboundEnergy);
	this.body.drag = new Phaser.Point(Bullet.drag, Bullet.drag);

	//If made on a place where the bullet already overlaps with a solid object, destroy it right away. (Otherwise it will fly through walls)
	if(game.physics.arcade.collide(this, layer)){
		this.destroy();

	}
}

Bullet.reboundEnergy = 0.5;
Bullet.drag = 400;
Bullet.lifeSpan = 2000;

Bullet.prototype = Object.create(Phaser.Sprite.prototype);

Bullet.prototype.update = function(){

	 game.physics.arcade.collide(this, layer);//TODO: Make 'layer' more modular. Pass to constructor or something.

	 if(this.deathTimer - game.time.now < 1){
	 	this.destroy();//Delete this object from the game
	 }else{
	 	this.alpha = (this.deathTimer - game.time.now)/Bullet.lifeSpan; //Fade out bullet.
	 }

}
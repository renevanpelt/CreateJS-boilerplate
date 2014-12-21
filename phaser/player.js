


Player = function(game, x, y){


	//Call parent constructor
	Phaser.Sprite.call(this, game, x, y, 'player' );
	
	game.add.existing(this);//Add player to game.


	//Player Properties
	this.facing = 'left';
	this.isIdle = false;
	this.jumpTimer = 0;
	this.shootTimer = 0;


	//Jump sound
	this.jumpsound = game.add.audio('jump');
	this.shootsound = game.add.audio('shoot');


	//Physics
	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.anchor.setTo(0.5, 0.5);

    this.body.bounce.y = Player.bouncyness;
    this.body.collideWorldBounds = true;

    //Collision body size is different from sprite size.
    this.body.setSize(8, 16, 0, 16);

    //Animations
    this.animations.add('left', [0, 1, 2, 3], 10, true);
    this.animations.add('turn', [4], 20, true);
    this.animations.add('right', [5, 6, 7, 8], 10, true);



} 
Player.prototype = Object.create(Phaser.Sprite.prototype);


//Class Constants
Player.horizontalspeed = 400;
Player.jumpspeed = 550;
Player.bouncyness = 0; //between 0 - 1
Player.jumpCooldown = 750;
Player.shootCooldown = 300;


//Override update function to incorporate controls.
Player.prototype.update = function(){

	this.body.velocity.x = 0; //Force stiff movement by setting velocity to 0 at begin of each update.

    if (controls['left'].isDown)
    {
        this.body.velocity.x = -Player.horizontalspeed;

        if (this.facing != 'left')
        {
            this.animations.play('left');
            this.facing = 'left';
        }
    }
    else if (controls['right'].isDown)
    {
        this.body.velocity.x = Player.horizontalspeed;

        if (this.facing != 'right')
        {
            this.animations.play('right');
            this.facing = 'right';
        }
    }
    else
    {
        if (!this.isIdle)
        {
            this.animations.stop();

            if (this.facing == 'left')
            {
                this.frame = 0;
            }
            else
            {
                this.frame = 5;
            }

            this.isIdle;
        }
    }
    
    if (controls['jump'].isDown && this.body.onFloor() && game.time.now > this.jumpTimer)
    {
        this.body.velocity.y = -Player.jumpspeed;
        this.jumpTimer = game.time.now + Player.jumpCooldown;

        this.jumpsound.play();
    }


    //Shoot
    if(controls['shoot'].isDown && game.time.now > this.shootTimer){
    		this.shoot(game);
    		this.shootTimer = game.time.now + Player.shootCooldown;
    }
    

}

Player.prototype.shoot = function(game){
	if(this.facing=='left'){
		dir = 210;
	}else{
		var dir = -30;
	}

	var bullet = new Bullet(game, this.x, this.y, this, 700, dir);


	this.shootsound.play();
}
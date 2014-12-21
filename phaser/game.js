var game = new Phaser.Game(600, 300, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {



    //Put all sprites here. Or maybe call methods of loaded game objects?
    game.load.spritesheet('player', 'assets/dude.png', 32, 48);
    game.load.image('bullet', 'assets/bullet.png');

    game.load.audio('jump', 'sound/Jump.wav');
    game.load.audio('shoot', 'sound/Laser1.wav');

    game.load.tilemap('testlevel', 'levels/solidtest.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/tiles.png');
}


var player;
var facing = 'left';
var jumpTimer = 0;
var cursors;
var jumpButton;
var bg;

function create() {

    //Set up controls.
    setupControls();

    //Set up physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.time.desiredFps = 60;


    game.physics.arcade.gravity.y = 1500;

    

    //Set up map
    map = game.add.tilemap('testlevel');

    //  Now add in the tileset
    map.addTilesetImage('tiles', 'tiles');

    
    
    //  Create our layer
    layer = map.createLayer(0);
    layer.renderSettings.enableScrollDelta = false;//Fix WebKit graphical artefact.

    //  Resize the world
    layer.resizeWorld();

    //Add all tiles that are solid. On the collision layer, ALL OF THEM are.
    map.setCollisionBetween(1, 9999);


    //Make player
    player = new Player(game, 200,200,'dude');

    //Camera should follow player.
    game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);

    game.camera.setBoundsToWorld();
}

function update() {

    //Player should collide with the level
    game.physics.arcade.collide(player, layer);
}

function render () {

    game.debug.text(game.time.suggestedFps, 32, 32);

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    // game.debug.body(player);
    // game.debug.bodyInfo(player, 16, 24);

}
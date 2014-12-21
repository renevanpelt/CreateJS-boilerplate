/* 
Define control keys here. 
Can be checked like: if(controls['left'].isDown())
*/
controls = {};
function setupControls(){
	controls = {
		"left": game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
		"right": game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
		"up": game.input.keyboard.addKey(Phaser.Keyboard.UP),
		"down": game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
		"jump": game.input.keyboard.addKey(Phaser.Keyboard.UP),
		"shoot": game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)



	}
}
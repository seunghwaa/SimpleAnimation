var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});
var cow;

function preload() {
	game.load.spritesheet('cow', 'assets/cow.png', 100/*whith*/,50/*height*/);
}

function create() {
	cow = game.add.sprite(100, 100, 'cow');
	cow.animations.add('walk');
	cow.inputEnabled = true;
	cow.events.onInputDown.add(cowClick, this);


	//cow.animations.play('walk', 10/*속도조절*/, true); 항상 움직임	

}

function cowClick() {
	cow.animations.play('walk', 10, false);
}
var game = new Phaser.Game(3840, 2160, Phaser.AUTO, '', {preload: preload, create: create});
var cow;
var bg;
var tractor;

function preload() {
	game.load.spritesheet('cow', 'assets/cow.png', 100/*whith*/,50/*height*/);
	game.load.spritesheet('tractor', 'assets/tractor.png', 82/*whith*/,110/*height*/);
	game.load.image('bg', 'assets/map.jpg');
}

function create() {
	bg= game.add.sprite(0,0, 'bg');

	cow = game.add.sprite(600, 1000, 'cow');
	cow.animations.add('walk');
	cow.inputEnabled = true;
	cow.events.onInputDown.add(cowClick, this);
	//cow.animations.play('walk', 10/*속도조절*/, true); 항상 움직임	

	tractor = game.add.sprite(1000, 1050, 'tractor');
	tractor.animations.add('walk');
	tractor.inputEnabled = true;
	tractor.events.onInputDown.add(tractorClick, this);
	

}

function cowClick() {
	cow.animations.play('walk', 10, false);
	
}

function tractorClick() {
	tractor.animations.play('walk', 7, false);

}







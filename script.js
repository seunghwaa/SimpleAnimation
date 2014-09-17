var game = new Phaser.Game(3840, 2160, Phaser.AUTO, '', {preload: preload, create: create, update: update });

function preload() {
	game.load.spritesheet('cow', 'assets/cow.png', 100/*width*/,50/*height*/);
	game.load.spritesheet('tractor', 'assets/tractor.png', 82/*width*/,110/*height*/);
	game.load.spritesheet('bird', 'assets/bird01.png', 86/*width*/,109/*height*/);
	game.load.spritesheet('lift', 'assets/lift.png', 56/*width*/,40/*height*/);
	game.load.spritesheet('tree', 'assets/tree01.png', 184/*width*/,159/*height*/);
	game.load.image('bg', 'assets/map.jpg');
	//game.load.atlas('seacreatures', 'seacreatures_json.png', 'seacreatures_json.json'); ???
	//나무를 spritesheet로 만들면... 겹쳐지는 부분은 어떻게 함??

}


var cow;
var bg;
var tractor;
var bird;
var lift;
var tree;



function create() {
	
	bg= game.add.sprite(0,0, 'bg');

	cow = game.add.sprite(600, 1000, 'cow');
	cow.animations.add('walk');
	cow.inputEnabled = true;
	cow.events.onInputDown.add(cowClick, this);
	//cow.animations.play('walk', 10/*속도조절*/, true); 항상 움직임	

////////////////////////////////////////////////////////
/*
	tractor = game.add.sprite(1000, 1050, 'tractor');
	tractor.animations.add('walk');
	tractor.inputEnabled = true;
	tractor.events.onInputDown.add(tractorClick, this);
*/	

	tractor = game.add.sprite(1000, 1050, 'tractor');
	tractor.animations.add('run');
	tractor.animations.play('run', 7, true);

//////////////////////////////////////////////////////////

	bird = game.add.sprite(790,1330, 'bird');
	bird.animations.add('fly');
	bird.animations.play('fly', 10/*속도조절*/, true);
	//bird.inputEnabled = true;
	//bird.events.onInputDown.add(birdClick, this);


	lift = game.add.sprite(2400, 180, 'lift');
	lift.animations.add('swing');
	lift.inputEnabled = true;
	lift.events.onInputDown.add(liftClick, this);


	tree = game.add.sprite(400, 1050, 'tree');
	tree.animations.add('cut');
	tree.inputEnabled = true;
	tree.events.onInputDown.add(treeClick, this);

}




function cowClick() {
	cow.animations.play('walk', 10, false);
	
}

////////////////////////////////////////////////

function tractorClick() {
	tractor.animations.play('walk', 7, false);

}

/*
function tractorClick(){
	tractor.animations.play('walk', 7, false);
	tractor.x-=100;

	if (tractor.x < -tractor.width) 
	{
		//tractor.x =game.bg.width;
		tractor.x =game.bg.width;
	};
}
*/

function update() {
	tractor.x-=2;

	if (tractor.x < -tractor.width) 
	{
		//tractor.x =game.bg.width;
		tractor.x =game.bg.width;
	};

}
/////////////////////////////////


function liftClick() {
	lift.animations.play('swing', 8, false);

}

function treeClick() {
	tree.animations.play('cut', 16, false);

}












var game = new Phaser.Game(3840, 2160, Phaser.AUTO, '', {preload: preload, create: create, /*update: update */});
var cow;
var bg01;
var bg02;
var bg03;
var tractor;
var birds = [];
var lift;
var tree;
var train;
var house01;
var crane;
var sea;
var village01;
var farm;

function preload() {
	game.load.spritesheet('cow', 'assets/cow.png', 100/*width*/,50/*height*/);
	game.load.spritesheet('tractor', 'assets/tractor.png', 82/*width*/,110/*height*/);
	game.load.spritesheet('bird', 'assets/bird01.png', 86/*width*/,109/*height*/);
	game.load.spritesheet('lift', 'assets/lift.png', 56/*width*/,40/*height*/);
	game.load.spritesheet('tree', 'assets/tree01.png', 184/*width*/,159/*height*/);
	game.load.spritesheet('train', 'assets/train.png', 551/*width*/,72/*height*/);

	game.load.spritesheet('crane', 'assets/crane.png', 309/*width*/,318/*height*/);
	game.load.spritesheet('village01', 'assets/village01.png', 371/*width*/,422/*height*/);

	game.load.image('house01', 'assets/house01.png');
	//game.load.image('house02', 'assets/house02.png');
	game.load.image('farm', 'assets/farm.png');
	game.load.image('bg03', 'assets/construction_site.png');
	game.load.image('bg02', 'assets/bg02.png');
	game.load.spritesheet('sea', 'assets/sea.png',3840/*width*/,670/*height*/);
	game.load.image('bg01', 'assets/bg01.png');


	//game.load.atlas('seacreatures', 'seacreatures_json.png', 'seacreatures_json.json'); ???
	//나무를 spritesheet로 만들면... 겹쳐지는 부분은 어떻게 함??

}


function create() {
	
	bg01= game.add.sprite(0,0, 'bg01');

	sea = game.add.sprite(0,1491, 'sea');
	sea.animations.add('searun');
	sea.animations.play('searun', 7, true);
	bg03= game.add.sprite(798,432, 'bg03');
	farm= game.add.sprite(738,1041, 'farm');
	bg02= game.add.sprite(0,0, 'bg02');

	house01= game.add.sprite(1323,999, 'house01');

	//house02= game.add.sprite(2472,921, 'house02');


	/*cows = game.add.sprite(800, 1020, 'cow');
	cows.animations.add('walk');
	cows.inputEnabled = true;
	cows.events.onInputDown.add(cowClick, this);
	//cow.animations.play('walk', 10/*속도조절, true); 항상 움직임*/
 

//////////////
	cow = game.add.sprite(800, 1020, 'cow');
	cow.animations.add('walk', [0, 1, 2], 6/*속도*/, true, true);
	cow.walkAnim = cow.animations.add('walk2');
	var walkCompleted = function() {
	    cow.animations.play('walk');
	}
	cow.walkAnim.onComplete.add(walkCompleted, this);
	cow.inputEnabled = true;
	cow.events.onInputDown.add(cowClick, this);
	cow.animations.play('walk');
	
	

////////////////////////////////////////////////////////

/*
	tractor = game.add.sprite(1000, 1050, 'tractor');
	tractor.animations.add('walk');
	tractor.inputEnabled = true;
	tractor.events.onInputDown.add(tractorClick, this);
tractor클릭하면 움직이기
*/
/*	
	tractor = game.add.sprite(1000, 1050, 'tractor');
	tractor.animations.add('run');
	tractor.animations.play('run', 7, true);
*/

	tractor = game.add.sprite(900, 1080, 'tractor');
	tractor.animations.add('move', [0, 1, 2, 3, 4, 5, 6], 11/*속도*/, true, true);
	tractor.moveAnim = tractor.animations.add('move2');
	var moveCompleted = function() {
	    tractor.animations.play('move');
	}
	tractor.moveAnim.onComplete.add(moveCompleted, this);
	tractor.inputEnabled = true;
	tractor.events.onInputDown.add(tractorClick, this);
	tractor.animations.play('move');
//////////////////////////////////////////////////////////

	birds[0] = game.add.sprite(790,1330, 'bird');
	birds[0].animations.add('fly');
	birds[0].animations.play('fly', 10/*속도조절*/, true);
	//bird.inputEnabled = true;
	//bird.events.onInputDown.add(birdClick, this);

	birds[1] = game.add.sprite(900,1000, 'bird');
	birds[1].animations.add('fly');
	birds[1].animations.play('fly', 10/*속도조절*/, true);
	//bird.inputEnabled = true;
	//bird.events.onInputDown.add(birdClick, this);

	birds[2] = game.add.sprite(400,1500, 'bird');
	birds[2].animations.add('fly');
	birds[2].animations.play('fly', 10/*속도조절*/, true);
	//bird.inputEnabled = true;
	//bird.events.onInputDown.add(birdClick, this);




	lift = game.add.sprite(2400, 180, 'lift');
	lift.animations.add('swing');
	lift.inputEnabled = true;
	lift.events.onInputDown.add(liftClick, this);


	/*tree = game.add.sprite(300, 1050, 'tree');
	tree.animations.add('cut');
	tree.inputEnabled = true;
	tree.events.onInputDown.add(treeClick, this);
*/

////////////
	tree = game.add.sprite(300, 1050, 'tree');
	tree.animations.add('swing', [0, 1, 2, 3, 4, 5, 6, 7], 12, true, true);
	tree.cutAnim = tree.animations.add('cut');
	var cutCompleted = function() {
	    tree.animations.play('swing');
	}
	tree.cutAnim.onComplete.add(cutCompleted, this);
	tree.inputEnabled = true;
	tree.events.onInputDown.add(treeClick, this);
	tree.animations.play('swing');


//////////////////
	/*trees[1] = game.add.sprite(500, 1000, 'tree');
	trees[1].animations.add('swing', [0, 1, 2, 3, 4, 5, 6, 7], 12, true, true);
	trees[1].cutAnim = trees.animations.add('cut');
	 var cutCompleted = function() {
	     trees.animations.play('swing');
	 }
	trees[1].cutAnim.onComplete.add(cutCompleted, this);
	trees[1].inputEnabled = true;
	trees[1].events.onInputDown.add(treesClick, this);
	trees[1].animations.play('swing');
*/
////////////////////

	train = game.add.sprite(3000, 440, 'train');
	train.animations.add('shiny');
	train.inputEnabled = true;
	train.events.onInputDown.add(trainClick, this);


	/*birds[0].wander = game.add.tween(birds[0])
        .to({ x: 890, y: 1380 }, 2000, Phaser.Easing.Linear.None)
        .to({ x: 790, y: 1330 }, 2000, Phaser.Easing.Linear.None)
        .loop()
        .start(); 

	birds[0].wander = game.add.tween(birds[0])
        .to({ x: 890, y: 1380 }, 2000, Phaser.Easing.Linear.None)
        .to({ x: 790, y: 1330 }, 2000, Phaser.Easing.Linear.None)
        .loop();
*/

	birds[0].wander = game.add.tween(birds[0])
		.to({ x: 890, y: 1380 }, 2000, Phaser.Easing.Linear.None)
		.to({ x: 790, y: 1330 }, 2000, Phaser.Easing.Linear.None);


	tractor.wander = game.add.tween(tractor)
		.to({ x: 1200, y: 1080 }, 2000, Phaser.Easing.Linear.None)
		.to({ x: 900, y: 1080 }, 2000, Phaser.Easing.Linear.None);



////////////////////////////////////////////////////


	crane = game.add.sprite(1261, 539, 'crane');
	crane.animations.add('moving', [0, 1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16], 10/*속도*/, true, true);
	crane.movingAnim = crane.animations.add('moving2');
	var movingCompleted = function() {
	    crane.animations.play('moving');
	}
	crane.movingAnim.onComplete.add(movingCompleted, this);
	crane.inputEnabled = true;
	crane.events.onInputDown.add(craneClick, this);
	crane.animations.play('moving');


	
	
	village01 = game.add.sprite(2472,921, 'village01');
	village01.animations.add('move_1', [0, 1], 3/*속도*/, true, true);
	village01.moveAnim = village01.animations.add('move_2');
	var move_1Completed = function() {
	    village01.animations.play('move_1');
	}
	village01.moveAnim.onComplete.add(move_1Completed, this);
	village01.inputEnabled = true;
	village01.events.onInputDown.add(village01Click, this);
	village01.animations.play('move_1');
}






function cowClick() {
	cow.animations.play('walk2', 10, false);
	
	birds[0].wander.start(); //소를 클릭하면 새가 움직임
	
}

////////////////////////////////////////////////

function tractorClick() {
	tractor.animations.play('move2', 13, false);

	tractor.wander.start();
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


function update() {
	tractor.x-=2;

	if (tractor.x < -tractor.width) 
	{
		//tractor.x =game.bg.width;
		tractor.x =game.bg.width;
	};

}
*/
/////////////////////////////////


function liftClick() {
	lift.animations.play('swing', 8, false);

}

function treeClick() {
	tree.animations.play('cut', 16, false);

}

function trainClick() {
	train.animations.play('shiny', 8, false);

}

function craneClick() {
	crane.animations.play('moving2', 10, false);

	//crane.wander.start();
}




function village01Click() {
	village01.animations.play('move_2', 22, false);

}








//HTML Selectors
const playerIcon = document.querySelector('#playerIcon');
const playerName = document.querySelector('#playerName');
const playerStats = document.querySelector('#playerStats');
const enemyIcon = document.querySelector('#enemyIcon');
const enemyName = document.querySelector('#enemyName');
const attackBtn = document.querySelector('#attackBtn');
var currentEnemy = {};

function randomInt(max)
{
	return Math.floor(Math.random() * Math.floor(max));
}

function attack()
{
	theGame.attackEnemy();
}

attackBtn.onclick = attack;

function IdleGame()
{
	this.player = 
	{
		name: 'Player One',
		maxHp: 50,
		currentHp: 50,
		damage: 5,
		level: 1,
		exp: 0
	};

	this.enemies = 
	[
		{ name: 'Enemy1', image: '', maxHp: 50, currentHp: 50, exp: 50 },
		{ name: 'Enemy2', image: '', maxHp: 25, currentHp: 25, exp: 25 },
		{ name: 'Enemy3', image: '', maxHp: 15, currentHp: 15, exp: 15 },
		{ name: 'Enemy4', image: '', maxHp: 35, currentHp: 35, exp: 35 }
	];

	this.startGame();
}

IdleGame.prototype.startGame = function()
{
	playerName.textContent = this.player.name;
	
	this.newEnemy();
	this.refreshFight();
}

IdleGame.prototype.refreshFight = function()
{
	playerIcon.textContent = this.player.maxHp;
	enemyIcon.textContent = currentEnemy.maxHp;
	enemyName.textContent = currentEnemy.name;
}

IdleGame.prototype.newEnemy = function()
{
	let num = randomInt(this.enemies.length);
	Object.assign(currentEnemy, this.enemies[num]);
	/*
	currentEnemy.maxHp = this.enemies[num].maxHp;
	currentEnemy.name = this.enemies[num].name;
	*/
}

IdleGame.prototype.attackEnemy = function()
{
	currentEnemy.maxHp -= this.player.damage;
	if(currentEnemy.maxHp <= 0)
	{
		this.player.exp += currentEnemy.exp;
		if(this.player.exp / 100 > 1)
		{
			console.log('LEVEL UP!');
			this.player.damage += 1;
			this.player.maxHp += 5;
			this.player.exp = 0;
			this.player.currentHp = this.player.maxHp;
		}
		this.newEnemy();
	}
	this.refreshFight();
	console.log('Attacked');
}

const theGame = new IdleGame();
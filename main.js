//HTML Selectors
const playerIcon = document.querySelector('#playerIcon');
const playerName = document.querySelector('#playerName');
const playerStats = document.querySelector('#playerStats');
const enemyIcon = document.querySelector('#enemyIcon');
const enemyName = document.querySelector('#enemyName');
const attackBtn = document.querySelector('#attackBtn');
const healthBar = document.querySelector('#healthBar');
const health = document.querySelector('#health');
var currentEnemy = {};

function randomInt(max)
{
	return Math.floor(Math.random() * Math.floor(max));
}

function attack()
{
	theGame.attackEnemy();
}

//Testing out making a player 'class'
function UserPlayer()
{
	this.name = 'Player One';
	this.maxHp = 50;
	this.currentHp = this.maxHp;
	this.level = 1;
	this.strength = 5;
	this.exp = 0;
}

UserPlayer.prototype.damage = function(){
	return Math.round(randomInt(this.strength) * this.level) + 1;
}

UserPlayer.prototype.levelUpCheck = function(){
	if(this.exp / (100 * this.level) >= 1)
	{
		console.log('LEVEL UP!');
		this.strength += 1;
		this.maxHp += 5;
		this.level += 1;
		this.currentHp = this.maxHp;
	}
}
//End of player class ***************************************************
attackBtn.onclick = attack;

function IdleGame()
{
	/*
	this.player = 
	{
		name: 'Player One',
		maxHp: 50,
		currentHp: 50,
		damage: 5,
		level: 1,
		exp: 0
	};*/

	this.player = new UserPlayer();

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
	this.refreshStats();
	this.newEnemy();
	this.refreshFight();
}

IdleGame.prototype.refreshFight = function()
{
	playerIcon.textContent = this.player.maxHp;
	enemyIcon.textContent = currentEnemy.maxHp;
	enemyName.textContent = currentEnemy.name;
}

IdleGame.prototype.refreshStats = function()
{
	//playerStats.querySelector('#health').textContent = `${this.player.currentHp}/${this.player.maxHp}`;
	let progress = Math.round((this.player.currentHp / this.player.maxHp) * 100);
	healthBar.style.width = `${progress}%`;
	healthBar.textContent = this.player.currentHp;
	playerStats.querySelector('#level').textContent = this.player.level;
	playerStats.querySelector('#experience').textContent = this.player.exp;
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
	currentEnemy.maxHp -= this.player.damage();
	this.player.currentHp -= randomInt(5);
	if(currentEnemy.maxHp <= 0)
	{
		this.player.exp += currentEnemy.exp;
		/*
		if(this.player.exp / (100 * this.player.level) >= 1)
		{
			console.log('LEVEL UP!');
			this.player.damage += 1;
			this.player.maxHp += 5;
			this.player.level += 1;
			//this.player.exp = 0;
			this.player.currentHp = this.player.maxHp;
		}
		*/
		this.player.levelUpCheck();
		this.newEnemy();
	}
	this.refreshFight();
	this.refreshStats();
	console.log('Attacked');
}

const theGame = new IdleGame();
//HTML Selectors
const playerIcon = document.querySelector('#playerIcon');
const enemyIcon = document.querySelector('#enemyIcon');
const attackBtn = document.querySelector('#attackBtn');

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
		damage: 5
	};

	this.enemies = 
	[
		{ name: 'Enemy1', image: '', maxHp: 50 },
		{ name: 'Enemy2', image: '', maxHp: 25 },
		{ name: 'Enemy3', image: '', maxHp: 15 },
		{ name: 'Enemy4', image: '', maxHp: 35 }
	]

	this.startGame();
}

IdleGame.prototype.startGame = function()
{
	playerIcon.textContent = this.player.maxHp;
	enemyIcon.textContent = this.enemies[0].maxHp;
}

IdleGame.prototype.refreshFight = function()
{
	playerIcon.textContent = this.player.maxHp;
	enemyIcon.textContent = this.enemies[0].maxHp;
}

IdleGame.prototype.attackEnemy = function()
{
	this.enemies[0].maxHp -= this.player.damage;
	this.refreshFight();
	console.log('Attacked');
}

const theGame = new IdleGame();
//HTML Selectors
const playerIcon = document.querySelector('#playerIcon');
const enemyIcon = document.querySelector('#enemyIcon');
const attackBtn = document.querySelector('#attackBtn');

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
}
/* La gestion des evenements en JavaScript se fait a l'aide d'event listeners.
 * Un event listener est en realite une boucle qui, une fois le listener declare,
 * est executee en permanence par le navigateur. Il peut etre applique a n'importe quel
 * element d'une page, pour gerer les evenements localement, ou etre applique sur
 * tout le document.*/

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.addEventListener('keydown', function (event){
	if (event.code === 'Space')
	{
		let r, g, b;
		[r, g, b] = [getRandomInt(255), getRandomInt(255), getRandomInt(255)];
		document.body.style = `background-color: rgb(${r}, ${g}, ${b})`;
	}
});

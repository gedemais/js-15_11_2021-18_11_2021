function calculatrice(form)
{
/* On commence par recuperer l'objet de type 'paragraphe' dans
 * lequel on souhaite ecrire, en renseignant son id en parametre
 * de la methode getElementById de l'objet document.*/

	let paragraph = document.getElementById('result');

// On recupere le texte ecrit dans le formulaire
	input = form.operation.value;

// Puis on fait nos petits calculs...
	tokens = input.split(' '); // On separe la chaine de caractere en prenant comme delimiteur le caractere espace
	console.log(tokens); // On verifie nos sous-chaines

	if (tokens.length != 3) {
		paragraph.innerText = "Erreur.";
		return ;
	}

	var a, sign, b;

	[a, sign, b] = [parseFloat(tokens[0]), tokens[1], parseFloat(tokens[2])];

	console.log(a, sign, b);

	var result = 0.0;

	switch (sign)
	{
		case '+':
			result = a + b;
		break;
		case '-':
			result = a - b;
		break;
		case '*':
			result = a * b;
		break;
		case '/':
			result = a / b;
		break;
		default:
			result = 'Invalid sign !';
		break;
	}

/* On peut maintenant reecrire le contenu du paragraphe,
 * grace a la methode innerText de l'element paragraphe.*/
	paragraph.innerText = result.toString();
}

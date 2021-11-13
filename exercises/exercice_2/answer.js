/* On commence par recuperer l'objet de type 'paragraphe' dans
 * lequel on souhaite ecrire, en renseignant son id en parametre
 * de la methode getElementById de l'objet document.*/

let paragrapheAddition = document.getElementById('addition')
let paragrapheSubstraction = document.getElementById('substraction')
let paragrapheMultiplication = document.getElementById('multiplication')
let paragrapheDivision = document.getElementById('division')

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// On definit 8 nombres aleatoires
addition_a = getRandomInt(10)
addition_b = getRandomInt(10)

substraction_a = getRandomInt(10)
substraction_b = getRandomInt(10)

multiplication_a = getRandomInt(10)
multiplication_b = getRandomInt(10)

division_a = getRandomInt(10)
division_b = getRandomInt(10)

/* On peut maintenant reecrire le contenu des paragraphes avec les resultats */

paragrapheAddition.innerText = `lololol`

/* Le but de cet exercice est de montrer comment manipuler
 * les operateurs en JavaScript.*/

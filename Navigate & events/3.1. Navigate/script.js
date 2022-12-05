/*
*/

//Exercice 1 - déplacer le dernier élément de la liste
const liste = document.querySelector('ol');
const a = liste.children[0];
const b = liste.children[4];
liste.insertBefore(b, a);

//Exercice 2 - replacer les titres dans la bonne section
const h2Section2 = document.querySelectorAll('h2')[1];
const h2Section3 = document.querySelectorAll('h2')[2];
const section2 = document.querySelectorAll('section')[1];
section2.insertBefore(h2Section3, h2Section2);
const div = document.querySelector('div');
const p4 = div.lastElementChild;
div.insertBefore(h2Section2, p4);

//Exercice 3
const section3 = document.querySelectorAll('section')[2];
section3.remove();


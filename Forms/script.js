/*
*/
//écrire son firstname qui ressort dans le span
let firstname = document.getElementById("firstname");
firstname.addEventListener("keyup", myFunction);
function myFunction(){
    let x = firstname.value;
    document.getElementById("display-firstname").innerHTML = x;
}

//faire apparaitre le texte si la personne rentre 18 ou plus
let age = document.getElementById("age");
let truth = document.getElementById("a-hard-truth");
age.addEventListener("keyup", hiddenTruth);
function hiddenTruth () {
    let x = age.value;
    if (x >= 18) {
        truth.style.visibility = 'visible';
    }
    else {
        truth.style.visibility = 'hidden';
    }
}

//mettre le champ en rouge si moins de 6 caractères


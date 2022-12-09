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
let pwd = document.getElementById("pwd");
let pwdConfirm = document.getElementById("pwd-confirm");
pwd.addEventListener("keyup", redChamp);
function redChamp() {
    let x = pwd.value.length;
    if (x < 6) {
        pwd.style.backgroundColor = "red";
    }
    else {
        pwd.style.backgroundColor = "white";
    }
}
pwdConfirm.addEventListener("keyup", redConfirm);
function redConfirm(){
    let a = pwd.value;
    let b = pwdConfirm.value;
    if (a == b) {
        pwdConfirm.style.backgroundColor = "white";
    }
    else {
        pwdConfirm.style.backgroundColor = "red";
    }
}

//mode sombre
let darkSelect = document.getElementById("toggle-darkmode");
darkSelect.addEventListener("change", darkMode);
function darkMode(){
    if (darkSelect.classList.toggle('darkmode')){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}

/*
*/
//écrire son firstname qui ressort dans le span
let firstname = document.getElementById("firstname");
firstname.addEventListener("keyup", myFunction);
function myFunction(){
    let x = firstname.value;
    document.getElementById("display-firstname").innerHTML = x;
}
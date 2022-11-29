//partie 1 - title
const imp = document.querySelectorAll('.important');
imp.forEach((important) => {
    important.setAttribute("title", "This is an important item");
})

//partie 2 - display_none
const modif_img = document.querySelectorAll('img');
for (let elem of modif_img) {
    if (!elem.classList.contains("important")){
        elem.style.display ="none";
    }
}

//partie 3 - paragraphe+class
const parag = document.querySelectorAll('p');
for (let elem of parag){
    if (elem.classList.contains(elem.className)){
        console.log(elem.className);
        console.log(elem.innerText);
    }
    else {
        console.log(elem.innerText);    
    }
}

//partie 4 - couleurs alétoires au paragraphe
function random_pg_color() {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var pgColor = "rgb(" + x + "," + y + "," + z + ")";
    return pgColor;
}
let parColor = document.querySelectorAll('p');
for (let elem of parColor){
    if (elem.classList.contains(elem.className)){
        elem.style.color = "black";
    }
    else {
        elem.style.color = random_pg_color();   
    }
}







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






const imp = document.querySelectorAll('.important');
imp.forEach((important) => {
    important.setAttribute("title", "This is an important item");
})

const modif_img = document.querySelectorAll('img');
for (let elem of modif_img) {
    if (!elem.classList.contains("important")){
        elem.style.display ="none";
    }
}



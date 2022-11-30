
//tableau des apprenants :
let inputAr = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"Jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"];

//fonction sortant une couleur aléatoire pour le fond et générant un texte en fonction de la luminosité de ce dernier :
function random_bg_color(txtModif) {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    const brightness = Math.round(((parseInt(x) * 299) + (parseInt(y) * 587) + (parseInt(z) * 114)) / 1000);
    let txtColor = (brightness > 125) ? 'black' : 'white';
        txtModif.style.color = txtColor;
        txtModif.style.backgroundColor = bgColor;
}

//fonction sortant les apprenants de manière aléatoire sous forme de tableau :
function pickLearner(array,n) {
    for (let i=0; i < n; i++){
    const random = [...array].sort(() => 0.5 - Math.random());
    return random.slice(0, n);
    }
}

//fonction prenant un élément du tableau pour le transformer en paragraphe avec ses couleurs aléatoires :
function addElement(newTab){
for (let elem of newTab) {
    let txtLearner = document.createTextNode(elem);
    let newParag = document.createElement('p');
    newParag.appendChild(txtLearner);
    random_bg_color(newParag);
    newSection.appendChild(newParag);
}
}

//Création de la section :
let tagArticle = document.getElementsByTagName("article")[0];
let newSection = document.createElement('section');
tagArticle.appendChild(newSection);

//Application de la fonction :
newTab = pickLearner(inputAr,24);
addElement(newTab);






//tableau des apprenants :
let inputAr = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx ","Jofrey Houyoux" ,"Jonathan Manes" ,"Jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource ","Virginie Dourson"];

//fonction sortant une couleur aléatoire :
function random_bg_color() {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
//fonction sortant les apprenants de manière aléatoire sous forme de tableau :
function pickLearner(array,n) {
    for (let i=0; i < n; i++){
    const random = [...array].sort(() => 0.5 - Math.random());
    return random.slice(0, n);
    }
}

//function prenant un élément du tableau pour le transformer en texte :
function addElement(inputAr){
newTab = pickLearner(inputAr,24)
for (let elem of newTab) {
    let newTxt = document.createTextNode(" "+elem+" ");
    return newTxt;
}
}

//Création de la section :
let tagArticle = document.getElementsByTagName("article")[0];
let newSection = document.createElement('section');
tagArticle.appendChild(newSection);

//boucle for pour placer la fonction "addElement" dans des paragraphes et placer la couleur de fond :
let randStart = inputAr.length;
for (let i=0 ; i<randStart ; i++) {
    let txtLearner = addElement(inputAr);
    let newParag = document.createElement('p');
    newParag.appendChild(txtLearner);
    newParag.style.backgroundColor = random_bg_color();
    newSection.appendChild(newParag);
}





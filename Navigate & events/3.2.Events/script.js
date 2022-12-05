const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}

//créer un cube de couleur verte
function greenCube (){
  let display = document.createElement('div');
  display.classList.add("displayedsquare");
  display.classList.add("green");
  let displayWrapper = document.querySelector('section');
  displayWrapper.appendChild(display);
  addLi("green square");
  alert("green");
}
let greenColor = document.querySelector('.green');
greenColor.addEventListener('click', greenCube);

//créer un cube de couleur mauve
function violetCube (){
  let display = document.createElement('div');
  display.classList.add("displayedsquare");
  display.classList.add("violet");
  let displayWrapper = document.querySelector('section');
  displayWrapper.appendChild(display);
  addLi("violet square");
  alert("violet");
}
let violetColor = document.querySelector('.violet');
violetColor.addEventListener('click', violetCube);

//créer un cube de couleur orange
function orangeCube (){
  let display = document.createElement('div');
  display.classList.add("displayedsquare");
  display.classList.add("orange");
  let displayWrapper = document.querySelector('section');
  displayWrapper.appendChild(display);
  addLi("orange square");
  alert("orange");
}
let orangeColor = document.querySelector('.orange');
orangeColor.addEventListener('click', orangeCube);

//fonction ajoutant li
function addLi (color) {
  let ulCube = document.querySelector('ul');
  let liCube = document.createElement('li');
  ulCube.appendChild(liCube);
  let txtCube = document.createTextNode ("[" + getElapsedTime()+ "] " + "Create a new " + color);
  liCube.appendChild(txtCube);
}

//changer au hasard la couleur de l'arrière-plan
function random_bg_color() {
  var x = Math.floor(Math.random() * 255);
  var y = Math.floor(Math.random() * 255);
  var z = Math.floor(Math.random() * 255);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);
document.body.style.background = bgColor;
}
document.body.onkeyup = function(e) {
  if(e.keyCode == 32) {
    random_bg_color();
    addLi("background");
  }
  //effacer le journal si i enfoncée
  else if(e.keyCode ==73) {
    while(document.querySelectorAll('li').length) {
      document.querySelector('li').remove();
    }
  }
  else if(e.keyCode ==83) {
    while(document.querySelectorAll('.displayedsquare').length) {
      document.querySelector('.displayedsquare').remove();
    }
  }
}







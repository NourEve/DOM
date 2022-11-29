/*
*/
console.log(document.title);
document.title = "Modifying the DOM";


function random_bg_color() {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);
document.body.style.background = bgColor;
}
random_bg_color();

const myElement = document.body;
    for( const child of myElement.children) {
        console.log(document.getElementsByTagName("body")[0]);
        console.log(child.tagName);
    }
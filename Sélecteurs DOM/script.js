/*Ajoutez un titleattribut à chaque élément qui a la classe importante, en indiquant This is an important item. Astuce : ajouter un attribut title à un élément est différent de changer le titre d'un document.*/
const imp = document.querySelectorAll('.important');
imp.forEach((important) => {
    important.setAttribute("title", "This is an important item");
})
/*Sélectionnez toutes les balises img et parcourez-les. S'ils n'ont pas importantde classe, transformez leur propriété d'affichage en none*/


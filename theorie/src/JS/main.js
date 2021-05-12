// un objet

let personne = {
    //un nom, un prnéom, un âge et une taille sont des propriétés de mon objet
    nom : "De Groef",
    prenom : "Chris",
    age : 27,
    taille: "175cm",
    couleursObj : {
        couleur1 : "bleu",
        couleur2 : "rouge",
    },
    couleursArray : ["bleu", "rouge"],
    // pas de fonction fléchée dans un objet
    bonjour () {
        console.log(`Bonjour ${this.prenom} ${this.nom}`); // this fait reference à la variable qu'il y a DANS l'objet !
    }
};

console.log(personne);
console.log(personne.prenom+ " " + personne.nom);
console.log(personne.couleursObj.couleur2);
console.log(personne.couleursArray[0]);

personne.bonjour();
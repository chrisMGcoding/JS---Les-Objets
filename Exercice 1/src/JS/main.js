// ## Exo 1 
// ### Créez un objet avec vos valeurs
// ### 'Nom', 'prenom', 'age', 'taille'
// ### Affichez votre age via un console.log()

let myself = {
    nom : "De Groef",
    prenom : "Chris",
    age : 27,
    taille : "175cm",
}

console.log(myself.age);

// ## Exo 2 
// ### Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

let other = {
    nom : "Amisi",
    prenom : "Jenny",
    age : 28,
    taille : "165cm",
}

// ## Exo 3
// ### Remplir les propriétées du 3eme personnage
// ### Son nom doit valoir le nom du personnage1
// ### Son age doit valoir celui du personnage2
// ### Et sa taille doit être rempli avec la valeur que vous souhaitez

let otherAgain = {
    nom : myself.nom,
    age : other.age,
    taille : myself.taille,
};

console.log(myself);

console.log(other);

console.log(otherAgain);
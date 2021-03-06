// ## Exo 1
// ### Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

let personnage = {
    nom : "L'Enflure",
    prenom : "Arthur",
    sePresenter () {
        console.log(`Bonjour ${this.prenom} ${this.nom}`);
    }
};

personnage.sePresenter();

// ## Exo 2
// ### Créer un objet avec un nom et une méthode
// ### La méthode de votre objet lance un prompt permetant de changer son age
// ### Une alert renvoi "[objet] a [age de l'objet] ans"

let objet = {
    nom : "De Groef",
    age : "",
    declarerAge () {
        this.age = prompt("Quel est votre âge ?");
        alert(`${this.nom} a ${this.age}ans`);
    }
};

objet.declarerAge();
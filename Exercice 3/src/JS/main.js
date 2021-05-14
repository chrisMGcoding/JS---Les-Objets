// ## Exo 3

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

let perso1 = {
    prenom : "François",
    panier : ["huile", "tomate", "pain"],
    derober (item1, item2) {
        this.panier.push(item1);
        perso2.panier.splice(perso2.panier.indexOf(item1),1);
        this.panier.push(item2);
        perso2.panier.splice(perso2.panier.indexOf(item2),1);
        console.log(this.panier);
        console.log(perso2.panier);
    }
};

console.log(perso1);

let perso2 = {
    prenom : "Sergio",
    panier : ["courgette", "lait", "fromage"],
};

console.log(perso2); 


perso1.derober("courgette", "fromage");
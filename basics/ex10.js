/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

//  écrire votre code sous ce commentaire
shoppingList = (_array) => {
    let comptOrange = 0;
    let comptKiwi = 0;
    let comptAnanas = 0;
    let comptPrune = 0;
    let comptBanane = 0;
    let comptPamplemousse = 0;

    for (let i = 0; i < _array.length; i++) {
        for (let j = 0; j < _array.length; j++) {
            switch (_array[i][j]) {
                case "orange": comptOrange++; break;
                case "kiwi": comptKiwi++; break;
                case "ananas": comptAnanas++; break;
                case "prune": comptPrune++; break;
                case "banane": comptBanane++; break;
                case "pamplemousse": comptPamplemousse++; break;
            }
        }
    }
    const fruits = {
        "orange": comptOrange,
        "kiwi": comptKiwi,
        "ananas": comptAnanas,
        
        "prune": comptPrune,
        "banane": comptBanane,
        "pamplemousse": comptPamplemousse
    }
    console.log(fruits);

}

/*
  Test 1
  Résultat attendu : {
    "orange": 8,
    "kiwi": 4,
    "ananas": 3,
    "prune": 2,
    "banane": 2,
    "pamplemousse": 1
  }
*/

shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);

/* DO NOT TOUCH */
module.exports = {
  shoppingList: shoppingList
}

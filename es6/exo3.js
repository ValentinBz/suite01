/*
  Entraînement Array.prototype.find

  Ecrire une fonction "findYellowFruit"
  qui permet de trouver le 1er fruit jaune d'un tableau de fruits passé
  en paramètre. Cette fonction retournera le nom du fruit en question.

  Prototype:
      arr findYellowFruit(arr);
*/

//  écrire votre code sous ce commentaire
findYellowFruit = (_array) => {
 _array.find(x => { if((x.color) == "jaune"){console.log("fruit :" ,x.name);}})
}

/*
  Test 1
  Résultat attendu : "banane"
*/

findYellowFruit([{name: 'orange', color: 'orange'}, {name: 'banane', color: 'jaune'},{name: 'pomme', color: 'rouge'}]);

/*
  Test 2
  Résultat attendu : ""
*/

findYellowFruit([{name: 'orange', color: 'orange'}, {name: 'pomme', color: 'vert'}]);

const inventaire = [
                     {nom: 'pommes', quantité: 2},
                     {nom: 'bananes', quantité: 0},
                     {nom: 'cerises', quantité: 5}
                   ];

const resultat = inventaire.find( fruit => fruit.nom === 'cerises');
console.log(resultat);
/* DO NOT TOUCH */
module.exports = {
  findYellowFruit: findYellowFruit
}

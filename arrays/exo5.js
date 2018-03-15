/*
  Ecrire une fonction "concatArrays"
  qui prend deux tableaux et qui renvoie un tableau constitué du contenu des deux tableaux.
  Prototype:
      arr concatArrays(arr1, arr2);

  Fonctions interdites:
      - Array.concat

  La fonction ne doit pas modifier les tableaux sources.
*/

//  écrire votre code sous ce commentaire
concatArrays = (arr1, arr2) => {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
      arr3.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
      arr3.push(arr2[j]);
  }
  console.log("la reponse est : ",arr3);
}
concatArrays(["bonjour"], ["ça", "va?", 3, 4]);
concatArrays(["enchanté", "je"], ["m'appelle", "comment?"]);
/*
/*
  Test 1
  Résultat attendu : ["bonjour", "ça", "va?", 3, 4]
*/
concatArrays(["bonjour"], ["ça", "va?", 3, 4]);

/*
  Test 2
  Résultat attendu : ["enchanté", "je", "m'appelle", "comment?"]
*/
concatArrays(["enchanté", "je"], ["m'appelle", "comment?"]);

/* DO NOT TOUCH */
module.exports = {
  concatArrays: concatArrays
}

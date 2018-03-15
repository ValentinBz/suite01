/*
  Ecrire une fonction "searchOcc"
  qui nous renvoie l'index d'une occurrence dans un tableau.
  Si l'occurrence est introuvable dans le tableau, renvoyer -1;
  Prototype:
      nbr searchOcc(arr, occurence);

  Fonctions interdites:
      - Array.indexOf
*/

//  écrire votre code sous ce commentaire
searchOcc = (arr, occ) => {
    let u = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == occ) {
            u++;
            console.log(i);
        }
    }
    if (u == 0) {console.log(-1);}
}

/*
  Test 1
  Résultat attendu : 2
*/
searchOcc(["Salut", "ça", "va", "?"], "va");

/*
  Test 2
  Résultat attendu : -1
*/

searchOcc(["Salut", "ça", "va", "?"], "Ahahahah");
searchOcc(["Salut", "ça", "va", "?"], "ça");
searchOcc(["Salut", "ça", "va", "?"], "?");

/* DO NOT TOUCH */
module.exports = {
  searchOcc: searchOcc
}

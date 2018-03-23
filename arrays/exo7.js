/*
  Ecrire une fonction "splitStr" qui, d'où son nom,
  sépare une chaine de caractères sur une occurence donnée,
  et renvoie un tableau contenant le résultat de la séparation des données.
  Prototype:
      arr splitStr(str, occurence);

  Fonctions interdites:
      - String.split
*/

//  écrire votre code sous ce commentaire
// splitStr = (str, occ) => {

//     let arr1 = [...str];
//     let arr2 = [];
//     let arr3 = [];
//     let i = 0;

//     for (i = 0; i < arr1.length; i++) {
//         if(arr1[i] != occ) {
//             arr2.push(arr1[i]);
//         } else if (arr1[i] == occ) {
//             arr3.push(arr2.join(""));
//             arr2 = [];
//         } 
//     }
//     arr3.push(arr2.join(""));  205
//     console.log(arr3);
// }
// splitStr("Bonjour comment tu vas ? ça va merci.", " ");
// splitStr("06-20-42-18-54", "-");
// splitStr("Bonjour comment tu", " ");
/*
  Test 1
  Résultat attendu : ["Bonjour", "comment", "tu", "vas", "?", "ça", "va", "merci."]
*/
// splitStr("Bonjour comment tu vas ? ça va merci.", " ");

/*
  Test 2
  Résultat attendu : ["06", "20", "42", "18", "54"]
*/
// splitStr("06-20-42-18-54", "-");
splitStr = (str, occ) => {
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < str.length; i++) {
        if(str[i] != occ) {
            arr1.push(str[i]);
        } else if (str[i] == occ) {
            arr2.push(arr1.join(""));
            arr1 = [];
        } 
    }
    arr2.push(arr1.join(""));
    return arr2;
}
console.log(splitStr("Bonjour comment tu vas ? ça va merci.", " "));
console.log(splitStr("06-20-42-18-54", "-"));

/* DO NOT TOUCH */
module.exports = {
  splitStr: splitStr
}


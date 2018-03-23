/*
  Entraînement Array.prototype.map

  Ecrire une fonction "getAllLastnames"
  qui retourne un tableau contenant la liste des prénoms des utilisateurs
  passés en paramètre.

  Prototype:
      arr getAllLastnames(arr);
*/

//  écrire votre code sous ce commentaire
getAllLastnames = (_array) => {
     let array1 = [];
    _array.map(x => {
      if (x.name) {
          array1.push(x.name);
        }else {
            array1.push("");
        }
      })
    console.log("array1 : ", array1);
}

getAllLastnames([{name: 'John'}, {name: 'Judith'}, {name: 'Julia'}]);
getAllLastnames([{name: 'Marc'}, {age: 18}, {name: 'Robert'}]);

/*
  Test 1
  Résultat attendu : ["John", "Judith", "Julia"]
*/

// getAllLastnames([{name: 'John'}, {name: 'Judith'}, {name: 'Julia'}]);
// getAllLastnames([{name: 'Marc'}, {age: 18}, {name: 'Robert'}]);
/*
  Test 2
  Résultat attendu : ["Marc", "", "Robert"]
*/

// getAllLastnames([{name: 'Marc'}, {age: 18}, {name: 'Robert'}]);

/* DO NOT TOUCH */
module.exports = {
  getAllLastnames: getAllLastnames
}


var tableauOrig = [{clé:1, valeur:10}, {clé:2, valeur:20}, {clé:3, valeur: 30}];
var tableauFormaté = tableauOrig.map(obj => { 
  var rObj = {};
  rObj[obj.clé] = obj.valeur; 
  return rObj;
});


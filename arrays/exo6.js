/*
  Ecrire une fonction "sortNumbers" qui va trier un tableau de nombres.
  Prototype:
      void sortNumbers(arr);

  Fonctions interdites:
      Array.sort
*/

//  écrire votre code sous ce commentaire
sortNumbers = (_array) => {
  let tampon = 0;
  let v = 0;
  do {
    for (let i = 0; i < _array.length; i++) {
      if (_array[i] > _array[i + 1]) {
        tampon = _array[i];
        _array[i] = _array[i + 1];
        _array[i + 1] = tampon;
      }
    }
    v++;
  } while (v < _array.length);
  console.log(_array);
}
/*
  Test 1
  Résultat attendu : [2, 3, 4, 5]
*/
sortNumbers([4, 3, 5, 2]);

/*
  Test 2
  Résultat attendu : [-10, 2, 10, 28]
*/
sortNumbers([10, 2, 28, -10]);

/* DO NOT TOUCH */
module.exports = {
  sortNumbers: sortNumbers
}



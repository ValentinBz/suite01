/*
    Ecrire une fonction "isAllEven",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre:
        - 1 si tous les nombres du tableau sont pair
        - 0 si au moins un nombre du tableau est impair

    CRITERE DE VALIDATION OBLIGATOIRE
    --> Réutiliser la fonction isEven
        que vous aviez codé dans les exercices précédents ;)
        INTERDICTION d'écrire le contenu de isEven dans la même fonction
        Vous devez donc bien avoir 2 fonctions différentes;

*/

//  écrire votre code sous ce commentaire
isAllEven = (_array) => {
let u = 0;
    _array.map(x => {
        console.log("kikou");
        if (x%2 == 0) {
            u++;
        } else {
            return 0;
        }})

    if (u == (_array.length)) {
        return 1
    }
}
// isAllEven([4, 5, 6]);


/*      Test 1
    Appel à la fonction "isAllEven",
    prenant en paramètre le tableau [4, 4, 6, 8, 10, 12],
    et nous attendons comme résultat 1;
*/

// isAllEven([4, 4, 6, 8, 10, 12]);
isAllEven([4, 4, 6, 8, 11, 12]);
//  écrire votre code sous ce commentaire


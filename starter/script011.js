/*****************************
 * 11 - Priorité des opérateurs
 */

// Opérateurs multiples
// 1. Utilisez les opérateurs +, *, et / pour effectuer une opération mathématique complexe. Affichez le résultat.

console.log(5*13+22/5);

// Groupement
// 2. Créez une expression mathématique qui nécessite le groupement des opérations. Utilisez des parenthèses pour clarifier l'ordre des opérations. Affichez le résultat.

console.log((25*4)/7*2);
console.log(25*4/7*2);

// Affectations multiples
// 3. Déclarez deux variables x et y. Utilisez des affectations multiples pour leur donner des valeurs. Par exemple, x = 5 et y = 10. Affichez les valeurs de x et y.

const x=5;
const y= 10;
console.log(`x = ${x} et y = ${y}`);

// let x,y = 2. ont les mêmes valeurs mais c'est des variables différentes
//let x = y = 2;

// = affectation chainee

// Autres opérateurs
// 4. Utilisez un opérateur de comparaison (comme >, <, ==, etc.) pour comparer les valeurs de deux variables et affichez le résultat.


//const ageP1 = 16;
//const ageP2 = 18;


//opérateurs de comparaison


console.log(ageP1 > ageP2);
console.log(ageP1 < ageP2);
console.log(!(ageP1 > ageP2));        // inverser ==> négation      ( = opérateur des priorités ici
console.log(ageP1 >= ageP2);
console.log(ageP1 <= ageP2);
console.log(ageP1 == ageP2);          // ne pas faire! c'est mieux de faire  ====
console.log(ageP1 === ageP2);         // pas d'erreur car c'est possible de le faire avec = au lieu de ==
console.log(ageP1 !== ageP2);         //≠ égal
console.log(ageP1 > ageP2 || true);
console.log(ageP1 > ageP2 && true);

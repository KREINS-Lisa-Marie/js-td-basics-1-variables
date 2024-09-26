// Prédiction de résultat
/*
Affichez dans la console le résultat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne :
- 4 et 5 sont toutes deux de type nombres :
    * quelle opération réalise l'opérateur "+" dans ce cas ?

    il aditionne les 2 valeurs

    * quel est le résultat de l'opération ?

    9

- 4 et 5 sont toutes deux de type chaîne :
    * quelle opération réalise l'opérateur "+" dans ce cas ?

    il aditionne les opérandes pour faire une valeur composée

    * quel est le résultat de l'opération ?

    quatrecinq

- 4 est de type chaîne et 5 est de type nombre :
    * quelle opération réalise l'opérateur "+" dans ce cas ?

        il aditionne les opérandes pour faire une valeur composée même si c'est un chiffre et un mot

    * quel est le résultat de l'opération ?

    quatre5

- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?

    Erreur car l'éditeur/ la console s'attend à une autre valeur, notamment un ;
*/


// Cas 1 : 4 et 5 sont toutes deux de type nombres

console.log(4+5);

// Cas 2 : 4 et 5 sont toutes deux de type chaîne

console.log("quatre" + "cinq");

// Cas 3 : 4 est de type chaîne et 5 est de type nombre

console.log("quatre" + 5);

// Cas 4 : Entourer l'expression (VALEUR OPÉRANDE VALEUR) de guillemets

console.log"("quatre" + 5)";
/*****************************
 * CODING CHALLENGE 1
 */

// Mark et John veulent comparer leur BMI (Indice de masse corporelle),
// qui est calculé en utilisant la formule :
// BMI = poids / taille^2 = poids / (taille * taille).
// N.B. Le poids est en kg et la taille est en mètres.
//
// 1. Stockez le poids et la taille de Mark et de John dans des variables.
// 2. Calculez le BMI de chacun.
// 3. Créez une variable booléenne qui contient l'information de savoir
//    si le BMI de Mark est plus élevé que celui de John.
// 4. Imprimez une chaîne de caractères dans la console contenant la
//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de
//    Mark est plus élevé que celui de John ? true").
//
// BONNE CHANCE 😀

const poidsMark= 79;  // instruction , déclaration et initialisation constante
const poidsJohn= 103;
const tailleMark= 1.75;
const tailleJohn = 2.0; // ≠ utiliser , utiliser . tjs!


const bmiMark = poidsMark/ (tailleMark*tailleMark);
// const bmiMark = poidsMark/ (Math.pow(tailleMark, y:2);
const bmiJohn = poidsJohn/ (tailleJohn*tailleJohn);

const isMarkBiggerThanJohn =bmiMark > bmiJohn;

console.log("Est-ce que le BMI de Mark est plus élevé que celui de John ?" + isMarkBiggerThanJohn);
//console.log(`Est-ce que le BMI de Mark est plus élevé que celui de John ? ${isMarkBiggerThanJohn}`);


if (isMarkBiggerThanJohn){
    console.log("Mark a un BMI plus élevé que celui de John.");
    console.log("Mark (BMI) : " + Math.trunc(bmiMark));
    //console.log("Mark (BMI) : " + Math.ceil(bmiMark));
    //console.log("Mark (BMI) : " + Math.floor(bmiMark));
} else {
        console.log("John a un BMI plus élevé que celui de Mark.");

    }






// VERIFIER Ce CODE SUIVANT

if (bmiMark> bmiJohn){
    console.log("Mark a un BMI plus élevé que celui de John.");
    if(bmiMark<18){
    console.log( "Mark (BMI < 25) : " + Math.trunc(bmiMark));
    } else{
        if (bmiMark<25){
            if(bmiMark<18){
                console.log( "Mark (18>BMI < 25) : " + Math.trunc(bmiMark));
        }else {
            if (bmiMark<35){
                    console.log("Mark (BMI < 35) : " + Math.trunc(bmiMark));
                } else{
                        console.log( "Mark (BMI < 25) : " + Math.trunc(bmiMark));
            }
        }
    }
        else {
            console.log("John a un BMI plus élevé que celui de Mark.");}
}




if (isMarkBiggerThanJohn){
    console.log("Mark a un BMI plus élevé que celui de John.");
} else {
    if (poidsJohn>100){
        console.log("Aie");
}else {
    console.log("John a un BMI plus élevé que celui de Mark.");
    }
}


if (isMarkBiggerThanJohn){
    console.log("Mark a un BMI plus élevé que celui de John.");
} else if (poidsJohn>100){
    console.log("Aie");
}else {
    console.log("John a un BMI plus élevé que celui de Mark.");
}



/*if (){

} else{

}*/



/*/***************************** * CODING CHALLENGE 1 */// Mark et John veulent comparer leur BMI (Indice de masse corporelle),// qui est calculé en utilisant la formule :// BMI = poids / taille^2 = poids / (taille * taille).// N.B. Le poids est en kg et la taille est en mètres.//// 1. Stockez le poids et la taille de Mark et de John dans des variables.// 2. Calculez le BMI de chacun.// 3. Créez une variable booléenne qui contient l'information de savoir//    si le BMI de Mark est plus élevé que celui de John.// 4. Imprimez une chaîne de caractères dans la console contenant la//    variable de l'étape 3 (Quelque chose du genre "Est-ce que le BMI de//    Mark est plus élevé que celui de John ? true").//// BONNE CHANCE 😀
// const poidsMark = 80;
// const tailleMark = 1.8;
// const poidsJohn = 70;
// const tailleJohn = 1.8;
// const bmiMark = poidsMark / (tailleMark * tailleMark);
// const bmiJohn = poidsJohn / (tailleJohn * tailleJohn);
// const isBmiMarkBiggerThanJohns = bmiMark > bmiJohn;// false
// console.log(`BMI Mark : ${bmiMark}`);
// console.log(`BMI John : ${bmiJohn}`);
// if (bmiMark > bmiJohn) {
// console.log('Le BMI de Mark est plus élevé que celui de John');
//
// if (bmiMark <= 18) {
// console.log('Ton (Mark) BMI est <= 18.');
// } else if (bmiMark <= 25) {
// console.log('Ton (Mark) BMI est  [19-25]');
// } else if (bmiMark <= 35) {
// console.log('Ton (Mark) BMI est  [26-35]');
// } else {
// console.log('Ton (Mark) BMI est  >35');
// }    } else if (bmiJohn === bmiMark) {
// console.log('Le BMI de Mark est le même que celui de John');}
// else {    console.log('Le BMI de John est plus élevé que celui de Mark');
// if (bmiJohn <= 18) {
// console.log('Ton (John) BMI est <= 18.');
// } else if (bmiJohn <= 25) {
// console.log('Ton (John) BMI est  [19-25]');
// } else if (bmiJohn <= 35) {
// console.log('Ton (John) BMI est  [26-35]');
// } else {
// console.log('Ton (John) BMI est  >35');
// }
// }*/

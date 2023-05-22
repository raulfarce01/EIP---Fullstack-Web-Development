// Ejercicio 1
console.log("🎷 ~ Exercise 1 ~ 🎷");

function sumatorio(num){
    let total = 0; 
    for(let i = num-1; i > 0; i--){
        total += i;
        //console.log("🚀 ~ file: index.js:8 ~ sumatorio ~ total:", num)
    }

    return total;
}

console.log(sumatorio(5));
console.log(sumatorio(10));
console.log(sumatorio(200));

// Ejercicio 2
console.log("\n💕 ~ Exercise 2 ~ 💕");

function calculateSum(numeros){
    let positivos = 0;
    let sumNeg = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] >= 0){
            positivos++;
        }else{
            sumNeg += numeros[i];
        }
    }

    let final = [positivos, sumNeg];

    return final;
}

console.log(calculateSum([0, 3, -2, -5, 4]));
console.log(calculateSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

// Ejercicio 3
console.log("\n🥰 ~ Exercise 3 ~ 🥰");

function removeSpaces(word){

    return word.split(' ').join('');

}

console.log(removeSpaces("Hello my name is Raúl"));
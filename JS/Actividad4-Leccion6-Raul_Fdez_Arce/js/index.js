// Ejercicio 1
console.log("🎷 ~ Exercise 1 ~ 🎷");

// @param nombres ARRAY
function hello(names){
    names.map((name) => {
        console.log("Hello " + name);
    });
}

let names = ["Raúl", "Elena", "Iván", "Samuel"];
hello(names);

// Ejercicio 2
console.log("\n💕 ~ Exercise 2 ~ 💕");

const helloArrow = (names) => {
    names.map((name) => {
        console.log("Hello " + name);
    });
}

helloArrow(names);

// Ejercicio 3
console.log("\n🥰 ~ Exercise 3 ~ 🥰");

function sum(op1, op2){
    console.log(+op1 + +op2);
}

sum(5, 3);
sum("5", 3);
sum(5, "3");
sum("5", "3");

console.log("-----------FIN SUM-----------------");

function difference(op1, op2){
    console.log(+op1 - +op2);
}

difference(5, 3);
difference("5", 3);
difference(5, "3");
difference("5", "3");

console.log("-----------FIN DIFF-----------------");

function multiply(op1, op2){
    console.log(+op1 * +op2);
}

multiply(5, 3);
multiply("5", 3);
multiply(5, "3");
multiply("5", "3");

console.log("-----------FIN MULT-----------------");

function calculate(op1, op2, operator){
    operator(op1, op2);
}

calculate(5, 3, sum);
calculate("5", 3, difference);
calculate(5, "3", multiply);
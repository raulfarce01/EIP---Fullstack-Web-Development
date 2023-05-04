// Ejercicio 1 y 2
console.log("1️🎷|💕 ~ Exercise 1 & 2 ~ 💕|🎷");


var sentence = "Raúl Fernández Arce is hand-some :v x.x";
console.log("🚀 ~ file: index.js:4 ~ sentence:", typeof sentence);
var age = 21;
console.log("🚀 ~ file: index.js:5 ~ age:", typeof age);
var isHandsome = false;
console.log("🚀 ~ file: index.js:6 ~ isHandsome:", typeof isHandsome);

//Ejercicio 3
console.log("\n🥰 ~ Exercise 3 ~ 🥰");

console.log(sentence.length);

//Ejercicio 4
console.log("\n🍀 ~ Exercise 4 ~ 🍀");

var hehe = "";

var add = sentence.slice(0, 1);
console.log("🚀 ~ file: index.js:19 ~ add:", add)
hehe+=add;

add = sentence.slice(-10, -9);
console.log("🚀 ~ file: index.js:23 ~ add:", add)
hehe+=add;

add = sentence.slice(-3, -2);
console.log("🚀 ~ file: index.js:27 ~ add:", add)
hehe+=add;

add = sentence.slice(-15, -14);
console.log("🚀 ~ file: index.js:31 ~ add:", add)
hehe+=add;

add = sentence.slice(-14, -13);
console.log("🚀 ~ file: index.js:35 ~ add:", add)
hehe+=add;

add = sentence.slice(-15, -14);
console.log("🚀 ~ file: index.js:39 ~ add:", add)
hehe+=add;

console.log(hehe);
console.log(sentence);

//Ejercicio 5
console.log("\n5️⃣ ~ Exercise 5 ~ 5️⃣");

var ex5 = age.toExponential();
console.log("🚀 ~ file: index.js:48 ~ age:", age);
console.log("🚀 ~ file: index.js:48 ~ ex5:", ex5);

// Ejercicio 6
console.log("\n🔯 ~ Exercise 6 ~ 🔯");

var ex6 = isHandsome.toString();
console.log("🚀 ~ file: index.js:54 ~ isHandsome:", typeof isHandsome, isHandsome);
console.log("🚀 ~ file: index.js:54 ~ ex6:", typeof ex6, ex6);

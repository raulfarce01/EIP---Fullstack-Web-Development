// Ejercicio 1 y 2
console.log("🎷 ~ Exercise 1 ~ 🎷");

const House = {
    color: "red",
    numberOfWindows: 80,
    isVacationHouse: false,
    why: "because I'm"
}

console.log(House);

console.log("\n💕 ~ Exercise 2 ~ 💕");

console.log("🚀 My house is ", House.color, ", has " , House.numberOfWindows, " windows and", House.isVacationHouse ? "is" : "is not", "a vacation house", House.isVacationHouse ? House.why+" rich :)" : House.why+" poor :(");

//Ejercicio 3
console.log("\n🥰 ~ Exercise 3 ~ 🥰");

Object.freeze(House);
console.log("Let it gooooo 🧊");

//Ejercicio 4
console.log("\n🍀 ~ Exercise 4 ~ 🍀");

var fruits = ["Pear", "Apple", 16, "JS is funny", false, "I create an array and it has all types of data :)"];
console.log("🚀 ~ file: index.js:26 ~ fruits:", fruits);

//Ejercicio 5
console.log("\n5️⃣ ~ Exercise 5 ~ 5️⃣");

console.log(fruits[1]);

// Ejercicio 6
console.log("\n🔯 ~ Exercise 6 ~ 🔯");

fruits.push(House);
console.log("🚀 ~ file: index.js:38 ~ fruits:", fruits)

console.log(fruits.pop());

console.log(fruits.length);
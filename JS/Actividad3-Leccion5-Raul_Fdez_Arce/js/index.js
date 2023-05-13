// Ejercicio 1
console.log("🎷 ~ Exercise 1 ~ 🎷");

function showOddNumbers(){
    for(let i = 100; i < 500; i++){
        if(i%2 != 0){
            console.log(i);
        }
    }
}

showOddNumbers();

// Ejercicio 2
console.log("\n💕 ~ Exercise 2 ~ 💕");

function pickFruit(fruit){
    fruitCaps = fruit.toUpperCase()
    if(fruitCaps === "ORANGE" || fruitCaps === "BANANA"){
        console.log("Hmmm... delicious");
    }else if(fruitCaps === "MELON"){
        console.log("This is my favourite fruit");
    }else if(fruitCaps === "APPLE"){
        console.log("Not a fan :(");
    }else{
        console.log("wtf is that, bro?");
    }
}

pickFruit("bAnaNA");
pickFruit("applE");
pickFruit("Melon");
pickFruit("orange");
pickFruit("WATERMELON");
pickFruit("KEKW");

//Ejercicio 3
console.log("\n🥰 ~ Exercise 3 ~ 🥰");

function checkVacationPlan(hasBeachHouse, degrees){
    if(hasBeachHouse && degrees > 20){
        console.log("Beach, here I come");
    }else if(!hasBeachHouse && degrees > 20){
        console.log("I guess I'll just die of heat in Madrid");
    }else{
        console.log("Happy to stay in Madrid (not true, it's never)");
    }
}

checkVacationPlan(true, 15);
checkVacationPlan(true, 69);
checkVacationPlan(false, -10);
checkVacationPlan(false, 85);
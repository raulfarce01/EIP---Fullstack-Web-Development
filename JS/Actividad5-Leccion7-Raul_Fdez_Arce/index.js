// Ejercicio 1
console.log("🎷 ~ Exercise 1 ~ 🎷");

function sayHello(isFriend = true){
    isFriend ? grettings = "Hello Friend" : grettings = "Go Away Enemy";

    console.log(grettings);
}

sayHello();
sayHello(false);

// Ejercicio 2
console.log("\n💕 ~ Exercise 2 ~ 💕");

function sayHelloInterval(){
    console.log("Hola");
}

setInterval(sayHelloInterval, 2000);

// Ejercicio 3
console.log("\n🥰 ~ Exercise 3 ~ 🥰");

function helloFriend(name){
    if(name === undefined || name === null || name === "" || !typeof name === 'string' || typeof name === "number" || typeof name === "boolean"){
        console.log("Dime tu nombre, payaso");
    }else{
        console.log(`Hola, ${name}`);
    }
}

helloFriend();
helloFriend(false);
helloFriend("yo");
helloFriend(7);
helloFriend("");
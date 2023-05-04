var world = { continent: 'Asia', country: 'Japan' }

// 1. quiero ver en la consola -> "Japan"

world["country"];
world.country



var myPerson = {
  name: 'Roxana',
  age: 30
}
var desiredProperty = "name"

// 2. quiero ver en la consola -> "Roxana" (2 veces, usando las 2 formas de acceder)
// al valor de un objeto

myPerson["name"]
myPerson.name
myPerson[desiredProperty]

// 3. decidi que no quiero que mi edad sea parte del objeto. Borra age y muestra el
// objeto myPerson

delete myPerson.age
myPerson


var informationNeeded = "IBAN"

var person = {
  name: 'Roxana',
  iban: 'ESX090XXXX'
}

// 4. quiero ver en la consola -> "ESX090XXXX" (2 veces, usando las 2 formas de acceder)
// al valor de un objeto

person[informationNeeded.toLowerCase()]
person.iban


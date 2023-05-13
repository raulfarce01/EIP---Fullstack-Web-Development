// PRIMITIVES - son inmutables 
// STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, BIGINT, SYMBOL

// OBJECTS
let user = {}
user.name = 'Roxana'
// delete user.name
console.log(user.name)
console.log(user["name"])
let users = []


// Ejercicio que sale en la certificacion
// const cardinalPoints = ["North", "South", "East", "West"]

// push() - ["North", "South", "East", "West", "NE"]
// shift() - ["South", "East", "West", "NE"]
// unshift() - ["North", "South", "East", "West", "NE"]
// pop() - ["North", "South", "East", "West"]

// Otros metodos de arreglos: map, filter, reduce

// VAR vs LET vs CONST
var name = "Roxana"
name = "Roxy"

var name = "Roxxaaaaana" // funciona y sobrescribe el valor inicial
console.log(name)

let surname = "Cestari"
surname = "Roxy" 
// let surname = "C" // error

const myName = "Roxy"
// myName = 'Rox' // error
// const myName // error

const myObj = {name: 'Roxana'}
myObj.age = 31 // funciona bien
// myObj = {} // error

// let y const son block scoped



// OPERADORES ARITMETICOS

// + - * / ** % ++ -- 

// 4/2 = 2, r=0 <- r es el resultado que obtenemos usando %, por ejemplo 4%2 -> 0
// 5/2 = 2, r=1
// 6/2 = 3, r=0
// 13/5 = 2, r=3 // por ejemplo, 13%5 -> 3




// OPERADORES DE COMPARACION
// < <= > >= == != === !==

// == -> no importa los tipos de datos; intenta convertir los valores al mismo tipo de datos
// === -> se fija en el tipo -> si no son del mismo tipo => false

// 5=="5" -> true
// 5 === "5" -> false

let person1 = { name: 'Roxana'}
let person2 = { name: 'Roxana'}
console.log("Person 1 and 2 are equal: " + (person1 === person2)) // false - no tienen la misma referencia

let person3 = person2 // creando objeto de esta forma, cualquier cambiar en un objeto, se refleja en el otro
console.log(person3, person2)
console.log(person2 === person3)

person3.age = 30
console.log("Person 3: ", person3)
console.log("Person 2: ", person2)

let person4 = Object.assign({}, person3) // crea un objeto nuevo - sin link al person3 - 
console.log(person3, person4)
person4.hello = 'hello'
console.log(person3, person4)


// OPERADORES LOGICOS
// || - OR
// && - AND
// ! - NOT

// TRUE || TRUE -> TRUE
// TRUE || FALSE -> FALSE
// TRUE && TRUE -> TRUE
// TRUE && FALSE -> FALSE
// FALSE && FALSE -> FALSE


// existen valores falsy (0, undefined, null etc) y truthy (la mayoria de los restos)




// OPERADORES DE ASIGNACION
// = asignar 
// == o === comparar

// += -= *= /= %= **=

// let a = 1
// a += 4 es equivalente a 
// a = a + 4

// a *= 2
// a = a * 2

// a **= 2
// a = a ** 2

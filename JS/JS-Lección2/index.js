// 1. HTML 
// 2. Aggarar data del usuario 
// 3. Algoritmo
// 4. Mostrarlo al usuario



// TIPOS DE DATOS
// 1. PRIMITIVAS - inmutables - no se pueden alterar
// 2. OBJECTS

// STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, BIGINT, SYMBOL

// STRING
let name = "Roxana"
let myName = 'Roxana'

let randomString = "jdfjdfjks343!!!343"
let shoppingList = "Tomate \n mango \n bread"
console.log(shoppingList)
let shoppingList2 = "Tomato \t mango"
console.log(shoppingList2)

let string1 = "When you use \\t"
console.log(string1)

let present = "Hello, I'm Roxana"
console.log(present)

let longText = "kgfjkdkjdkjfdskjdsjkkjdkjldskjgkjldgskjdskjdskjdjkk \
jdfskjdfkjdsfjkdfsjksdfkjfskjfskjkjfskjfskjfsjkfskjlfsjklfskjlfskjlfskjfsjk"

console.log(typeof name)

// NUMBER
let age = 31
let price = 3.5

console.log(typeof age)
console.log(typeof price)

let nn = 0/0 // NaN - Not a Number
console.log(typeof nn)

// BOOLEAN
let isOld = true //false
let hasKids = false //true

console.log(typeof isOld)

// BIGINT 
let bigIntExample = 10000n

// Symbol
let symbolExample = Symbol("symbol")

// undefined
let a
console.log(a)

// null
let b = null
console.log(b)

console.log("---------")
let exampleVar = "Roxana"
console.log(typeof exampleVar)
exampleVar = 4
console.log(typeof exampleVar)
exampleVar = true
console.log(typeof exampleVar)


// STRING
// propiedades
// length
let car = "Audi"
console.log(car.length)

// STRING
// metodos
// toUpperCase
let book = "The great gatsby"
let bookUpper = book.toUpperCase()
console.log(bookUpper)
console.log(book) 

// toLowerCase
let bookLower = book.toLowerCase()
console.log(bookLower)

// charAt
console.log(book.charAt(3))

// startsWith
console.log(book.startsWith("the"))

// endsWith
console.log(book.endsWith('gatsby'))

// replace
let nameBM = "Roxana Lorint"
let newName = nameBM.replace("Lorint", "Cestari")
console.log(newName)
console.log(nameBM)

// NUMBER
// propiedades
// MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER)

let var1 = 9007199254740992n
let var2 = 9007199254740993n

console.log(var1 == var2)
// NUMBER
// metodos
// isInteger
console.log(Number.isInteger(9.5))
console.log(Number.isInteger(9))


// toFixed
let longPrice = 3.5423
console.log(longPrice.toFixed(2))


// toString
console.log(longPrice.toString())


// BOOLEAN
// metodos
// toString

console.log(hasKids.toString())

// null, undefined - no tienen ni metodos, ni propiedades

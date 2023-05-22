// ES6

// JS - programming lang
// ECMAScript - un standard; las especificaciones de JS

// 1997
// ...
// ES5 2009 (strict mode, array methods etc)
// ES6 2015 (const / let, arrow fct etc)

// Babel https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DYUwLgBAhhC8ECYBQSDGB7AdgZ0gc3ADkAnOCACgEo4A-CAbwF8UMdJMoBbEbMgbQBEAJXQAPKBwEBdFADN0xch24R0siMp7V6SCBFbZ0oAHTB0eJVxCUkjIA&debug=false&forceAllTransforms=true&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env&prettier=false&targets=&version=7.21.8&externalPlugins=&assumptions=%7B%7D


// ES6
// String Interpolation

const firstName = 'Roxana'
const fullName = `${firstName} Cestari`
console.log(fullName)


// DEFAULT PARAM

const sum = (a,b) => {
  if(a === undefined && b === undefined) {
    return 0
  }
  return a+b
}

const sum2 = (a=0,b=0) => a + b

// console.log(sum(2,3))
// console.log(sum())

console.log(sum2(2,3))
console.log(sum2(3))

const getUpperCase = (name='') => {
  console.log(`Upper ${name} is ${name.toUpperCase()}`)
}

getUpperCase()


// DESTRUCTURING OBJECTS
const user = {
  name: 'Roxana',
  age: 31,
  sex: "F"
}

// const name = user.name
// es equivalente a 

const { name } = user
console.log(name)

// const age = user.age
const { age, sex } = user

const { bla = 'whatever' } = user
// console.log(bla)
// const bla = user.bla
// if bla is undefined, take default value // whatever

// DESTRUCTURING ARRAYS
const names = ["Roxana", "Ivan"]
// const rox = names[0]
// const ivan = names[1]

const [rox, ivan] = names
console.log(rox, ivan)

// SHORT HAND PROPERTY

// const patient = {
//   patientName: 'Ivan',
//   age: 20
// }

const patientName = "Ivan"
// const patient = {
//   patientName: patientName,
//   age: 20
// }
// es equivalente a 

const patient = {
patientName,
 age: 20
}


// ES2020
// OPTIONAL CHAINING
const person1 = {
  name: 'Roxana',
  car: {
    model: 'Ford',
    age: 2021
  }
}

const getInfo = (person) => { 
  console.log(`${person?.name} drives a ${person?.car?.model}`)
}

getInfo(person1)

const person2 = {
  name: 'Ivan'
}

getInfo(person2);


setTimeout(() => {
  console.log('3000 seconds have passed')
}, 3000)

// setInterval


// TERNARY OPERATOR
// condicion ? <true case> : <false case>


const hour = 10
let greetings = ''
if(hour < 14) {
  greetings = 'Good morning'
} else {
  greetings = 'Good afternoon'
}
console.log(greetings)


const greetings2 = hour < 14 ? 'Good morning' : 'Good afternoon'

console.log(greetings2)
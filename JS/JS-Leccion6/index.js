function sayHello(name) {
  console.log('Hello, '+ name)
  // function body
}

sayHello("Roxana")
sayHello("Ivan")
sayHello()
sayHello("Roxana", "Ivan")

function calculateSum(a,b) {
  const sum = a + b
  //console.log(sum)
  return sum;
  console.log('hello from the end of the world')
}

const mySum = calculateSum(2,3)
console.log(mySum)
// calculateSum(2,3)

const patient1 = {
  name: 'Pepito',
  surname: 'Fulanito',
  age: 10,
  medicine: ['Ibuprofen'],
  sex: 'M'
}

const patient2 = {
  name: 'Pepito2',
  surname: 'Fulanito2',
  age: 20,
  medicine: ['Paracetamol'],
  sex: 'F'
}

function showPatientData (patient) {
  console.log("My name is: " + patient.name + " " + patient.surname)
  console.log("I take " + patient.medicine.length)
  console.log(patient.sex)
  console.log("My age is " + patient.age)
}

showPatientData(patient1)

showPatientData(patient2)

function generateDocx() {
  console.log('Generating docx')
}

function generatePdf() {
  console.log('Generating pdf')
}

// function getReport() {
//   // algun calculdo complicado
//   // generar datos
//   //generateDocx()
//   generatePdf()
// }

// function getReport(reportGeneration) {
//   // algun calculdo complicado
//   // generar datos
//   reportGeneration()
// }

// getReport(generateDocx)
// getReport(generatePdf)

// FCT ANONIMAS

// (function(){
//   // body function
//   console.log('Annonymous fct')
// })()

// FUNCTION EXPRESSION

const annFct = function() {
  console.log('Annonymous fct')
}

annFct()

// ARROW FUNCTIONS
// () => {}
// // es equivalente a
// function() {}

const arrowFct = () => {
  console.log('I am an arrow fct')
}

arrowFct()

const calcSum = (a,b) => a+b
// es equivalente a
// const calcSum = function(a,b) { return a + b;}

console.log(calcSum(2,3))

// MAP / FILTER

const users = ["Roxana", "Ivan", "Pepito"]

// const usersMayuscula = users.map((item) => item.toUpperCase())

// console.log(usersMayuscula)

const usersMayuscula = users.map(function(item) {
  console.log('bla')
  return item.toUpperCase()
})
console.log(usersMayuscula)


// const usersMayuscula = users.map((item) => item.toUpperCase())

function showSum(a,b) {
  const c = a+b
  // return c
  // mostrar en HTML la variable c
}

const showSumResult = showSum(2,3)
console.log(showSumResult)

const numbers = [2,4,5,6]
// [3,5,6,7]

// const numberIncrement = numbers.map(function(i){
//   return i+1
// })


const incrementFct = (nr) => nr+1
const numberIncrement = numbers.map(incrementFct)
console.log(numberIncrement)


// [2,4,6]
const oddNumbers = numbers.filter((nr) => nr%2 === 0)
console.log(oddNumbers)

const getEvenNumbers = (numb) => numb % 2 !== 0
const evenNumbers = numbers.filter(getEvenNumbers)
console.log(evenNumbers)
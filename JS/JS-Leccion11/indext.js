// 1. Que es hoisting

// hoisting - interpretador moviendo la declaracion de variables y func al principio del scope

// variables 
// var

// console.log(a)
// var a = 5

// let y const
// console.log(b)
// let b = 5

// console.log(c)
// const c = 5

// function sayHello() {
//   console.log('Hello')
// }

// sayHello()

// function sayHello() {
//   console.log('Hey')
// }

// 2. Palabra THIS

// Dentro de un metodo de un objeto
// const myPerson = {
//   name: 'Roxana',
//   hello: function() {
//     console.log(`Hello ${this.name}`)
//   }
// }

// myPerson.hello()

// Dentro de una funcion
// function sayHello() {
//   console.log(this)
// }

// sayHello()


// Dentro de un arrow function
// const myPerson = {
//   name: 'Roxana',
//   hello: () => {
//     console.log(`Hello ${this.name}`)
//   }
// }

// myPerson.hello()

// 3. Closure / Clojure

function sayHello() {
    const greetings = "Hi"
    return function() {
      console.log(greetings)
    }
  }
  
  const sayGreeting = sayHello()
  sayGreeting()
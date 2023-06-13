// const roxana = {
//   name: 'Roxana',
//   age: 31,
//   teach: function() {
//     console.log('I teach')
//   }
// }

// const ivan = {
//   name: 'Ivan',
//   age: 34,
//   teach: function() {
//     console.log('I teach')
//   }
// }

// const manu = {
//   name: 'Manu',
//   age: 30,
//   teach: function() {
//     console.log('I teach')
//   }
// }

// roxana.teach()


// CONSTRUCTOR FUNCTIONS

// function Teacher(teacherName, teacherAge, teacherGender) {
//   this.name = teacherName;
//   this.age = teacherAge;
//   this.gender = teacherGender;
//   //this.teach2 = function() {}
// }

// const roxana = new Teacher('Roxana', 31, 'F')
// console.log(roxana)
// const ivan = new Teacher('Ivan', 34, 'M')
// console.log(ivan)

// ivan.isCSSTeacher = true
// console.log(ivan)

// console.log(roxana)

// const manu = new Teacher('Manu', 30, 'M')
// console.log(manu)

// Teacher.prototype.teach = function() {
//   console.log('I teach')
// }
// Teacher.prototype.isOld = false
// roxana.teach()

// console.log(Object.hasOwn(ivan, 'isOld'))
// console.log(Object.hasOwn(ivan, 'isCSSTeacher'))

// PROTOTYPE CHAINING

// console.log(roxana.toString())
// Teacher.prototype.toString = function() {console.log('this is my new string')}

// console.log(roxana.toString())


// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.hello = function() {
//   console.log('Hello')
// }

// function Teacher(name, age, gender, subject) {
//   Person.call(this, name, age, gender)
//   this.subject = subject
// }


// Teacher.prototype = Object.create(Person.prototype)


// const roxana = new Teacher('Roxana', 31, 'F', 'JS')
// console.log(roxana)
// roxana.hello()


// ES2015 - class // sugar coating

class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    
    hello() {
      console.log('Hello')
    }
  }
  
  const p1 = new Person('Person1', 20, 'F')
  p1.hello()
  
  class Teacher extends Person {
    constructor(name, age, gender, subject) {
      super(name, age, gender);
      this.subject = subject
    }
    teach() {
      console.log('I teach')
    }
  }
  
  const roxana = new Teacher('Roxana', 31, 'F', 'JS')
  console.log(roxana)
  roxana.teach()
  roxana.hello()
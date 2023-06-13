// Ejercicio 1
console.log("🎷 ~ Exercise 1 ~ 🎷");

class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    
    hello() {
      console.log(`Hello. My name is ${this.name}, I'm ${this.age} and I'm ${this.gender=="M" ? "male" : "female"}`)
    }
  }
  
  class Teacher extends Person {
    constructor(name, age, gender, subject) {
      super(name, age, gender);
      this.subject = subject
    }
    teach() {
      console.log('I teach')
    }
  }

  class Student extends Person {
    constructor(name, age, gender, enrolledClass){
        super(name, age, gender);
        this.enrolledClass = enrolledClass;
    }
    learn(){
        console.log(`I'm learning ${this.enrolledClass}`);
    }
  }


const roxana = new Teacher('Roxana', 31, 'F', 'JS');
roxana.hello();

const raul = new Student('Raúl', 21, 'M', "how to survive in this shitty world");
raul.hello();
raul.learn();
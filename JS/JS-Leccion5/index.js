// if - else
// if(condicion) {
  // case condicion cumplido
// } else {
//   // case condicion incumplido
// }

const getResult = (grade) => {
  if(grade >= 5) {
    console.log('You passed')
  } else {
    console.log('You failed')
  }
}

getResult(4)
getResult(8)

// if else if

// <5 - Failed
// 5 - 6 -> Meh
// 7 - 8 -> Good
// 9 - 10 -> Excellent

const getDetailedResult = (grade) => {
  if(grade < 5) {
    console.log('You failed')
  } else if(grade <= 6) {
    console.log('Meh')
  } else if(grade <= 8) {
    console.log('Good')
  } else {
    console.log('Excellent')
  }
}

getDetailedResult(7)
getDetailedResult(10)


// SWITCH
const getDetailedResultSwitch = (grade) => {
  switch(grade) {
    case 5:
    case 6:
      console.log('Meh');
      break;
    case 7:
    case 8:
      console.log('Good');
      break;
    case 9:
    case 10:
      console.log('Excellent');
      break;
    default:
      console.log('You failed')
  }
}

getDetailedResultSwitch(7.5)
getDetailedResultSwitch(2)


// FOR
const cars = ["Audi", "Opel", "Toyota", "BMW"]
// "Audi"



for(let i=0; i<cars.length; i++) {
  console.log(cars[i])
}

// i = 0
// 0 < 4 (true)
// console.log

// i = 1
// 1 < 4 (true)
// console.log

// i = 2
// 2 < 4 (true)
// console.log

// i = 3
// 3 < 4 (true)
// console.log()

// i = 4
// 4 < 4 (false) -> sale

for(let i=2; i<cars.length; i+=2) {
  console.log(cars[i])
}
 
// i = 2
// 2 < 4 (true)
// console.log(Toyota)

// i = 4
// 4 < 4 (false)

// for ... of
// for ... in 

for(index in cars) {
  console.log("car: ", cars[index])
}

console.log("for. ... of")
for(car of cars) {
  console.log(car)
}


// while
let i = 0
while(i > 0) {
  console.log(i)
  i++
}

// do while
let j = 0
do {
  console.log('do')
  j++
} while (j>0)
  
  
  
const getOddNumbers = (numbers) => {
   const oddNumbers = [];
   for(numb of numbers) {
     if(numb % 2 !== 0) {
       oddNumbers.push(numb);
     }
   }
   return oddNumbers
 }
 
 getOddNumbers([2,3,4,5,6]) // [3,5]
 
 const users = ["Ivan", "Roxana", undefined, "Pepito", "", 0]
 
 const getRealUsers = (users) => {
   const realUsers = [];
   for(user of users) {
     if(user) {
       realUsers.push(user)
     }
   }
   return realUsers
 }
 
 console.log(getRealUsers(users)) // ["Ivan", "Roxana", "Pepito"]
 


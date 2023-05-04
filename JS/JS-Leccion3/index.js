// OBJECTS

// crear objetos usando object literal
let room = {
    width: 3,
    paintColor: 'red',
    isCeilingIncluded: true,
    4: 'rox'
  }
  
  // acceder al valor de una propiedad de un objeto
  // notacion por punto
  console.log(room.paintColor)
  console.log(room.width)
  
  // notacion por []
  console.log(room["paintColor"])
  let var1 = "paintColor"
  console.log(room[var1])
  console.log(room[2+2])
  
  let emptyRoom = {} // emptyRoom = new Object()
  
  // anadir propiedades
  
  let room2 = {}
  room2.paintColor = "blue"
  console.log(room2)
  room2.paintColor = "pink"
  console.log(room2)
  
  // borrar propiedades
  delete room2.paintColor
  console.log(room2)
  
  console.log(room2.bla)
  
  // METODOS
  console.log(Object.keys(room))
  console.log(Object.keys(room2))
  
  console.log(Object.values(room))
  console.log(Object.values(room2))
  
  Object.seal(room)
  room.bla = "bla"
  delete room.width
  room.width = 6
  console.log(room)
  
  console.log("object is sealed: " + Object.isSealed(room))
  
  Object.freeze(room2)
  room2.bla = "bla"
  //delete room2.paintColor
  room2.paintColor = "orange"
  console.log(room2)
  
  
  
  // ARRAYS
  // crear un arreglo usando ARRAY LITERAL
  let cars = ["Audi", "BMW", "Opel"]
  console.log(cars)
  
  let patient = {
    age: 30,
    height: 150,
    name: 'John',
    lastName: 'Fulanito',
    // sexo: 'M'
    // isFemale: true,
    sex: 1,
    allergies: ["polen"]
  }
  
  
  let arr = new Array(1, 2, 5)
  console.log(arr)
  let arr2 = new Array(2)
  console.log(arr2)
  
  // acceder a un elemento del arreglo
  console.log(cars[1])
  
  // cambiar un elemento del arreglo
  cars[1] = "Toyota"
  console.log(cars)
  
  // PROPIEDADES
  // length
  console.log(cars.length)
  console.log(arr2.length)
  
  
  
  // METODOS
  cars.push("BMW")
  console.log(cars)
  
  let lastItem = cars.pop()
  console.log(cars)
  
  // shift
  cars.shift()
  console.log(cars)
  
  // unshift
  cars.unshift("first car")
  console.log(cars)
  
  
  
  
  
  
  
  
  
  
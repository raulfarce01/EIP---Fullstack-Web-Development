// 1.
// Crea una funcion que
//  - reciba una palabra y un letra como params
//  - devuelva el indice de donde se encuentra la letra en la palabra


const getLetterIndex = (word, letter) => {
    for(let i=0; i<word.length; i++) {
      if(word.charAt(i) === letter) {
        return i
      }
    }
    return "letter does not exist"
  }
  
  console.log(`Index of letter o in "roxy" is: ${getLetterIndex("roxy", "o")}`) // 1
  console.log(`Index of letter o in "roxy" is: ${getLetterIndex("roxy", "y")}`) // 3
  console.log(`Index of letter o in "roxy" is: ${getLetterIndex("roxy", "e")}`) // 3
  
  const getLetterIndex2 = (word, letter) => {
    return word.indexOf(letter)
  }
  
  console.log(`Index of letter o in "roxy" is: ${getLetterIndex2("roxy", "o")}`) // 1
  console.log(`Index of letter o in "roxy" is: ${getLetterIndex2("roxy", "y")}`) // 3
  console.log(`Index of letter o in "roxy" is: ${getLetterIndex2("roxy", "e")}`) // 
  
  
  // 2.
  // Crea una funcion que
  // - reciba una palabra
  // - devuelva true o false, dependiendo de si la palabra es un palindromo
  
  
  const isPalindrome = (word) => {
    for(let j=0; j<word.length; j++) {
      if(word.charAt(j) !== word.charAt(word.length-j-1)) {
         return false
      }
    }
    return true
  }
  
  console.log(`ana is palindrome? ${isPalindrome("ana")}`)
  console.log(`money is palindrome? ${isPalindrome("money")}`)
  
  
  
  // 3.
  // Crea una funcion que
  // - reciba una palable y una letra como parametro
  // - devuelva cuantas veces aparece la lentra dentro de la palabra
  
  const getNrOfTimes = (word, letter) => {
    let nrOfTimes = 0
    for(let i=0; i<word.length; i++) {
      if(word.charAt(i) === letter) {
        nrOfTimes++
      }
    }
    return nrOfTimes
  }
  
  console.log(getNrOfTimes('roxana', 'a')) // 2
  console.log(getNrOfTimes('roxana', 'n')) // 1
  
  
  // 4.
  // Crea una funcion que 
  // - reciba una palabra como parametro
  // - devuelva las letras que existen en la palabra y cuantas veces aparecen
  
  // ["item2", "item3"]
  // objects & arrays
  
  // objLetters = {
  // a: 2,
  // r: 1
  //}
  
  // objLetter.a -> 2
  // objLetter.c -> undefined
  
  const getNrOfLetterInWord = (word) => {
    let objLetters = {}
    for(letter of word) {
      if(objLetters[letter] === undefined) {
        console.log('first time')
        objLetters[letter] = 1
      } else {
        console.log('second time')
        objLetters[letter]++
      }
    }
    console.log(objLetters)
  }
  
  getNrOfLetterInWord('roxana') // r->1; o->1; x->1 a->2 n->1
  
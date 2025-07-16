//  let number = Math.ceil(3.8567)
// console.log(number)
/*

let randomNumber = Math.floor(Math.random() * 7)

console.log(randomNumber)




What does Math.random() do?

Your answer: 

// Try to modify the expression so that we get a range from 1 to 6
let randomNumber = Math.ceil( Math.random() * 6 )

console.log(randomNumber)

*/


function getRandomCard(){
    // if 1     -> return 11
   // if 11-13 -> return 10
   let randomNumber = Math.floor(Math.random() * 13) + 1;
   if(randomNumber === 1 ){return 11}
   if(randomNumber === 11 || randomNumber === 12 || randomNumber === 13) {return 10}
   return randomNumber
}

let answer = getRandomCard()
console.log(answer)
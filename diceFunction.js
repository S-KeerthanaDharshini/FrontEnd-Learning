
// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice(){
    return Math.floor(Math.random() * 13) + 1
}
let randomNumber = rollDice()
console.log(randomNumber)

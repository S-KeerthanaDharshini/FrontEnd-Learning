const characters = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
"`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function makePassword(){
let password = ""
for(let i=0;i<5;i++){
let index = Math.floor(Math.random() * characters.length) 
    password+=characters[index]
}
return password
}

let password1=makePassword()
let password2=makePassword()
let password3=makePassword()
let password4=makePassword()
console.log(password1)
console.log(password2)
console.log(password3)
console.log(password4)
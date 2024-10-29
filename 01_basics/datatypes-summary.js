// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1654942164165498164153156n
console.log(bigNumber)

// Reference (Non-Primitive): 
// 3 types: Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"];
// console.log(heros)

let myObj = {
    name: "Hitesh",
    age: 22,
}
// console.log(myObj)

const myFunction = function(){
    console.log("Hello world")
}




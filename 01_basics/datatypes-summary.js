// Primitive

// 7 types : String, Number , Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 3456543576654356754n



// Reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Gaurav",
    age: 20
}

const myFunction = function(){
    console.log("Helllo world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
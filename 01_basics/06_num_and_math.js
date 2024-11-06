const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);  //output = [Number: 100]

// String mein change karna 
// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(1));
// console.log(typeof balance);


const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));




//++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.9));

// console.log(Math.min(4, 3, 7, 8));
// console.log(Math.max(4, 3, 7, 8));

console.log(Math.random());

// Minimum value 1 aayegi zero nahi aayegi
console.log((Math.random()*10) + 1);

console.log((Math.random()*10) + 1);

// Sabse choti value prapt ke floor ka use karte hai.
console.log(Math.floor(Math.random()*10) + 1);

// 10 and 20 ke beech ki value dikhana
const min = 10
const max = 20

// +1 isliye kyoki zero value na aaye
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
const name = "Ram"
const repoCount = 14

// console.log(name + repoCount + " Value");

// Best format concatenate
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ramesh')

//Index se character check karna 
console.log(gameName.charAt(2));

//character se index check karna.
console.log(gameName.indexOf('e'));

// .substring(0, 4) last value inclue nahi hoti
const newString = gameName.substring(0, 4)
console.log(newString);

// Slice() method mein negative value de sakte hai.
// negative value dene par ye last se start hota hai.

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
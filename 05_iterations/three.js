
// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello World";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// Map

const map = new Map();
map.set('IN', "India");
map.set('US', "United States");
map.set('UK', "United Kingdom");

// Map ko for in loop se print karna 
// ******** Important ********
// Map ko for in loop se print nahi kiya jata hai. kyoki map iterable nahi hota hai.
// for (const key in map) {
//     console.log(key);
// }

// console.log(map);

// Rule : [key, value] ye ek sysntax hota hai jisse key aur value ko print kar sakte hai.
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// Object par map method ka use karna
const myObj = {
    'game1': 'NFS', 
    'game2': 'Spiderman',
}

for (const [key, value] of myObj) {
    // console.log(key, ':-', value);
}

// Object ko directly aise access nahi kiya jata hai.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map ek call back function leta hai aur uska return type hota hai array.
//aur ye forEach se best hota hai.

// const newNums = myNums.map( (num) => num + 10);
// console.log(newNums);
// or

// const newNums = myNums.map( (num) => {
//     return num + 10
// });

// Chaining: iske according ek baar m kais method use kar sakte hai.

// pahle first method implement hoga uske baad second method mein implemented value jayegi fir

const newNums = myNums
        .map((num) => num + 10)
        .map((num) => num + 1)
        .filter((num) => num > 40);

console.log(newNums);
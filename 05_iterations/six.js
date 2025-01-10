// const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// For each kabhi return nahi karta.
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// });

// console.log(values);

// Important Note: filter bhi apne andar callback function leta hai, lekin uska return type hota hai array. forEach ka return type hota hai undefined.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4);
// jab scope banate hai return karne ke liye toh usko return karna padega.
// const newNums = myNums.filter((num) => {
//     return num > 4; 
// });


// const newNums = [];

// myNums.forEach((num) => {
//     if(num > 4) {
//         newNums.push(num);
//     }
// });

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')

// 1st method ko overrite kiya aur new method se filter kiya.
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'History';
})

console.log(userBooks);
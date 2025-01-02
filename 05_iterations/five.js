const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// forEach loop ka use karke
// forEach loop apne andar ek ek value ko access karta hai aur usko print karta hai.

// call back function mein function ka name pass karna zaroori nahi hota hai.
// coding.forEach(function (val) {
//     console.log(val);
// });

// Arrow function ka use karke
coding.forEach((item) => {
    // console.log(item);
});

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

// for each array ke item, index aur array ko access kar sakta hai.
coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});


// forEach ka best use case

const myCoding = [
    {
        name: 'JavaScript',
        type: 'Frontend',
    },
    {
        name: 'Python',
        type: 'Backend',
    },
    {
        name: 'Java',
        type: 'Backend',
    },
    {
        name: 'C++',
        type: 'System Programming',
    },
    {
        name: 'Ruby',
        type: 'Backend',
    },
];


myCoding.forEach((item) => {
    console.log(item.name);
});
// Object ke liye for in loop ka use karte hai.
const myObj = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple',
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

// For in loop ka use array par karna

const programming = ['Javascript', 'C++', 'Ruby', 'Swift by apple'];
for (const key in programming){
    console.log(programming[key]);
}
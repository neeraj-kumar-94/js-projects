// Dates

let myDate = new Date();
// console.log(myDate);

// String mein convert karna
// console.log(myDate.toString());
// console.log(myDate.toDateString());

// ctrl + space ::: visible more options
// console.log(myDate.toLocaleString());

// DECLARE DATE NEW CONCEPT
// let myCreatedDate = new Date(2023, 0, 23)

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)

// let myCreatedDate = new Date("2023-01-14")

// ACCORDING INDIA DATE FORMAT
let myCreatedDate = new Date("01-14-2023")

// JavaScript mein month zero se start hote hai.
// console.log(myCreatedDate.toDateString());

// console.log(myCreatedDate.toLocaleString());

// IMPORTANT FORMULA
// CURRENT TIME PRAPT KARNA

let myTimeStamp = Date.now()

// console.log(myTimeStamp)

// Date ko millisecond mein change karna
// console.log(myCreatedDate.getTime());

// Seonds mein change karna. 
// seconds mein change karne liye 1000 se divide karna hai aur math.floor/round karna hai.
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

// direct month/year ya date gate karna
console.log(newDate.getMonth());
console.log(newDate.getDay());

// Important
// toLocaleString() is method ke andar object define karte hai aur iske andar kai Parameter define kar sakte hai. 
newDate.toLocaleString('default', {
    weekday: "long"
})
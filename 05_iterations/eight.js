/*starting mein accumulator ki koi value nahin hoti hai toh uske liye humein ek initial value deni padti hai.
baad m (accumulator + currentValue) inke total ko apne andar leta hai. */

// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10

// class notes start

const myNums = [1, 2, 3];

// comma ke baad accumulator ki value hoti hai.
// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc}, currval: ${currval}`);
//     return acc + currval;
// }, 0)

// Arrow function se reduce method ka use karna.
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }        
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);


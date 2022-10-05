"use strict";
"use strict";
// an array of numbers for testing purposes
let numbers = [75, 77, 63, 89, 100];
let numbers2 = [22, 15, 222, 1, 66];
// an array of strings for testing purposes
let strings = ["Detroit", "Grand Rapids", "Kalamazoo", "Portland"];
// an array of objects for testing purposes
let objects = [
  {
    brand: "Apple",
    size: 15,
    price: 1600,
    touchscreen: false,
  },
  {
    brand: "Lenovo",
    size: 13,
    price: 1200,
    touchscreen: true,
  },
  {
    brand: "Dell",
    size: 13,
    price: 650,
    touchscreen: false,
  },
];

// === is for comparison
// = is for assignment / reassignment (updating)
// for ... of loop
let sum1 = 0;
for (const item of numbers) {
  sum1 += item;
}
console.log(sum1);

// for loop
// 3 expressions separate with ;
let sum2 = 0;
for (let index = 0; index < numbers.length; index++) {
  sum2 += numbers[index];
}
console.log(sum2);

// while loop
let sum3 = 0;
let index = 0;
while (index < numbers.length) {
  sum3 += numbers[index];
  index++;
}
console.log(sum3);

// with every array method:
// array.method()

// forEach
// returns undefined
// cannot break forEach
// params: callback fn
// (()=>{})=>{}
// callback fn is any function used as argument to another function
let sum4 = 0;
numbers.forEach((zebra) => {
  sum4 += zebra;
  //console.log("hello");
});
console.log(sum4);

let sum5 = 0;
numbers2.forEach((zebra) => {
  sum5 += zebra;
  //console.log("hello");
});
console.log(sum5);

const addUpSum = (arrayOfNumbers) => {
  let sum = 0;
  arrayOfNumbers.forEach((zebra) => {
    sum += zebra;
  });
  return sum;
};

console.log(addUpSum(numbers));
console.log(addUpSum(numbers2));

// filter (loop)
// params: callback fn
// callback fn's params: element name (zebra)
// returns new array
// we can return to that new array, using a condition after "return"
const filterTouchscreens = (arrayOfLaptops) => {
  const filteredArray = arrayOfLaptops.filter((laptop) => {
    return laptop.touchscreen === true;
  });
  return filteredArray;
};

console.log(filterTouchscreens(objects));

// // if(laptop.touchscreen == true){
//     // add laptop to new array
// }

const filterednumber8 = numbers.filter((element) => {
  return element.toString().includes("8");
});
console.log(filterednumber8);

const numbersLessThan100 = numbers2.filter((num) => {
  return num > 100;
});
console.log(numbersLessThan100);

const filteredEvenNumbers = (arrayOfNumbers) => {
  const evenNumbers = arrayOfNumbers.filter((number) => {
    // below, adding any element from OG array to new array IF it passes the test
    // the testis what is written after "return"
    return (number = number % 2 === 0);
  });
  return evenNumbers;
};

console.log(filteredEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(filteredEvenNumbers(numbers));
console.log(filteredEvenNumbers(numbers2));

// find method (loop - look @ every element, until it finds what it's looking for, then break) -- built in
// param: callback fn
// callback fn's params: element name (zebra)
// return value: first element passes test OR undefined

//method
const budgetLaptop = (arrayOfLaptops) => {
  //callback fn. method ((CF's params))
  return arrayOfLaptops.find((laptop) => {
    //{ return - condition}
    return laptop.price <= 1000;
  });
};
console.log();

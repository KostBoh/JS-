// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//     for (let i = min; i <= max; i++) {
//       numbers.push(i);
//     }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));





// function filterArray(numbers, value) {
//    // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);      
//     }
//   }
//  return newArray;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));





// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"));




// function getCommonElements(array1, array2) {
//   // Change code below this line
// const subArray = [];
//   for (let i = 0; i < array1.length; i +=1) {
//     if (array2.includes(array1[i])) {
//       subArray.push(array1[i]);
//     }
//   } 
// return subArray;
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));



// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
// for (const item of order) {
//   total += item;
// }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));




// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
//         for (const number of numbers){  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }  
//     return filteredNumbers;
//     // Change code above this line
//   }  
//   console.log(filterArray([1, 2, 3, 4, 5], 3));
//   console.log(filterArray([1, 2, 3, 4, 5], 4));
//   console.log(filterArray([1, 2, 3, 4, 5], 5));
//   console.log(filterArray([12, 24, 8, 41, 76], 38));
//   console.log(filterArray([12, 24, 8, 41, 76], 20));


// // Change code below this line
// const a = 3 % 3  ;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;


// function getEvenNumbers(start, end) {
//     // Change code below this line
//     const evenNumbers = [];
//    for (let i = start; i <= end; i +=1){
//         if (i % 2 === 0) {    
//             evenNumbers.push(i);
//         }
//     }
//         return evenNumbers;
 
 
//      // Change code above this line
//    }
//    console.log(getEvenNumbers(6, 12));
//    console.log(getEvenNumbers(3, 11));
//    console.log(getEvenNumbers(6, 12));
//    console.log(getEvenNumbers(8, 8));
//    console.log(getEvenNumbers(7, 7));
 

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);



// function findNumber(start, end, divisor) {
//     // Change code below this line
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         return i;
        
//       }
//     }
  
//     // Change code above this line
//   }
//   console.log(findNumber(2, 6, 5));
//   console.log(findNumber(8, 17, 3));
//   console.log(findNumber(6, 9, 4));
//   console.log(findNumber(16, 35, 7));









//   function includes(array, value) {
//     // Change code below this line
//     for (let i = 0; i < array.length; i +=1) {
//         if (array[i] === value){
//             return true;
//         }
        
//     }
//   return false;
//     // Change code above this line
//   }
// console.log(includes([1, 2, 3, 4, 5], 3));  
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));


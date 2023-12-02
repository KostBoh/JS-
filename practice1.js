// // // Напиши функцію, яка приймає масив чисел та повертає найбільше парне число з цього масиву. Якщо жодного парного числа немає, повертай нуль.

// const numbers = [3, 7, 12, 5, 9, 10, 15];

// const getMaxNumber = function (arr) {
//   let maxNumber = 0;
//   for (const item of arr) {
//     if (item % 2 === 0 && item > maxNumber) {
//       maxNumber = item;
//     }

//     console.log(item);
//   }
//   return maxNumber;
// };
// console.log(getMaxNumber(numbers));
// console.log(getMaxNumber([3, 11, 55, 43, 17]));



// // Напиши функцію, яка приймає масив рядків (слів) і повертає новий масив, який містить тільки ті слова, які мають непарну кількість літер.

// const words = ["яблуко", "банан", "апельсин", "персик", "слива"];

// function getSelectedWords(arr) {
//   const selectedWords = [];
//   for (const fruit of arr) {
//     if (fruit.length)
//   }
  
// }



// Напиши функцію, яка приймає рядок (наприклад, текст повідомлення чи фразу) і повертає true, якщо рядок містить як мінімум три слова, починаючи з літери "б", і false в іншому випадку.


// const text = "Багато бур'яну біля будинку.";
// function returnLetter(str, letter) {
//   const arr = str.split(' ');
//   let counter = 0;
//   for (const word of arr) {
//     if (word.toLowerCase().startsWith(letter)) {
//       counter++;
//       if (counter>=3) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(returnLetter(text, 'б'));



// const arr = (0, 1, 2, false, 'r')

// console.log(removalFalseValues(arr));

// function removalFalseValues(arr) {
// for (let i = arr.length -1; i >= 0; i--) {
//   if (!arr[i]) {
//     console.log(arr[i]);
//     arr.splice(i, 1);
//   }
// }  
// return arr;
// }





// // Створи функціюб яка приймає рядок та змінює регістр літер наступним чином: великі літери робляться малими, а малі  - великими.
// const word = "Hello, World!";

// function changeRegister(str) {
//   let resultStr = "";
//   for (const letter of str) {
//     resultStr += letter.toLowerCase() === letter ? letter.toUpperCase() : letter.toLowerCase();
//   }
//   return resultStr;
// }
// console.log(word);
// console.log(changeRegister(word));


// ---- task 7
// Створи дві функції: одна для кодування рядка,
// інша - для декодування.Кодування повинно працювати так:
//  кожен символ в рядку замінюється його ASCII - кодом, і
//  кожен код розділяється певним роздільником(наприклад,
//      тире).Декодування повинно виконувати зворотню операцію.

// const word = "Hello, World!";

// function coder(str) {
//   let result = [];
//   for (const letter of str) {
//     result.push(letter.charCodeAt(0));
//   }
//   return result.join("-");
// }

// function decoder(str) {
//   let arr = str.split("-");
//   let result = "";
//   for (const letter of arr) {
//     result += String.fromCharCode(letter);
//   }
//   return result;
// }
// const keyWord = coder(word);
// console.log(keyWord);
// console.log(decoder(keyWord));


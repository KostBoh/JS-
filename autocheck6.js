// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line

//   const {yesterday, today, tomorrow} = highTemperatures;

// //   const yesterday = highTemperatures.yesterday;
// //   const today = highTemperatures.today;
// //   const tomorrow = highTemperatures.tomorrow;

//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
//   console.log(meanTemperature);

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
//   const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// //   const yesterday = highTemperatures.yesterday;
// //   const today = highTemperatures.today;
// //   const tomorrow = highTemperatures.tomorrow;
// //   const icon = highTemperatures.icon;

//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
//   console.log(meanTemperature);

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
//   const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures

//   // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
//   console.log(meanTemperature);

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

//   for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }
//   console.log(hexColors);
//   console.log(rgbColors);

// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
//   const {
//     today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//   tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
// } = forecast;

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//     const {today: {low: todayLow, high: todayHigh},
// tomorrow: {low: tomorrowLow, high: tomorrowHigh} } = forecast;

//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }

//   console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
//   console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores, bestScore, worstScore);

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Change code below this line
//   const finalSettings = { ...defaultSettings, ...overrideSettings};
//   console.log(finalSettings);

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//   const {text} = data;
// const updateData = {
//     completed,
//     category: data.category || category,
//     priority: data.priority || priority,
//     text
// };
//     return updateData;
//     // Change code above this line
//   }
//   console.log(makeTask({}));
//   console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
//   console.log(makeTask({ category: "Finance", text: "Take interest" }));
//   console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
//   console.log(makeTask({ text: "Buy bread" }));

// // Change code below this line
// function add(...args) {
//     let sum = 0;
//     for (let i = 0; i < args.length; i +=1){
//         sum += args[i];
//     }
//     return sum;
//     // Change code above this line
//   }
//   console.log(add(15, 27));
//   console.log(add(12, 4, 11, 48));
//   console.log(add(32, 6, 13, 19, 8));
//   console.log(add(74, 11, 62, 46, 12, 36));

// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg>firstNumber){
//       total += arg;
//     }
//     }

//     return total;
//     // Change code above this line
//   }
//   console.log(addOverNum(50, 15, 27));
//   console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
//   console.log(addOverNum(15, 32, 6, 13, 19, 8));
//   console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// // Change code below this line
// function findMatches(arr, ...args) {
//     const matches = []; // Don't change this line
//   for (const num of args){
//     if (arr.includes(num)) {
//         matches.push(num);
//     }
//   }
//     // Change code above this line
//     return matches;
//   }
//   console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
//   console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
//   console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
//   console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],

//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     if (bookIndex !== -1) {
// this.books.splice(bookIndex, 1, newName);
//     }

//     // Change code above this line
//   },
// };
// // console.log(bookShelf.books);
// // bookShelf.updateBook("Haze", "Dungeon chronicles");
// // console.log(bookShelf.books);
// // bookShelf.updateBook("The last kingdom", "Dune");
// // console.log(bookShelf.books);

// const atTheOldToad = {
//   // Change code below this line
//   potions: [],

//   // Change code above this line
// };
// console.log(atTheOldToad);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions(){
//     return this.potions
//   }
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
// this.potions.push(potionName);
//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// const potionIndex = this.potions.indexOf(potionName);
//   this.potions.splice(potionIndex, 1);

//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// const potionIndex = this.potions.indexOf(oldName);
// if (potionIndex !== -1) {
//   this.potions.splice(potionIndex, 1, newName);
// }

//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const potionExists = this.potions.some(potion => potion.name === newPotion.name);
//     if (!potionExists) {
//       this.potions.push(newPotion);
//     } else {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.findIndex(potion => potion.name === potionName);

//     if (potionIndex !== -1) {
//       this.potions.splice(potionIndex, 1);
//       return this.potions;
//     } else {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//   },

//   updatePotionName(oldName, newName) {
//     const potionToUpdate = this.potions.find(potion => potion.name === oldName);

//     if (potionToUpdate) {
//       potionToUpdate.name = newName;
//     } else {
//       return `Зілля ${oldName} відсутнє в інвентарі!`;
//     }
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'));



// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] + value);
//     } else {
//     newNumbers.push(numbers[i]);
//   }
//   }
//   return newNumbers;

//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));



// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
    
//     order(pizzaName, onSuccess, onError) {
//       if (this.pizzas.includes(pizzaName)) {
//         return onSuccess(`Your order is accepted. Cooking pizza ${pizzaName}.`);
//       } else {
//         return onError(`Error! There is no pizza with a name ${pizzaName} in the assortment.`);
//       }
//     }
//   };
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return pizzaName;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return error;
//   }
  
//   // Method calls with callbacks
//   console.log(pizzaPalace.order("Smoked", makePizza, onOrderError)); // Повинен вивести: "Your order is accepted. Cooking pizza Smoked."
//   console.log(pizzaPalace.order("Four meats", makePizza, onOrderError)); // Повинен вивести: "Your order is accepted. Cooking pizza Four meats."
//   console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError)); // Повинен вивести: "Error! There is no pizza with a name Big Mike in the assortment."
//   console.log(pizzaPalace.order("Vienna", makePizza, onOrderError)); // Повинен вивести: "Error! There is no pizza with a name Vienna in the assortment."
  
  
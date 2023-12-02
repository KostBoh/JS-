/**
 * Task-1
 */

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
//   const result = makePizza();
//   const pointer = makePizza;
  


/**
 * Task-2
 */

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
//   }
//   console.log(makeMessage("Royal Grand", makePizza));
//   console.log(makeMessage("Ultracheese", deliverPizza));




/**
 * Task-3
 */

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
    
//   });





/**
 * Task- 4
 */

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




/**
 * Task-5
 */

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
  
//     orderedItems.forEach((item) => {totalPrice += item;});

//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //   totalPrice += orderedItems[i];
//     // }
  
//     // Change code above this line
//     return totalPrice;
//   }
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));




/**
 * Task-6
 */


// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line
//   numbers.forEach((number) => { 
//     if(number > value){
//         filteredNumbers.push(number);
//     }
//   });

//    // Change code above this line
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));
//   console.log(filterArray([1, 2, 3, 4, 5], 4));
//   console.log(filterArray([1, 2, 3, 4, 5], 5));
//   console.log(filterArray([12, 24, 8, 41, 76], 38));
//   console.log(filterArray([12, 24, 8, 41, 76], 20));



/**
 * Task-7
 */


// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line
//   firstArray.forEach((elem)=>{
//     if (secondArray.includes(elem)) {
//         commonElements.push(elem);
//     }

//   });
//     return commonElements;
//     // Change code above this line
//   }
//   console.log(getCommonElements([1, 2, 3], [2, 4]));
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));



/**
 *
 *  Task-8
 * 
 */



// const calculateTotalPrice = (quantity,pricePerItem) => quantity * pricePerItem;

//   console.log(calculateTotalPrice(5, 100));
//   console.log(calculateTotalPrice(8, 60));
//   console.log(calculateTotalPrice(3, 400));


/**
 * Task-9
 */


// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
//   // Change code above this line
//   console.log(calculateTotalPrice(5, 100));
//   console.log(calculateTotalPrice(8, 60));
//   console.log(calculateTotalPrice(3, 400));


/**
 * Task-10
 */


// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach((item)=> totalPrice += item);
  
//     return totalPrice;
//   }
//   // Change code above this line
//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));



/**
 * Task-11
 */


// // Change code below this line
// const  filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Change code above this line
//     return filteredNumbers;
//   };
//   console.log(filterArray([1, 2, 3, 4, 5], 3));
//   console.log(filterArray([1, 2, 3, 4, 5], 4));
//   console.log(filterArray([1, 2, 3, 4, 5], 5));
//   console.log(filterArray([12, 24, 8, 41, 76], 38));
//   console.log(filterArray([12, 24, 8, 41, 76], 20));



/**
 * Task-12
 */


// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Change code above this line
//     return commonElements;
//   }
  
//   console.log(getCommonElements([1, 2, 3], [2, 4]));
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
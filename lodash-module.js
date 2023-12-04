
// Import the lodash module
const _ = require('lodash');

// Example usage of lodash functions
const numbers = [1, 2, 3, 4, 5];

// Use the map function to double each number in the array
const doubledNumbers = _.map(numbers, (num) => num * 2);
console.log(doubledNumbers);

// Use the filter function to get only the even numbers from the array
const evenNumbers = _.filter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);

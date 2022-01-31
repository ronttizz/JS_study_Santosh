"use strict";

/**
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Use an arrow function (implicit return is optional).
/**
 * @param {number} value
 */

// function getPositiveTemperatures(array) {
//   return array.filter(function aboveZero(number) {
//     return number > 0;
//   });
// }

const getPositiveTemperatures = (array) => array.filter((number) => number > 0);

// Sample usage - do not modify

console.log(getPositiveTemperatures([-5, 12, 3])); // [-5]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [-3, -2]

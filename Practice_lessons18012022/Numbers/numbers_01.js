"use strict";

/**
Complete the function convertNumberToString such that it converts the number it receives into a string.

Tests:
returns a string
converts number to string

 * @param {number} number
 */
function convertNumberToString(number) {
    // let string = ' ' + number;
    // return string.substring(1);
    return number.toString();
}

// Sample usage - do not modify
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"
console.log(typeof convertNumberToString(11)); // "string"

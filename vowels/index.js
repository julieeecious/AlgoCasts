// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    if (typeof str !== 'string') throw 'Input not a string'
    // i - case insensitive
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}


// function vowels(str) {
//     // Handle exception
//     if (typeof str !== 'string') throw 'Input not a string'
//
//     let count = 0;
//
//     // Clean the string and To lower case
//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         // if (char === 'a' ||
//         //     char === 'e' ||
//         //     char === 'i' ||
//         //     char === 'o' ||
//         //     char === 'u' ) count++
//         if (['a','e','i','o','u'].includes(char)) count++
//     }
//     return count
// }

module.exports = vowels;

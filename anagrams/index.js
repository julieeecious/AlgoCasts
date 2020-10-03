// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA).split('').sort().join('') === cleanString(stringB).split('').sort().join('')
}

function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase()
}

// function anagrams(stringA, stringB) {
//     let hashmapA = {}
//     let hashmapB = {}
//
//     for (let char of stringA.replace(/[^\w]/g, "").toLowerCase()) {
//         hashmapA[char] = !hashmapA[char] ? 1 : hashmapA[char]++
//     }
//
//     for (let char of stringB.replace(/[^\w]/g, "").toLowerCase()) {
//         hashmapB[char] = !hashmapB[char] ? 1 : hashmapB[char]++
//     }
//
//     if (Object.keys(hashmapA).length !== Object.keys(hashmapB).length) return false
//
//     for (let char in hashmapA) {
//         if (hashmapA[char] !== hashmapB[char]) {
//             return false
//         }
//     }
//     return true
// }

module.exports = anagrams;

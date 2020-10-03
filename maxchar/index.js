// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let hashmap = {}
    for (let char of str) {
        hashmap[char] = hashmap[char] + 1 || 1

        // Tenory operation
        // hashmap[char] = !hashmap[char] ? 1 : hashmap[char]++
    }

    let max = 0
    let maxChar = ''
    for (let key in hashmap) {
        if (max < hashmap[key]) {
            max = hashmap[key]
            maxChar = key
        }
    }
    return maxChar
}

module.exports = maxChar;


// My Solution
// function maxChar(str) {
//     let hashmap = {}
//     for (let char of str) {
//         if (isNaN(hashmap[char])) {
//             hashmap[char] = 0
//         }
//         hashmap[char]++
//     }
//     Object.keys(hashmap).reduce((a,b) => hashmap[a] > hashmap[b] ? a : b)
// }
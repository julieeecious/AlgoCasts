// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Recursion
function pyramid(n, row = 0, stair = '') {
    // base case
    if (n === row) return

    if (stair.length === 2 * n - 1) {
        console.log(stair)
        return pyramid(n, ++row)
    }

    let midCol = Math.floor((2 * n - 1) / 2)
    stair += (midCol - row <= stair.length && stair.length <= midCol + row) ? '#' : ' '
    pyramid(n, row, stair)
}

// function pyramid(n) {
//     // handle non-positive number
//     if (isNaN(n) || n <= 0 || n > Number.MAX_VALUE) throw 'n is either not a number or less equal than 0'

//     for (let row = 0; row < n; row++) {
//         let stair = ""
//         for (let col = 0; col < 2 * n - 1; col++) {
//             let midCol = Math.floor((2 * n - 1) / 2)
//             stair += (midCol - row <= col && col <= midCol + row) ? '#' : ' '
//         }
//         console.log(stair)
//     }
// }

module.exports = pyramid;

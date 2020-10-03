// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n, row = 0, stair = '') {
    if (n === row) return

    if (n === stair.length) {
        console.log(stair)
        return steps(n, ++row)
    }

    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    steps(n, row, stair)
}


// Iterative
// function steps(n) {
//
//     for (let row = 0; row < n; row++) {
//         let stair = ''
//         for (let col = 0; col < n; col++) {
//              stair += col <= row ? '#' : ' '
//         }
//         console.log(stair)
//     }
//
// }


// My solution
// function steps(n) {
//     let str = ''
//     for (let i = 0; i < n; i++) {
//         str = str.trim() + '#'
//         for (let j = 0; j < n - i - 1; j++) {
//             str += ' '
//         }
//         console.log(str)
//     }
// }

module.exports = steps;

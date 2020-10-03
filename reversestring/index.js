// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // #1 Solution
    // return str.split('').reverse().join('')

    // #2 Solution ARRAY
    // let reversed = ''
    // for (let i = str.length; i >= 0; i--) {
    //     reversed += str.charAt(i)
    // }
    // return reversed

    // #3 Solution ARRAY
    // let reversed = ''
    // for (let char of str) {
    //     reversed = char + reversed
    // }
    // return reversed

    // #4 Solution Array helper
    return str.split('').reduce((rev, char) => char + rev, '')
}
reverse('hahaha')

module.exports = reverse;

equalDigitSum = (A) => {

    let hashmap = {}
    let max = -1

    // first pass
    for (let val of A) {
        let digit = digitSum(val)
        if (!hashmap[digit]){
            hashmap[digit] = [val]
        } else {
            hashmap[digit].push(val)
        }
    }

    // second pass
    for (let key in hashmap) {
        if (hashmap[key].length >= 2) {
            // sort the array by descending order
            if (hashmap[key].length > 2) hashmap[key].sort((a, b) => b - a)
            let sum = hashmap[key][0] + hashmap[key][1]
            max = Math.max(sum, max)
        }
    }

    return max
}

digitSum = (val) => {
    let sum = 0
    while (val) {
        sum += val % 10
        val = Math.floor(val / 10)
    }
    return sum
}

console.log(equalDigitSum([51,71,17,42])) // 93
console.log(equalDigitSum([42,33,60])) // 102
console.log(equalDigitSum([51,32,43])) // -1

//
// let max = 0
// // second pass
// for (let key in hashmap) {
//     if (key.length >= 2) max = Math.max(...hashmap[key], max)
// }
//
// let _A = []
// // loop through A and adds up digit
// for (let val of A) {
//     let digitSum = 0
//     while (val) {
//         digitSum += val % 10
//         val = Math.floor(val / 10)
//     }
//     _A.push(digitSum)
// }
//
// let B = []
// // find pair in _A
// for (let i = 0; i < _A.length; i++) {
//     for (let j = i+1; j < _A.length; j++) {
//         if (_A[i] === _A[j]) B.push(A[i]+A[j])
//     }
// }
//
// if (B.length <= 0) return -1
// else return Math.max(...B)
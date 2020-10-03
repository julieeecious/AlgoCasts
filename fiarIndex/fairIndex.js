// https://leetcode.com/discuss/interview-question/451422/microsoft-oa-2019-fair-indexes

function fairIndex(A, B) {

    let count = 0, tempA = 0, tempB = 0
    let sumA = A.reduce((a,b) => a + b, 0), sumB = B.reduce((a,b) => a + b, 0)

    for (let i = 0; i < A.length - 1; i++ ){
        tempA += A[i]
        tempB += B[i]

        if (sumA == 2 * tempA && sumB == 2 * tempB && tempA === tempB ) count++
    }
    return count
}


let A1 = [4,-1,0,3], B1 = [-2, 5, 0 ,3]
let A2 = [2,-2,-3,3], B2 = [0,0,4,-4]
let A3 = [4,-1,0,3], B3 = [-2,6,0,4]
let A4 = [3,2,6], B4 = [4,1,6]
let A5 = [1,4,2,-2,5], B5 = [7,-2,-2,2,5]


console.log(fairIndex(A1, B1))
console.log(fairIndex(A2, B2))
console.log(fairIndex(A3, B3))
console.log(fairIndex(A4, B4))
console.log(fairIndex(A5, B5))
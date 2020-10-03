// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    if (isNaN(n) || n <= 0) throw 'Invalid n'

    let results = [], counter = 1
    let startRow = 0, endRow = n - 1
    let startCol = 0, endCol = n - 1

    // create n empty subarrays in the result array
    for (let i = 0; i < n; i++) {
        results.push([])
    }

    while (startCol <= endCol && startRow <= endRow) {
        // Top Row
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter
            counter++
        }
        startRow++

        // Right Column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter
            counter++
        }
        endCol--

        // Bottom Row
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter
            counter++
        }
        endRow--

        // Start Column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter
            counter++
        }
        startCol++
    }
    return results
}

module.exports = matrix;

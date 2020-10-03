// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let queue = [root, 'stop']
    let counters = [0]
    while(queue.length > 1) {
        let temp = queue.shift()

        if (temp !== 'stop') {
            queue.push(...temp.children)
            counters[counters.length - 1]++
        } else {
            queue.push(temp)
            counters.push(0)
        }
    }
    return counters
}

module.exports = levelWidth;

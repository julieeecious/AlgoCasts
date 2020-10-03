// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) swap(arr, j, j+1)
        }
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }
        if (i !== min) swap(arr, i, min)
    }
    return arr
}

function mergeSort(arr) {
    if (arr.length === 1) return arr

    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    return  merge(mergeSort(left) ,mergeSort(right))
}

function merge(left, right) {
    // arguments are sorted arrays
    let results = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }
    return [...results, ...left, ...right]
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

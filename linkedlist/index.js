// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
        // if (!this.head) {
        //     let node = new Node(data)
        //     this.head = node
        // } else {
        //     let temp = this.head
        //     this.head = new Node(data)
        //     this.head.next = temp
        // }
    }

    size() {
        let count = 0
        let pointer = this.head
        //!pointer.next  <= WRONG!
        while(pointer) {
            count++
            pointer = pointer.next
        }
        return count
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let pointer = this.head
        while (pointer && pointer.next) {
            pointer = pointer.next
        }
        return pointer
    }
    clear() {
        this.head = null
    }
    removeFirst() {
        if (this.head) this.head = this.head.next
        else return
    }
    removeLast() {
        // when the list is empty
        if (!this.head) return
        // when the list has one element
        if (!this.head.next) {
            this.head = null
            return;
        }
        // when the list has more than one element
        let prev = this.head
        let curr = this.head.next
        while (curr.next) {
            prev = curr
            curr = curr.next
        }
        prev.next = null
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data)
        } else {
            let last = this.getLast()
            last.next = new Node(data)
        }
    }

    getAt(index) {
        if (!this.head) return null
        if (index >= this.size()) return null

        let curr = this.head
        let count = 0
        while (count !== index) {
            curr = curr.next
            count++
        }
        return curr
    }

    removeAt(index) {
        let size = this.size()
        if (!this.head || index >= size) return

        // first node
        if (index === 0) this.head = this.head.next

        // middle / last node
        if (index > 0 && index < size) {
            let prev = this.getAt(index - 1)
            let curr = this.getAt(index)
            prev.next = curr.next
        }
    }

    insertAt(data, index) {
        let size = this.size()
        if (size === 0) this.head = new Node(data)
        if (index === 0) this.insertFirst(data)
        if (index === size - 1 || index >= size) this.insertLast(data)

        if (index > 0 && index < size) {
            let prev = this.getAt(index - 1)
            let curr = this.getAt(index)
            let node = new Node(data, curr)
            prev.next = node
        }
    }

    forEach(fn) {
        let node = this.head
        let counter = 0
        while (node) {
            fn(node, counter)
            node = node.next
            counter++
        }
    }

    // Generator function
    *[Symbol.iterator]() {
        let node = this.head
        while (node) {
            yield node
            node = node.next
        }
    }
}

module.exports = { Node, LinkedList };

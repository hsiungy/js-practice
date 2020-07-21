function permute(str) {
    if (typeof str !== 'string') {
        return "Please enter a string"
    } else if (str.length === 1) {
        return str
    }

    let permutations = []
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (str.indexOf(char) !== i) {
            continue
        }
        let remainingChars = str.slice(0, i) + str.slice(i+1)
        for (let permutation of permute(remainingChars)) {
            permutations.push(char + permutation)
        }
    }

    return permutations
}

// console.log(permute(''))    // []
// console.log(permute('abc')) // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
// console.log(permute('aabc'))

function debounce(f, time) {
    let timeout;
    return function() {
        const functionCall = () => f.apply(this, arguments)
        clearTimeout(timeout)
        timeout = setTimeout(functionCall, time)
    }
}

// let a = () => console.log('foo')
// let b = debounce(a, 100)
// console.log(b())
// console.log(b())
// console.log(b()) // only this call should invoke a()

class LinkedList {
    constructor(head, ...tail) {
        this.head = head
        this.tail = null
        if (this.tail) {
            this.tail = new LinkedList(...tail)
        }
    }

    add(item) {
        if (this.tail) {
            this.tail.add(item)
        } else {
            this.tail = new LinkedList(item)
        }
    }

    has(item) {
        if (this.head === item) {
            return true
        }
        if (this.tail === null) {
            return false
        }
        return this.tail.has(item)
    }
}

// let list = new LinkedList(1, 2, 3)
// console.log(list.add(4))                           // undefined
// console.log(list.add(5))                           // undefined
// console.log(list.has(1))                           // true
// console.log(list.has(4))                           // true
// console.log(list.has(6))                           // false

class HashMap {
    constructor() {
        this.data = []
    }
    get(key) {
        let index = hash(key)
        let slot = this.data[index]
        if (!slot) {
            return undefined
        }
        for (let [k, v] of slot) {
            if (k === key) {
                return v
            }
        }
    }
    set(key, val) {
        let index = hash(key)
        if (!this.data[index]) {
            this.data[index] = []
        }
        let slot = this.data[index]
        let slotIndex = 0
        while (slot[slotIndex]) {
            if (slot[slotIndex][0] === key) {
                break
            }
            slotIndex++
        }
        slot[slotIndex] = [key, val]
    }
}

function hash(string) {
    return string
      .split('')
      .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}

// let map = new HashMap
// console.log(map.set('abc', 123))                   // undefined
// console.log(map.set('foo', 'bar'))                 // undefined
// console.log(map.set('foo', 'baz'))                // undefined
// console.log(map.get('abc'))                        // 123
// console.log(map.get('foo'))                        // 'baz'
// console.log(map.get('def'))                        // undefined

class BinarySearchTree {
    constructor() {
        this.root = null
        this.size = 0
    }

    size() {
        return this.size
    }

    add(...values) {
        for (let value of values) {
            this.addNode(value)
            this.size += 1
        }
    }

    addNode(value) {
        if (this.root === null) {
            this.root = new Node(value)
        } else {
            _addNode(this.root, value)
        }
        function _addNode(node, value) {
            if (value < node.value) {
                if (node.left === null) {
                    node.left = new Node(value)
                } else {
                    _addNode(node.left, value)
                }
            } else {
                if (node.right === null) {
                    node.right = new Node(value)
                } else {
                    _addNode(node.right, value)
                }
            }
        }
    }

    has(value) {
        return _has(this.root, value)

        function _has(node, value) {
            if (node) {
                if (node.value === value) {
                    return true
                } else if (value < node.value) {
                    return _has(node.left, value)
                } else {
                    return _has(node.right, value)
                }
            }
            return false
        }
    }

    remove(value) {
        if (this.root === null) {
            return null
        }
        this.root = _remove(this.root, value)
        this.size -= 1

        function _remove(node, value) {
            if (value < node.value) {
                node.left = _remove(node.left, value)
                return node
            } else if (node.value < value) {
                node.right = _remove(node.right, value)
                return node
            } else {
                if (node.left === null && node.right === null) {
                    node = null
                    return node
                } else if (node.left === null) {
                    node = node.right
                    return node
                } else if (node.right === null) {
                    node = node.left
                    return node
                }
                let newNode = findMinNode(node.right)
                node.value = newNode.value
                node.right = _remove(node.right, newNode.value)
                return node
            }
        }

        function findMinNode(node) {
            if (node.left === null) {
                return node
            } else {
                return findMinNode(node.left)
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// let tree = new BinarySearchTree
// console.log(tree.add(1, 2, 3, 4))
// console.log(tree.add(5))
// console.log(tree.has(2))                           // true
// console.log(tree.has(5))                           // true
// console.log(tree.remove(3))                        // undefined
// console.log(tree.size())                           // 4

class BinaryTree {
    constructor() {
        this.root = null
    }
    add(...values) {
        for (let value of values) {
            this.addNode(value)
        }
    }

    addNode(value) {
        if (this.root === null) {
            this.root = new Node(value)
        } else {
            _addNode(this.root, value)
        }

        function _addNode(node, value) {
            if (value < node.value) {
                if (node.left === null) {
                    node.left = new Node(value)
                } else {
                    _addNode(node.left, value)
                }
            } else {
                if (node.right === null) {
                    node.right = new Node(value)
                } else {
                    _addNode(node.right, value)
                }
            }
        }
    }

    inorder(fn) {
        function _inorder(node) {
            if (node === null) {
                return
            }
            _inorder(node.left)
            fn(node)
            _inorder(node.right)
        }
        _inorder(this.root)
    }

    preorder(fn) {
        function _preorder(node) {
            if (node === null) {
                return
            }
            fn(node)
            _preorder(node.left)
            _preorder(node.right)
        }
        _preorder(this.root)
    }

    postorder(fn) {
        function _postorder(node) {
            if (node === null) {
                return
            }
            _postorder(node.left)
            _postorder(node.right)
            fn(node)
        }
        _postorder(this.root)
    }

    bfs(fn) {
        if (this.root === null) {
            return
        }
        let queue = [this.root]
        let visited = []
        visited[this.root] = true
        while (queue.length > 0) {
            let node = queue.shift()
            fn(node)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }


}

let tree = new BinaryTree()
let fn = value => console.log(value)
tree.add(4, 5, 2, 1, 3)
tree.bfs(fn)                          // undefined
// tree.inorder(fn)                      // undefined
// tree.preorder(fn)                     // undefined
// tree.postorder(fn)                    // undefined
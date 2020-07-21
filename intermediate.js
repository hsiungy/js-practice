let fib2 = (function() {
    let memo = {}
    return function memoFib(num) {
        let value;
        if (num in memo) {
            value = memo[num]
        } else {
            if (num <= 1) {
                value = num
            } else {
                value = memoFib(num-1) + memoFib(num-2)
            }
            memo[num] = value
        }
        return value
    }
})();

// console.log(fib2(0))  // 0
// console.log(fib2(1))  // 1
// console.log(fib2(10)) // 55
// console.log(fib2(50)) // 12586269025

function isBalanced2(str) {
    let stack = []
    for (let char of str) {
        if ((char == '(') || (char == '{') || (char == '[')) {
            stack.push(char)
        }
        if ((char == ')')) {
            if (stack.pop() !== '(') {
                return false
            }
        }
        if ((char == '}')) {
            if (stack.pop() !== '{') {
                return false
            }
        }
        if ((char == ']')) {
            if (stack.pop() !== '[') {
                return false
            }
        }
    }
    if (stack.length > 0) {
        return false
    }
    return true
}

// console.log(isBalanced2('(foo { bar (baz) [boo] })')) // true
// console.log(isBalanced2('foo { bar { baz }')) // false
// console.log(isBalanced2('foo { (bar [baz] } )')) // false

function uniq(arr) {
    let seen = {}

    return arr.reduce((result, current) => {
        if (current in seen) {
            return result
        }
        seen[current] = true
        return result.concat(current)
    }, [])
}

// console.log(uniq([]))                    // []
// console.log(uniq([1, 4, 2, 2, 3, 4, 8])) // [1, 4, 2, 3, 8]

function intersection(arr1, arr2) {
    if ((arr1.length === 0) || (arr2.length === 0)) {
        return []
    }
    let seen = {}
    let intersection = []
    for (let elem of arr1) {
        seen[elem] = true
    }
    for (let elem of arr2) {
        if (seen[elem]) {
            intersection.push(elem)
        }
    }
    return intersection
}

// console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])) // [4, 1]
// console.log(intersection([1, 5, 4, 2], [7, 12]))          // []

function sort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(sort(left), sort(right))
}

function merge(left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

}

// console.log(sort([]))                              // []
// console.log(sort([-4, 1, Infinity, 3, 3, 0]))      // [-4, 0, 1, 3, 3, Infinity]

function includes(arr, val) {
    let index = binarySearch(arr, val, 0, arr.length-1)
    console.log('index', index)
    return index !== undefined
}

function binarySearch(arr, val, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return undefined
    }
    let mid = Math.floor((leftIndex + rightIndex) / 2)
    if (arr[mid] === val) {
        return mid 
    }
    if (arr[mid] > val) {
        return binarySearch(arr, val, leftIndex, mid-1) 
    } else { 
        return binarySearch(arr, val, mid+1, rightIndex)
    }
}

// console.log(includes([1, 3, 8, 10], 8))     // true
// console.log(includes([1, 3, 8, 8, 15], 15)) // true
// console.log(includes([1, 3, 8, 10, 15], 9)) // false

function assignDeep(target, source) {
    for (let key in source) {
        if (isObject(source[key])) {
            if (!isObject(target[key])) { 
                target[key] = {}
            }
            assignDeep(target[key], source[key])
        } else {
            target[key] = source[key]
        }
    }
    return target
}

function isObject(val) {
    return (typeof val === 'object') && (val !== null)
}

// console.log(assignDeep({ a: 1 }, {}))              // { a: 1 }
// console.log(assignDeep({ a: 1 }, { a: 2 }))        // { a: 2 }
// console.log(assignDeep({ a: 1 }, { a: { b: 2 } })) // { a: { b: 2 } }
// console.log(assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }))
// // { a: { b: { c: 1, d: 2 }}, e: 3 }

async function reduceAsync(array, fn, value) {
    for (let a of array) {
      value = fn(value, await a())
    }
    return value
}

// let a = () => Promise.resolve('a')
// let b = () => Promise.resolve('b')
// let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))
// reduceAsync([a, b, c], (acc, value) => [...acc, value], []).then(result => console.log(result))
// // ['a', 'b', 'c']
// reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']).then(result => console.log(result))
// // ['d', 'a', 'c', 'b']

// async function seq(arr) {
//     let result = []
//     for (let f of arr) {
//         result.push(await f())
//     }
//     return result
// }

async function seq(arr) {
    return reduceAsync(arr, (acc, value) => [...acc, value], [])
}

let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => Promise.resolve('c')
seq([a, b, c]).then(result => console.log(result))                 // ['a', 'b', 'c']
seq([a, c, b]).then(result => console.log(result))                 // ['a', 'c', 'b']
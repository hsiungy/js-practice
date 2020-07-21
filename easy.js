function isPrime(num) {
    if (num < 2) {
        return false
    }
    for (let i = 2; i < Math.sqrt(num)+1; i++) {
        if (num % i === 0 && i !== num) {
            return false
        }
    }
    return true
}

// console.log(isPrime(0))               // false
// console.log(isPrime(1))               // false
// console.log(isPrime(17))              // true
// console.log(isPrime(10000000000000))  // false

function factorial(num) {
    if (num < 0) {
        return
    }
    if (num == 0) {
        return 1
    }
    return factorial(num - 1) * num
}

// console.log(factorial(0)) // 1
// console.log(factorial(1)) // 1
// console.log(factorial(6)) // 720

function fib(num) {
    if (num <= 0) {
        return 0
    } 
    if (num === 1) {
        return 1
    }
    return fib(num-1) + fib(num-2)
}

// console.log(fib(0))  // 0
// console.log(fib(1))  // 1
// console.log(fib(2))  // 1
// console.log(fib(10)) // 55
// console.log(fib(20)) // 6765

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        let prevNum = arr[i-1]
        let currNum = arr[i]
        if (currNum < prevNum) {
            return false
        }
    }
    return true
}

// console.log(isSorted([]))                       // true
// console.log(isSorted([-Infinity, -5, 0, 3, 9])) // true
// console.log(isSorted([3, 9, -3, 10]))           // false

function filter(arr, f) {
    let newArr = []
    for (const elem of arr) {
        if (f(elem)) {
            newArr.push(elem)
        }
    }
    return newArr
}

// console.log(filter([1, 2, 3, 4], n => n < 3))    // [1, 2]

function reduce(arr, f, val) {
    for (let i = 0; i < arr.length; i++) {
        val = f(val, arr[i])
    }
    return val
}

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)) // 10

function reverse(str) {
    let reverse = ''
    for (let i = str.length-1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
}

// console.log(reverse(''))       // ''
// console.log(reverse('abcdef')) // 'fedcba'

function indexOf(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1    
}

// console.log(indexOf([1, 2, 3], 1))               // 0
// console.log(indexOf([1, 2, 3], 4))               // -1

function isPalindrome(str) {
   str = str.toLowerCase().replace(/\s+/g, '')
   let reverseStr = str.split('').reverse().join('')
   return reverseStr === str
}

// console.log(isPalindrome(''))                                // true
// console.log(isPalindrome('abcdcba'))                         // true
// console.log(isPalindrome('abcd'))                            // false
// console.log(isPalindrome('A man a plan a canal Panama'))     // true

function missing(arr) {
    if (arr.length == 0) {
        return
    }
    const n = arr.length + 1
    let sum = (n * (n+1)) / 2
    let arrSum = arr.reduce((a, b) => a+b, 0)
    let missingVal = sum - arrSum
    if (missingVal === 0 || missingVal === n) {
        return
    }
    return missingVal
}

// console.log(missing([]))                         // undefined
// console.log(missing([1, 4, 3]))                  // 2
// console.log(missing([2, 3, 4]))                  // 1
// console.log(missing([5, 1, 4, 2]))               // 3
// console.log(missing([1, 2, 3, 4]))               // undefined

function isBalanced(str) {
    let stack = []
    for (let char of str) {
        if (char === '{') {
            stack.push(char)
        } else if (char == '}') {
            if (stack.pop() !== '{') {
                return false
            }
        }
    }
    if (stack.length > 0) {
        return false
    }
    return true
}

// console.log(isBalanced('}{'))                      // false
// console.log(isBalanced('{{}'))                     // false
// console.log(isBalanced('{}{}'))                    // true
// console.log(isBalanced('foo { bar { baz } boo }')) // true
// console.log(isBalanced('foo { bar { baz }'))       // false
// console.log(isBalanced('foo { bar } }'))           // false
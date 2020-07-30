let bar = [1, 2]
// console.log(bar.toString())

const obj = {
    a: {
        b: {
            c: 1
        }
    },
    d: 2
}

const clone = function(obj) {
    let newObj = {}
    function cloneHelper(obj, newObj) {
        for (let elem in obj) {
            if (isObject(elem)) {
                cloneHelper(obj[elem], newObj)
            } else {
                newObj[elem] = obj[elem]
            }
        }
        return newObj
    }
    return cloneHelper(obj, newObj)
}

function isObject(value) {
    return (typeof value === 'object') && (val !== null)
}

let newObj = clone(obj)
let copyObj = obj
// console.log(newObj === obj)
// console.log(copyObj === obj)

function sort(a, b) {
    if (a.length === 0) {
        return b
    }
    if (b.length === 0) {
        return a
    }
    let sorted = []
    let currIndexA = 0
    let currIndexB = 0
    let aLength = a.length
    let bLength = b.length
    while (currIndexA < aLength && currIndexB < bLength) {
        if (a[currIndexA] < b[currIndexB]) {
            sorted.push(a[currIndexA])
            currIndexA++
        } else {
            sorted.push(b[currIndexB])
            currIndexB++
        }
    }
    if (currIndexA < aLength) {
        sorted = sorted.concat(a.slice(currIndexA))
    }
    if (currIndexB < bLength) {
        sorted = sorted.concat(b.slice(currIndexB))
    }
    return sorted
}

let a = [1, 3, 5, 7, 22, 29]
let b = [2, 4, 6]
//console.log(sort(a, b))
let c = []
let d = [1, 5, 9]
//console.log(sort(c, d))

let test = [1, 2, 100, 200]
// console.log(test.sort())

let arry = [1, 2, 5, 7]
// console.log(arry.reduce((acc, item) => acc + item))

function x(num1, num2) {
    if (num1 && num2) {
        return num1+num2
    } else {
        return function(num3) {
            return num1 + num3
        }
    }
}

// console.log(x(1, 2))
// console.log(x(1)(2))

// const arry = [1-100] one number is missing, what is the missing num?

function findMissingNum(arr) {
    let n = arr.length + 1
    let sum = (n * (n+1))/2
    let arrSum = arr.reduce((acc, item) => acc+item)
    return sum-arrSum
}

// console.log(findMissingNum([5, 2, 1, 4]))

const findMax = [100, 4, 20]
const findMaxFn = (arr) => arr.reduce((a,b) => a > b? a : b)
// console.log(Math.max(...findMax))

const till = {
    pennies: 12,
    nickels: 10,
    dimes: 1,
    quarters: 12,
    dollars: 30
}

const values = {
    pennies: 1,
    nickels: 5,
    dimes: 10,
    quarters: 25,
    dollars: 100
}

function getChange(value) { // value = 20.47
    let minNumCoins = 0
    let totalCents = value * 100 // 2047

    let remaining = totalCents % values.dollars // 47
    let numDollars = (totalCents - remaining) / 100 // 20
    if (numDollars <= till.dollars) {
        minNumCoins += numDollars // 20
    } else {
        minNumCoins += till.dollars
        let dollarsLeft = numDollars - till.dollars
        remaining += dollarsLeft * 100
    }

    let newRemaining = remaining % values.quarters // 47-25 = 22
    let numQuarters = (remaining - newRemaining) / 25 // 1
    if (numQuarters <= till.quarters) {
        minNumCoins += numQuarters // 21
    } else {
        minNumCoins += till.quarters
        let quartersLeft = numQuarters - till.quarters
        newRemaining += quartersLeft * 25
    }

    let newRemaining1 = newRemaining % values.dimes 
    let numDimes = (newRemaining - newRemaining1) / 10
    if (numDimes <= till.dimes) {
        minNumCoins += numDimes
    } else {
        minNumCoins += till.dimes
        var dimesLeft = numDimes - till.dimes
        newRemaining1 += dimesLeft * 10
    }

    let newRemaining2 = newRemaining1 % values.nickels
    let numNickels = (newRemaining1 - newRemaining2) / 5
    if (numNickels <= till.nickels) {
        minNumCoins += numNickels
    } else {
        minNumCoins += till.nickels
        let nickelsLeft = numNickels - till.nickels
        newRemaining += nickelsLeft * 5
    }

    let numPennies = newRemaining2
    minNumCoins += numPennies

    return minNumCoins
}

// console.log(getChange(20.47))

function reverse(str) {
    return str.split('').reverse().join('')
}

// console.log(reverse('i love javascript'))

function parenthesesMatch(str) {
    let stack = []
    for (let char of str) {
        if (char === '(') {
            stack.push(char)
        } else {
            if (stack.pop() !== '(') {
                return false
            }
        }
    }
    if (stack.length > 0) {
        return false
    }
    return true
}

// console.log(parenthesesMatch('(())'))
// console.log(parenthesesMatch('(((()'))
// console.log(parenthesesMatch('())))'))

const brackets = {
    ')':'(',
    ']':'[',
    '}':'{'
}
function bracketsMatch(str) {
    let stack = []
    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else if (char === ')' || char === ']' || char === '}' ) {
            if (stack.pop() !== brackets[char]) {
                return false
            }
        }
    }
    if (stack.length > 0) {
        return false
    }
    return true
}

// console.log(bracketsMatch('([awerjawr]we)'))

function maxCount(arr) {
    let max = arr.reduce((a, b) => a > b? a : b)
    let count = arr.reduce((acc, val) => val === max? acc+1 : acc, 0)
    return count
}

// console.log(maxCount([1, 3, 3, 2]))

function convert24(time) {
    let timeOfDay = time.slice(5,)
    let hourMin = time.slice(0, 5)
    if (timeOfDay === 'AM') {
        return hourMin
    } else {
        let hour = hourMin.slice(0, 2)
        hour = parseInt(hour) + 12
        let newTime = hour.toString()+time.slice(2,5)
        return newTime
    }
}

// console.log(convert24('09:03AM'))

const profile = {
    name: 'techsith',
    getName: function() {
        console.log(this.name)
    }
}

// profile.getName()

const obj1 = {
    x:1,
    getX() {
        // let that = this
        const inner = function() { // or use arrow function
            console.log(this.x)
        }
        // inner.call(this)
        inner.bind(this)()
    }
}

// obj1.getX()

function getLastKid(n, k, i) {
    return (((k % n) + (i-1)) % n === 0? n : ((k % n) + (i-1)) % n) 
}

// console.log(getLastKid(3, 2, 2))


// A factorial is the product of an integer and all the integers below it
// e.g., factorial four ( 4! ) is equal to 24 (4 * 3 * 2 * 1).

// Write a function that calculates the factorial of a number. 
// It should take one parameter, num, and return the factorial of it.

function factorial(num) {
    if (num <= 1) {
      return 1
    }
    return factorial(num-1) * num
  }
  
  // console.log(factorial(0))
  // console.log(factorial(1))
  // console.log(factorial(4))
  
  
  
  // Write a function that returns the longest word in a sentence, ignoring punctuation. If more than one word is the longest length, return the first word. It should take one parameter, the sentence (string).
  
  // e.g., 'The quick brown foxes.' returns 'quick'
  
  
  function longestWord(str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    let words = str.split(' ')
    let wordLengths = {}
    for (let word of words) {
      wordLengths[word] = word.length
    }
    let longest = Object.keys(wordLengths).reduce((a, b) => wordLengths[a] > wordLengths[b] ? a : b);
    return longest
  }
  
  // console.log(longestWord('The quick brown 2foxes.'))
  
  
  
  // Write a function that will return how many cakes can be made out of a given list of ingredients. It should take two arguments: a list of ingredients needed to create one cake, and a list of available ingredients.
  
  // var recipe = {flour: 500, sugar: 200, eggs: 1};
  // var available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}
  
  // maxCakes(recipe, available) // 2
  
  function maxCakes(recipe, available) {
    let cakes = 0
    let ingredients = {}
    for (let ingredient of Object.keys(recipe)) {
      if (!(ingredient in available)) {
        return 0
      } else {
        ingredients[ingredient] = Math.floor(available[ingredient]/recipe[ingredient])
      }
    }
    return Math.min(...Object.values(ingredients))
  }
         
  var recipe = {flour: 500, sugar: 200, eggs: 1};
  var available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}     
         
  console.log(maxCakes(recipe, available))
  
  
  
  
  //Clock Question
  //Find the acute angle between the hour and minute hands by taking in two parameters, hour and minute for the current time on an analog clock.
  
  //Eg: 3:15 PM, parameters (hour: 3, minute: 15)
  
  //Step#1 calculate the acute angle (< 180) for 3:15
  //Step#2 write a function to return the acute angle for any time
  
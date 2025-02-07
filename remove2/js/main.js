// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

// return a string





function remove (string) {
   let words = string.split(' ');
   let result = [];

   for ( let word of words ){
        // does this word only contain one exclamation point?
        
        // count the number of bangs in a word
        const bangCount = word => [...word].filter( char => char === '!').length;

        if ( bangCount(word) != 1){
            result.push(word)
        }
   }

   return result.join(' ')

}


// Test cases


console.log(remove('hi!')); // ""
console.log(remove('hi! Hi!')); // ""
console.log(remove('hi! Hi! Hi!')); // ""
console.log(remove('Hi Hi! Hi!')); // "Hi"
console.log(remove('Hi! Hi!! Hi!')); // "Hi!!"
console.log(remove('Hi! !Hi!! Hi!')); // "Hi!!"

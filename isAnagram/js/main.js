// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// let isAnagram = function(test, original){
//     console.log(test);
//     console.log(original);

//     console.log(test.length)
//     console.log(original.length)

//     if ( test.length === original.length ){
//         return test.toLowerCase().split('').map(function(char){
//             return char;
//         });
//     }else{
//         return false;
//     }
    
  
// }

let isAnagram = function(test, original){

    return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('');
}



console.log(isAnagram('foefet', 'toffee')) // True
console.log(isAnagram("Buckethead", "DeathCubeK")) // true
console.log(isAnagram("Twoo", "WooT")) // true
console.log(isAnagram("dumble", "bumble")) // false
console.log(isAnagram("ound", "round")) // false
console.log(isAnagram("apple", "pale")) // false
console.log(isAnagram("hlBgQnsCwCCtLxdSNOj", "ONjQBnxLWldwCCsSgth")) // false
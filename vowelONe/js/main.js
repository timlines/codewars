// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"


// Takes in a string 'abcedios'
// Returns a  string  of 1 and 0's '101010101'

// function vowelOne(s){

//     // create a result

//     let result = [];

//     s.toLowerCase().split('');

//     for ( let element of s ){
//         if( element === 'a' ||
//             element === 'e' ||
//             element === 'i' || 
//             element === 'o' ||
//             element === 'u' ){
//             result.push(1)
//         }else {
//             result.push(0);
//         }
    
//     }

//     return result.join('');

// }


function vowelOne(s){
    return s.replace(/[^aeiou]/gi, 'o').replace(/[^\d]/g, '1');
}

console.log(vowelOne('abceios')) // '1001110'

console.log(vowelOne( 'aeiou, abc')) // '1111100100'

console.log(vowelOne( 'vowelOne')) // '01010101'
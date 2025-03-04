// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity


// input is a string, lowercase, no numbers, no capital letters, no spaces
// output will be an array with even and odd indexes capitalized.

function capitalize(s){

    let result = [];
    let odd = [];
    let even = [];
    // Loop through the string

    // create element
    for( let i = 0; i < s.length; i++){
        
        // if odd capitalize
        // console.log(char)
        let index = i;
        if ( !(index % 2) ){
            char = s[i].toUpperCase();
            odd.push(char);
        }else{
            
            // if even leave as lowercase
            odd.push(s[i])
        }

    }
    // join the element to 'odd'
    odd = odd.join('');
   


    // next will do the oppisite for the second element

    // if even capitalize


    for( let i = 0; i < s.length; i++){
        
        // if even capitalize
        let index = i
        if ( index % 2 ){
            char = s[i].toUpperCase();
            even.push(char);
        }else{
            // if odd leave lowercase
            even.push(s[i])
        }

    }
    even = even.join('');

    // return an array with two strings, one in each element w/ odd/even indexes capitalized

    // push the element to result
    
    
    result.push(odd);
    result.push(even);
    return result; // ['AbCdEf', 'aBcDeF']
}


// console.log(capitalize('abcdef')); // ['AbCdEf', 'aBcDeF']
// console.log(capitalize('codewars')); // ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize('abracadabra')); // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
// console.log(capitalize('codewarriors')); // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
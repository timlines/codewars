// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


function isVow(a){
    
    for ( let i = 0, l = a.length; i < l; ++i){
        let char = String.fromCharCode(a[i])
        if ('aeiou'.indexOf(char) !== -1)
            a[i] = char;
    }

    return a;

    
    
    
}


console.log( isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));
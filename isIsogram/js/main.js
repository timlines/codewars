// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){

    // only work with lowercase strings to avoid case sensative issues
    str = str.toLowerCase();

    // check if each letter occurs more than once

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for ( let letter of alphabet ) {
        let charCount = 0;
        // count the number of times each letters apears
        // console.log(letter)
        charCount = str.split('').filter((char) => char === letter).join('').length;

        // console.log(charCount)

        // if a count is greater than 1 then return false
        if ( charCount > 1 ){
            return false
        }

    }
    
    return true; 

    
}


console.log(isIsogram('Dermatoglyphics')) // true
console.log(isIsogram('aba')) // false beacsae two aa
console.log(isIsogram('moOse')) // false because two oO
console.log(isIsogram('')) // false
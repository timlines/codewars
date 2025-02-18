
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

let capitals = function (word) {

    let result = []

    word = word.split('');

    for ( const [index, char] of word.entries() ){
        if ( char.toUpperCase() == char ){
            result.push(index)
        }

    }

    return result;
}



console.log(capitals('CodEWaRs')) //[0, 3, 4, 6]
console.log(capitals('aAbB')) //[0, 3]
console.log(capitals('AAA')) //[0, 1, 2]
console.log(capitals('')) //[]
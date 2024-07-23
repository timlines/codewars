// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.

// Examples:

// n = 1 should return 1
// n = 5 should return 101
// n = 11 should return 1011

// function toBinary(n){

//     // console.log(Math.floor(n / 2));

//     if ( Math.floor(n / 2) === 0 ){
//         return 1;
//     } else{

        
//         return toBinary( Math.floor(n / 2) )

//     }
// }



let toBinary = n => +n.toString(2);
console.log(toBinary(23)); 
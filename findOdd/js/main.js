// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {

 // sort array
 const array = A.sort((a, b) => a - b);
 

 // count elements in array
 const counts = {};
 for ( const element of array ) {
    if ( counts[element] ) {
        counts[element]++;
    }else {
        counts[element] = 1;
    }

 }

 // return the odd element

 let odd = Object.keys(counts).find((key) => counts[key] % 2)
 return Number(odd);

}


console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
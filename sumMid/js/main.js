// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// function sumArray(array){

//     if (null){
//         return 0;
//     }


//    let mid = array.filter((number) => number < Math.max(...array) && number > Math.min(...array) ? number : 0 )

//     return mid.reduce((acc, c) => acc + c, 0) ;
// }


function sumArray(array){
    if (array == null) {
        return 0;
    } else if (array.length < 2 ) {
        return 0;
    } else {
        array = array.sort(function(a, b) { return a - b});
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
}













// ----------------------------------------

console.log(sumArray([ 6, 2, 1, 8, 10 ]));
console.log(sumArray([ 0, 1, 6, 10, 10]));
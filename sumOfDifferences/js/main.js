// function sumOfDifferences(arr) {
//     let sorted = arr.sort((a, b) => a - b )

//     // find the difference of the frist two elements


//     return sorted.reduce((acc, cur) => acc + cur )
// }

// console.log(sumOfDifferences([10, 2, 1]))


function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

}

console.log(sumOfDifferences([10, 2, 1]))
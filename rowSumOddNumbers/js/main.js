// function rowSumOddNumbers(n){
//     if ( n === 1 ){
//         return 1
//     }else{
//         rowSumOddNumbers(n - 1) + (n + 1)
//     }
//     return n;
// }


function rowSumOddNumbers(n){
    return Math.pow(n, 3);
}


console.log(rowSumOddNumbers(1)); // --> 1
console.log(rowSumOddNumbers(2)); // --> 3 + 5 = 8


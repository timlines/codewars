// We have two consecutive integers 
// k
// 1
// k 
// 1
// ​
//   and 
// k
// 2
// k 
// 2
// ​
//  , where 
// k
// 2
// =
// k
// 1
// +
// 1
// k 
// 2
// ​
//  =k 
// 1
// ​
//  +1.

// We need to calculate the lowest strictly positive integer n, such that: the values 
// n
// ⋅
// k
// 1
// n⋅k 
// 1
// ​
//   and 
// n
// ⋅
// k
// 2
// n⋅k 
// 2
// ​
//   have the same digits but in different order.

// E.g. # 1:

// k1 = 100
// k2 = 101
// n = 8919
// #Because 8919 * 100 = 891900 
// and      8919 * 101 = 900819
// E.g. # 2:

// k1 = 325
// k2 = 326
// n = 477
// #Because 477 * 325 = 155025
// and      477 * 326 = 155502
// Your task is to prepare a function that will receive the value of k and outputs the value of n.

// The examples given above will be:

// Input: 100 --> Return: 8919
// Input: 325 --> Return:  477
// Features of the random tests

// 10 < k < 10.000.000.000.000.000 (For Python, Ruby and Haskell)
// 10 < k < 1.000.000.000  (For Javascript and D 1e9)
// Enjoy it!!



// Takes in a number
// returns a number

function findLowestInt(k){
    let n = 1;
    const x = k + 1;
    const string = n => n.toString().split('').sort().join('');
    while (1) if (string(n * k) === string(n++ * x )) return --n;

}

console.log(findLowestInt(325)) // 477

// k1 = 325
// k2 = 326
// n = ? 

// n * k1 has the same digits of n * k2
// Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

// Example
// With the numbers 1, 2, and 3, here are some possible expressions:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// The maximum value that can be obtained is 9.

// Notes
// The numbers are always positive, in the range 1 ≤ a, b, c ≤ 10.
// You can use the same operation more than once.
// It is not necessary to use all the operators or parentheses.
// You cannot swap the operands. For example, with the given numbers, you cannot get the expression (1 + 3) * 2 = 8.
// Input and Output Examples
// expressionsMatter(1, 2, 3) ==> 9, because (1 + 2) * 3 = 9.
// expressionsMatter(1, 1, 1) ==> 3, because 1 + 1 + 1 = 3.
// expressionsMatter(9, 1, 1) ==> 18, because 9 * (1 + 1) = 18.


// function expressionMatter(a, b, c) {
    

//     let operators = ['+', '*', '+', '*'];
//     let openParens =    ['', '', '(', '' ];
//     let closeParens =   ['', '', ')', '' ];
//     let openParens2 =   ['', '', '',  '('];
//     let closeParens2 =  ['', '', '',  ')'];

//     // return eval(  openParens[0] + a + operators[0] + openParens2[0] + b + closeParens[0] + operators[1] + c + closeParens2[0] )

//     let result = 0;

//     for (let i = 0; i < operators.length; i++){
//         let current = eval(  openParens[i] + a + operators[i] + openParens2[i] + b + closeParens[i] + operators[i] + c + closeParens2[i] )
//         if ( result < current){
//             result = current;
//         }
//     }
//     return result;

// }

// console.log(expressionMatter(1, 2, 3)); // 9

function expressionMatter(a, b, c){
    return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
}
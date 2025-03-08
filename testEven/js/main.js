// function testEven(n){
//     return n % 2 ? false : true;
// }

function testEven(n){
    return !(n %2 );
}



console.log(testEven(0)) // returns true
console.log(testEven(0.5)) // returns false
console.log(testEven(1)) // returns false
console.log(testEven(2)) // returns true
console.log(testEven(-4)) // returns true
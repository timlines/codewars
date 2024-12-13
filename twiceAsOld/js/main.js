// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// function twiceAsOld(dadYearsOld, sonYearsOld){
//     return Math.abs(((dadYearsOld - sonYearsOld) * 2) - dadYearsOld)
// }

function twiceAsOld(dadYearsOld, sonYearsOld){
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

console.log(twiceAsOld(36, 7)); //22
console.log(twiceAsOld(55, 30)); //5 // throws a negative
console.log(twiceAsOld(42,21)); //5
console.log(twiceAsOld(22,1)); //20
console.log(twiceAsOld(29,0)); //20


// 36, 7 = 36 | 7 + 22 = 29 && 36 + 22 = 58

// 29 *2
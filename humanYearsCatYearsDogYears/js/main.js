// let humanYearsCatYearsDogYears = function(humanYears) {
//     // Your code here!


//     const years = humanYears;

//     let result = [];

//     function catYears(years){

//         if(years <= 1 ){
//             return years * 15;
//         }else if(years == 2 ){
//             return 15 + 9;
//         }else{
//             return (years - 2) * 4 + 15 + 9;
//         }
//     }


//     function dogYears(years){
//         if(years <= 1 ){
//             return years * 15;
//         }else if(years == 2 ){
//             return 15 + 9;
//         }else{
//             return (years - 2) * 5 + 15 + 9;
//         }
//     }

//     result.push(humanYears);
//     result.push(catYears(years));
//     result.push(dogYears(years));

//     return result;
// }

let humanYearsCatYearsDogYears = function(y) {
    if (y == 1 ) return [1, 15, 15]
    if (y == 2 ) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24 ]
}





console.log(humanYearsCatYearsDogYears(1)) // 1, 15, 15

console.log(humanYearsCatYearsDogYears(2)) // 2, 24, 24

console.log(humanYearsCatYearsDogYears(10)) // 10, 56, 64
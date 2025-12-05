// function multipleOfIndex(array){


//     let result = [];

//     for ( let i = 0; i < array.length; i++ ){

//         if ( array[i] == 0 || array[i] % array.indexOf(array[i]) === 0 ) {
//             result.push(array[i]);
//         }
//     }

//     return result;
    
   
// }

// if false that means it is a multiple of


console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); // [-6, 32, 25]


function multipleOfIndex(array) {
    return array.filter((x, i) => x == 0 || x % i === 0)
}
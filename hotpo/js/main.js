// var hotpo = function(n){

//     let result = 0;

//     while ( n > 1){
//         if ( n % 2){
//             n = 3*n + 1;
//         } else {
//             n = n/2;
//         }

//         result++;
//         // console.log(result);
//     }

//     return result;
    
//     // if odd ie 1, 3, 5, 
    
// }


let hotpo = function (n, acc = 0) {
    if ( n <= 1){
        return acc;
    }else{
        return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
    }
}

console.log(hotpo(1));
console.log(hotpo(5));
console.log(hotpo(6));
console.log(hotpo(23));



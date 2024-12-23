var hotpo = function(n){

    let result = 0;

    while ( n > 1){
        if ( n % 2){
            n = 3*n + 1;
        } else {
            n = n/2;
        }

        result++;
        // console.log(result);
    }

    return result;
    
    // if odd ie 1, 3, 5, 
    
}

console.log(hotpo(1));
console.log(hotpo(5));
console.log(hotpo(6));
console.log(hotpo(23));

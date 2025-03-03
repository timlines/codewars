// Fib

function fib(num){
    if ( num < 2 ){
        return num;
    }else{
        return fib( num - 1 ) + fib( num - 2 )
    }
}



// 0, 1, 1, 2, 3, 5, 8, 13, 21
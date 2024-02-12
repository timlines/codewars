// Fizz Buzz

// Parameters
// Retruns
// Example
// Psudocode

// just a number
// always be positive.
// no string, no funny business

// num no funny business, 

// num, fizz, buzz, fizz buzz


function fizzBuzz(num){


    // loop 1 to num

    // if -> num % 3 === 0 fizz

    // if -> num % 5 === 0 buzz

    // if -> num % 3 & % === fizzbuzz

    // num 

    for( let i = 1; i <= num; i++){
        if( i % 3 && i % 5 === 0 ){
            console.log('fizzBuzz')
        }else if ( i % 3 === 0 ){
            console.log('fizz')
        }else if ( i % 5 === 0 ){
            console.log( 'buzz' )
        }else{
            console.log(i);
        }
    }

}

fizzBuzz(3) // 1, 2, fizz
fizzBuzz(5) // 1, 2, fizz, 4, buzz
fizzBuzz(15) // 1, 2, fizz, 4, buzz, 6, 7, 8, 9, fizz, 11, fizz, 13, 14, fizzBuzz
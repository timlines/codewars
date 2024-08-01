function expressionMatter(a, b, c){

    // if ()

    
    let max = 0;

    if( max < a * ( b  + c ) ) {
        max = a * ( b  + c );
    }
    if ( max < a * b * c ){
        max = a * b * c;
    }
    if ( max < a + b * c ){
        max = a + b * c;
    }
    if ( max < (a + b) * c  ){
        max = (a + b) * c; 
    }
    if ( max < a + b + c ) {
        max = a + b + c;
    }
    
    return max;
    
    
}

console.log(expressionMatter(2, 1, 2)); // 6
console.log(expressionMatter(2, 1, 1)); // 4
console.log(expressionMatter(1, 1, 1)); // 3
console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(2, 1, 2));

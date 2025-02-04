function transposeTwoStrings (array){


    let result = [];

    // compare the two string lengths
    let longerString = '';
    if ( array[0].length < array[1].length ){
        longerString = array[1];
    }else{
        longerString = array[0];
    }

    // add the characters to an array
    for ( let i = 0; i < longerString.length; i++ ){
        // console.log(`${array[0][i]} ${array[1][i]}`)
        if ( array[0][i] == undefined || array[1][i] == undefined){
            ' '
        }

        result.push( (array[0][i] == undefined ? ` ` : `${array[0][i]}`) + (array[1][i] == undefined ? `  ` : ` ${array[1][i]}`));

    } 

    return result.join('\n');


}



console.log(transposeTwoStrings(['Hello', 'World']))
console.log(transposeTwoStrings(['joey', 'louise']))
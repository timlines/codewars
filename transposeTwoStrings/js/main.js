// function transposeTwoStrings (array){


//     let result = [];

//     // compare the two string lengths
//     let longerString = '';
//     if ( array[0].length < array[1].length ){
//         longerString = array[1];
//     }else{
//         longerString = array[0];
//     }

//     // add the characters to an array
//     for ( let i = 0; i < longerString.length; i++ ){


//         result.push( (array[0][i] == undefined ? ` ` : `${array[0][i]}`) + (array[1][i] == undefined ? `  ` : ` ${array[1][i]}`));

//     } 

//     return result.join('\n');


// }


function transposeTwoStrings(arr){
    let result = [];
    let len = Math.max(arr[0].length, arr[1].length);

    for (let i = 0; i < len; i++){
        let column = (arr[0][i] || ' ') + ' ' + (arr[1][i] || ' ');
        result.push(column);
    }

    return result.join('\n');

}



console.log(transposeTwoStrings(['Hello', 'World']))
console.log(transposeTwoStrings(['joey', 'louise']))
// takes in a string and returns a number


function calculate(str){


    const mystr = str;

    let currentStr = str.split('');

    let multiply = [];
    let add = [];
    let product = 0;
    let sum = 0;
    let result = 0;


    // Multiply 

    for ( let i = 0; i < currentStr.length; i++){

        // Multiply
        
        if (currentStr[i] == '*'){
            result *= (Number(str[i + 1]))
        }
        else if( currentStr[i - 1] == '*'){
            continue;          
        }
        else if( currentStr[i] == '+'){
            continue;
        }
        else{
            
            result = Number(currentStr[i]); 
            currentStr.push(result);
            // console.log(result)
            
        }


        // update str = [ 1, 6]



    }  

    return currentStr;



    // Add

    // for ( let i = 0; i < str.length; i++){
    //     if (str[i] == '+'){
    //         result += (Number(str[i + 1]))
    //     }
        
    // }

 
    return result;
}

// console.log(calculate('1')) // 1
// console.log(calculate('1+2')) // 3 
console.log(calculate('1+2*3')) // 7
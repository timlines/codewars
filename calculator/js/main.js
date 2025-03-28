// create a calculator

//add 

// multiply



function calculate(str){

    let myArray =  str.split('')

    console.log(myArray);

    //  ['1', '+', '2', '+', '3', '*', '4']
    let removed = myArray.splice(4, 3, 12)

    console.log(removed)

    return myArray;
   
    const arrays = [];

    // split the array into elements of three

    for ( let i = 0; i < array.length; i += 2){
        let trio = array.slice(i, i + 3)
        arrays.push(trio)
    }

    let set = [];

    for ( let i = 0; i < arrays.length; i++){
        if ( arrays[i].includes('*')){
            set = arrays[i].join('').split('*');
        }
    }

    // if it's multiplication, multiply
    
    let product = multiply(set)


    // put it back in the array where you found it.
    // repalce all sets of * with the product


    // [1+2+3*4] -> [1+2+12]

    for (let i = 0; i < array.length; i++){
        if ( array[i] == "*"){
            array = array.splice(i-1, 3, product)
           
        }
    }

    console.log(array);
    



    // if it's addition add,

}


function add(arr){
    return a + b;

}


// multiply

function multiply(arr){
    return arr[0] * arr[1];
}



// console.log(add(2,3))
// console.log(multiply(2,3))
console.log(calculate('1+2+3*4'))

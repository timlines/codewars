// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.


// function updateLight(current) {
//     //your code here!
//     let lights = ['green', 'yellow', 'red']
    
//     for( let i = 0; i < lights.length; i++){
//         if ( current === lights[i] ){
//             i++;
//             return  i > lights.length - 1 ?  lights[0] : lights[i];
//         }
//     }


// }

// console.log(updateLight('red'));


function updateLight(current){
    return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';
}

console.log(updateLight('green'));
console.log(updateLight('yellow'));
console.log(updateLight('red'));
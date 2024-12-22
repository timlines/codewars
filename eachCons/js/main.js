// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

// function eachCons(array, n) {

// console.log(array.length);

// let accArr = array;

// let resultArr = []

// for ( let i = 0; i < array.length; i++ ){
//     console.log(`array length: ${array.length}`);
//     let subArr =  [];
//     for ( let i = 0; i < n; i++){
        
//         // Push n number of elements to an array
//         subArr.push( accArr.shift() );
//         console.log(`SubArr: ${subArr}`)
//     }

//     resultArr.push(subArr);
//     console.log(`resultArr ${resultArr}`)


// //  console.log( subArr);


// }

// console.log(resultArr);

// return resultArr;

// }


// console.log(eachCons([3, 5, 8, 13], 1))

function eachCons(array, n) {
    let res = [];

    for ( let i = 0; i < array.length; i++){
        res.push(array.slice(i,i + n));
    }

    return res.filter(e => e.length === n);
}

console.log(eachCons([3, 5, 8, 13], 1));
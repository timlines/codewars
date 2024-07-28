// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

// function nextId(ids){
//     let sorted = ids.sort((a, b) => a - b);
//     // console.log(sorted);

//     for (let i = 0; i < ids.length; i++){
//         if ( ids[0] !== 0 ){
//             return 0;
//         } else if ( ids[i] === ids[i + 1]){
//            //skip

//         }
//         else if (  ids[i] + 1 !== ids[i + 1]){ // 1 !== 1
//             return ids[i] + 1;
//         }
     
//     }

// }

// console.log(nextId([0,1,2,3,5]));
// console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]));
console.log(nextId([1,2,0,2,3,5]));
// console.log(nextId([4,4,9,6,2,9,9,4]));


// || ids[i] !== ids[i + 1]

   // if ( !(ids[i] + 1 === ids[i + 1]) || !(ids[i] === ids[i + 1])){
        //     // console.log(`${ids[i]} `);
        //     console.log('bang');
        // }else if ( ids.length - 1 === i ){ //4
        //     //  console.log( `${ids[i]}`)
        //     return ids[i] + 1;
        // }
        // else {
        //     // console.log( `${ids[i]}`);
        //     // console.log( `${ids[i] + 1} This ID is empty`);
        //     return ids[i] + 1;
        // }

function nextId(ids){
    let x = 0;
    while (ids.includes(x)) x++;
    return x;
}

console.log(nextId([0,1,2,3,5]));
console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]));
console.log(nextId([1,2,0,2,3,5]));
console.log(nextId([4,4,9,6,2,9,9,4]));
// const vowel = {
//     97: 'a',
//     101: 'e',
//     105: 'i', 
//     111: 'o',
//     117: 'u'
// }


// function isVow(a){
//     //return vowel[a[0]]


//     let result = []
//     for ( let number of a){
//         result.push( vowel[number] || number)
//     }
//     return result;
// }





//v2

const isVow = a =>{
    let map = {
      97: 'a',
      101: 'e',
      105: 'i',
      111: 'o',
      117: 'u',
    }
    return a.map( num => map[num] ? map[num] : num);
  }


console.log(isVow([97, 1, 2, 3]))
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))
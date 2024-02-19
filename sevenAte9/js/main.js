// function sevenAte9(str){
//     return str.replaceAll('797', '77').replaceAll('797', '77')
// }

function sevenAte9(str){
    return str.replace(/79(?=7)/g, '7')
}

// console.log(sevenAte9('79712312'))
console.log(sevenAte9('779797')) // 7777



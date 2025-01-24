function XO(str){
    let x = str.split('').filter((char) => char.toLowerCase() == 'x').join('').length;
    let o = str.split('').filter((char) => char.toLowerCase() == 'o').join('').length;

    return x === o

}

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}



console.log(XO("ooxx")  ) //  => true
console.log(XO("xooxx") ) // / => false
console.log(XO("ooxXm") ) // / => true
console.log(XO("zpzpzpp" )) //  // => true // when no 'x' and 'o' is present should return true
console.log(XO("zzoo")  ) //  => false



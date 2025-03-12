function countWords(str){
    let numWords = str.split(' ').length;
    return numWords;
}


console.log(countWords("Hello")); // returns 1 as int

console.log(countWords("")); // returns 1 as int
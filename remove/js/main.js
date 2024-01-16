// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


function remove (string) {
    const word = string.split('')


    if ( word[word.length - 1] === '!'){
        word.pop();
    }

    return word.join('');
    
}


console.log(remove('Hi!'));
console.log(remove('Hi!!!'));
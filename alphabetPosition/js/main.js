let alphabet = ['0','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// Not yet working
function alphabetPositon(text){

    return text.toLowerCase().replace(/./g, function(c) {
        return alphabet.indexOf(c) + ' ';
    })

    // return alphabet.indexOf(text);
}

console.log(alphabetPositon("T"));
console.log(alphabetPositon("The sunset sets at twelve o' clock."));
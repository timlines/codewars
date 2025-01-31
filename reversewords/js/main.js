// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str){
//     let words = str.split(' ');

//     let arr = [];

//     for (let i = 0; i < words.length; i++){
//         reverse = words[i].split('').reverse().join('');
//         arr.push(reverse);
//     }

//     return arr.join(' ');
// }


function reverseWords(str){
    return str.split(' ').map(function(word){
        return word.split('').reverse().join('');
    }).join(' ');
}






console.log(reverseWords('This is an example!'));
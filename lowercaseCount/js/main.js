// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

function lowercaseCount(str){
    let count = 0;
    for (let char of str){
        if (char >= 'a' && char <= 'z') {
            count++;
        }
    }
    return count;

}

const string = 'Hello World';
console.log(lowercaseCount(string)); // 8


function lowercaseCount2(str){
    return (str.match(/[a-z]/g) || []).length
}
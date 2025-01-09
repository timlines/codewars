// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(str){

    //split each word and store in an array
    let arr = str.split(' ');

    // create a result array and word variable
    let result = [];
    let word = '';

    //loop through each word in the sentance and add length
    for ( let i = 0; i < arr.length; i++){
        word = `${arr[i]} ${arr[i].length}`
        // push the word to the result array
        result.push(word);
    }

    // return the result array
    return result;
}

console.log(addLength('apple ban'));
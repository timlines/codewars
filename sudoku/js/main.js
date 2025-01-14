// Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

// The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

// For Sudoku rules, see the Wikipedia article.

// var puzzle = [
//             [5,3,0,0,7,0,0,0,0],
//             [6,0,0,1,9,5,0,0,0],
//             [0,9,8,0,0,0,0,6,0],
//             [8,0,0,0,6,0,0,0,3],
//             [4,0,0,8,0,3,0,0,1],
//             [7,0,0,0,2,0,0,0,6],
//             [0,6,0,0,0,0,2,8,0],
//             [0,0,0,4,1,9,0,0,5],
//             [0,0,0,0,8,0,0,7,9]];

// sudoku(puzzle);
// /* Should return
// [[5,3,4,6,7,8,9,1,2],
// [6,7,2,1,9,5,3,4,8],
// [1,9,8,3,4,2,5,6,7],
// [8,5,9,7,6,1,4,2,3],
// [4,2,6,8,5,3,7,9,1],
// [7,1,3,9,2,4,8,5,6],
// [9,6,1,5,3,7,2,8,4],
// [2,8,7,4,1,9,6,3,5],
// [3,4,5,2,8,6,1,7,9]] 

function sudoku(puzzle) {

    let result = [];

    
    for ( let i = 0; i < 1; i++){
        for ( let j = 0; j < puzzle[0].length; j++) {
            if ( puzzle[i][j] === 0 ){

                // loop through the row, check 1 - 9
                

                console.log(result = [1, 2, 4, 6, 8, 9]);
                
            }
            
        }
    } 
    return puzzle;
}


// Create a function to check each row 
// each row can only contain 1 instance of 1 through 9
// for example for row 1 [1, 2, 4, 6, 8, 9] are missing.

function getMissingNumbers(arr) {
    const rangeOneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const possibleResult = [];

    for (const num of rangeOneToNine){
        if(!arr.includes(num)) {
            possibleResult.push(num);
        }
    }

    return possibleResult;

}

const missingNumbers = getMissingNumbers(array2);
console.log(missingNumbers); //[1, 2, 4, 6, 8, 9]



let puzzle = [ 
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

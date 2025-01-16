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
// [
// [5,3,4,6,7,8,9,1,2],
// [6,7,2,1,9,5,3,4,8],
// [1,9,8,3,4,2,5,6,7],
// [8,5,9,7,6,1,4,2,3],
// [4,2,6,8,5,3,7,9,1],
// [7,1,3,9,2,4,8,5,6],
// [9,6,1,5,3,7,2,8,4],
// [2,8,7,4,1,9,6,3,5],
// [3,4,5,2,8,6,1,7,9]] 

//-----------------------------------------------

// Given Puzzle
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

//------------------------------------------------

function sudoku(puzzle) {

    let result = [];

    // get all the columns
    let columnArr = [];
    for ( let i = 0; i < puzzle.length; i++ ){
        columnArr.push(getColumns(i));    
    }


    // if given a row and column, check for possible 

    for ( let row = 0; row < 9; row++){
        for ( let col = 0; col < 9; col++){

            // console.log(puzzle[i][j]);

            // If the square has the answer given, return that.
            if ( puzzle[row][col] > 0 ){
                result.push(puzzle[row][col]);
            }
            
            // if not get the possible notes or guesses for that square.
            else {
                result.push(getNotes(row, col)) // for row 1, col 1 -> [ 5 ]
            }
        }
    }



    //---

    // get missing numbers from each row
    let rowMissingNumbers = [];
    for ( const row of puzzle){
        rowMissingNumbers.push(getMissingNumbers(row));     
    } 

    // get the column missing numbers
    let colMissingNumbers = []; 
    for ( const col of columnArr){
        colMissingNumbers.push(getMissingNumbers(col));
    }  

    // Get boxes missing numbers
    const boxes = getBoxes(puzzle);
    let boxMissingNumbers = [];
    for ( const box of boxes){
        boxMissingNumbers.push(getMissingNumbers(box));
    }

    //Debugging console logs
    // console.log('Row missing numbers')
    // console.log(rowMissingNumbers);
    // console.log('Columns')
    // console.log(columnArr);
    // console.log('Column missing numbers')
    // console.log(colMissingNumbers);
    // console.log('Box missing numbers')
    // console.log(boxMissingNumbers);
    console.log(result);
    return result;
}

sudoku(puzzle);

//------------------------------------------------

// A function to check for missing numbers when an array is passed in.
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


// console.log(getMissingNumbers(puzzle[0])); //[1, 2, 4, 6, 8, 9]


//------------------------------------------------


// Create a function that gets all the columns

function getColumns(num){ 
    const column = [];
    for ( const row of puzzle ){
        column.push(row[num]);
    }

    return column;
}

// console.log(getColumns(0));
//------------------------------------------------

// Create a function that gets all the 3x3 blocks

function getBoxes(puzzle){
    const boxes = [];

    for ( let row = 0; row < 9; row += 3){
        for ( let col = 0; col < 9; col += 3 ){
            const box = [];

            for ( let i = 0; i < 3; i++){
                const boxRow = [];

                for (let j = 0; j < 3; j++) {
                    //Comment out to get boxes in a single array
                    box.push(puzzle[row + i][col + j]);
                    
                    //Comment out to get 3x3 boxRows
                    // boxRow.push(puzzle[row + i][col + j]);
                }

                //BoxRow
                // box.push(boxRow);
            }

            boxes.push(box);
        }
    }

    return boxes;
}

  
  // Example usage:
  
// const boxes = getBoxes(puzzle);
//   console.log(boxes);

//------------------------------------------------

// Create a function that checks every element for the number of possible solutions, based on it's row, column, and box.

function getNotes(row, col){

    // row = 0, col = 2

    notes = [];

    //figure out how to get the desired box
    
    //check box missing numbers
    const boxes = getBoxes(puzzle);
    let boxMissingNumbers = [];
    for ( const box of boxes){
        boxMissingNumbers.push(getMissingNumbers(box));
    }

    notes.push(boxMissingNumbers[0])

    //check row

    //check column

    return notes;
}

// getNotes(0, 2)

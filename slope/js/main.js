// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

//    a:x1
//    b:y1
//    c:x2
//    d:y2
// Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope


function slope(point){
    let x1 = point[0];
    let y1 = point[1];
    let x2 = point[2];
    let y2 = point[3];

    let m = (y2 - y1) / (x2 - x1);

    if ( m === -Infinity || m === Infinity || m === NaN){
        return 'undefined';
      }
  
      return m.toString();
    
}

console.log(slope([19,3,20,3])); //0
console.log(slope([-10,6,-10,3])); //0
console.log(slope([15,-3,15,-3])); //0
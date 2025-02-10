const arrCheck = value => {

    let result = [];

    for ( let element of value ){
        result.push(Array.isArray(element));

    }

    return result.every(element => element === true);
    


}



console.log(arrCheck([[1], [2]]))
console.log(arrCheck(['1', '2']))
console.log(arrCheck([{1:1}, {2:2}]))
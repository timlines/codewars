function filter_list(l){
    return l.filter((element) => typeof element === 'number' )
}


console.log(filter_list([1, 2, 'a', 'b']));
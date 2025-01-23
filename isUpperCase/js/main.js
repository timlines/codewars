String.prototype.isUpperCase = function() {
    return this.toUpperCase() == this ;
}

let test = 'C'

console.log(test.isUpperCase())
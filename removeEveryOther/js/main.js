// function removeEveryOther(arr){
  
//     return arr.filter(( element, index) => !(index % 2) )
     
     
//    }
   


function removeEveryOther(arr){
    return arr.filter(function(elem, index){
        return index % 2 === 0;
    });
}
function urutMax(arr){
    var max = arr[0]
    for(var i = 0; i < arr.length; i++){
        // for(var j = 0; j < arr.length; j++){          0 3 y 
        //     if(arr[j] > arr[0]){
        //         max = arr[j]
        //     }
        // }
        if(arr[i] > arr[0]){
            max = arr[i]
                }
        
    }
    return max
}


console.log (urutMax([5,6,7]))
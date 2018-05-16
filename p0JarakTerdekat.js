function targetTerdekat(arr) {
  // you can only write your code here!
  var jarak = []
  var hasil = []
  for(var i = 0; i < arr.length; i++){
      if( arr[i] === 'o'){
        for( var j = 0; j < arr.length; j++){     
            if(arr[j] ==='x'){
                if(j > i){
                    hasil = j - i
                    jarak.push(hasil)
                } else if( j < i){
                    hasil = i - j
                    jarak.push(hasil)
                } 
            
            }
           
        }

      }
  }
  
  
  
  if(jarak.length === 0){
        return 0
    } else {
        var dekat = jarak[0]
        for(var k = 0; k < jarak.length; k++)
        if(jarak[k] < jarak[0]){
            dekat = jarak[k]
        }
        return dekat
  }
  
  
}

// TEST CASES

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
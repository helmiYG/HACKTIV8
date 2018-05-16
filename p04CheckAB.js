function checkAB(num) {
    // you can only write your code here!
    var hasil = true
    for(var i = 0;i < num.length; i++){
        if(num[i] === 'a'){
            for(var j = i; j < num.length; j++){
                if(num[j+3] === 'b'){
                    return true
                }
            }
        } else if( num[i] === 'b' && i !== 0){
            for( var k = i; k < num.length; k++){
                if(num[k+3] === 'a'){
                    return true
                }
            }
        
        } else {
            hasil = false
        }
    }
    return hasil
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
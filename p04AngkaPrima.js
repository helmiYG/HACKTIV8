function angkaPrima(angka) {
    // you can only write your code here!
    var hasil = 0
    for(var i = 2; i < 10; i++){
        if( angka !== i){
            hasil = angka % i
            // if(hasil === 0){
            //      false
            // } else {
            //     return true
            // }
            if(hasil === 0){
                return false
            } else{
                hasil = true
            }
        }
    }
    
    return true
  }
  
  // TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

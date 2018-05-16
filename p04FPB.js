function fpb(angka1, angka2) {
    // you can only write your code here!
    var fangka1 = []
    for(var i = 1; i <= angka1/2; i++  ){
        if(angka1%i === 0){
            fangka1.push(i)
        }
    }
    

    var fangka2 = []
    for(var j = 1; j < angka2/2; j++){
        if(angka2 % j === 0){
            fangka2.push(j)
        }
    }

    
    var faktor = fangka1[0]
    var besar = 0
    for(var k = 0; k < fangka1.length; k++){
        for(var l = 0; l < fangka2.length; l++){
            if(fangka1[k] === fangka2[l]){
                besar = fangka1[k]
                if(besar > faktor){
                    faktor = besar
                }
            }
        }
    }
    return faktor
  }
  
  // TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var hasil =[]
    var induk = []
    var gabung = []
    for(var i = 0; i <= angka; i++){ // mencari semua faktor 
        for (var j = 0; j <= angka; j++){
            if( i * j === angka){
                hasil.push(i)
                hasil.push(j)
                induk.push(hasil)
                hasil = []
            }
        }
    }
    
    if(induk.length === 1){
        return 2
    } else {
        // membagi agar faktor yg sama dihilangkan salahsatunya
        var pisah = induk.slice(0,induk.length/2)
    }
      
    induk = []
    for(var i = 0; i < pisah.length;i++){
        gabung = pisah[i].join('')
        induk.push(gabung)
    }

    var arr_pj =[]
    for(var i = 0; i < induk.length;i++){
        var pj =induk[i].length
        arr_pj.push(pj)
    }

    var pendek = arr_pj[0]
    for(var i = 0; i < arr_pj.length; i++){
        if(arr_pj[i] < pendek){
            pendek = arr_pj[i]
        }
    }
    return pendek
  }
  
  // TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var arr = []
    var obj = {}
    if(arrPenumpang.length < 1){
        return arr
    }else {
    for(var i = 0 ; i < arrPenumpang.length; i++){
        obj.penumpang = arrPenumpang[i][0]
        for(var j = 0; j < rute.length; j++){
            if(arrPenumpang[i][1] === rute[j]){     
                var nilaiawal = j  
                obj.naikDari = rute[j]
            }                                      
                                                            
            if(arrPenumpang[i][2] === rute[j]){        
                var nilaiakhir = j    
                obj.tujuan = rute[j]       
            }      
            
        }
        hasil = (nilaiakhir-nilaiawal)*2000
        obj.bayar = hasil
        arr.push(obj)   
        obj = {}                      
    }                                               

   return(arr)
    }
   
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
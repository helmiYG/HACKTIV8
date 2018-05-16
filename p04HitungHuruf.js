// Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. 
// Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar.
//  Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" 
//  memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan 
//  kata yang memiliki huruf berulang, return -1.

function hitungHuruf(kata) {
    // you can only write your code here!

    // PISAH KATA MENJADI ARRAY
   var pisahkata = kata.split(' ') 
    // console.log(pisahkata)

    // SUSUN KATA ALPHABETIS
   var arr_susun = []
   var susun = ''
   for(var i = 0; i < pisahkata.length; i++){     
     susun = pisahkata[i].split('').sort().join('')
    arr_susun.push(susun)
   }
      // console.log(arr_susun)

  // MENGELOMPOKAN HURUF PERKATA
   var acuan = arr_susun[0][0]
   var induk = []
   var induk2 = []
   for(var i = 0; i < arr_susun.length; i++){            
    var tampung = []
    for(var j = 0; j < arr_susun[i].length; j++){       
      if(arr_susun[i][j] === acuan){                    
            tampung.push(arr_susun[i][j])
      } else {
            induk.push(tampung)
            tampung = []
            acuan = arr_susun[i][j]
            tampung.push(arr_susun[i][j])
      }

      if( j === arr_susun[i].length-1){
          induk.push(tampung)
          // tampung.push(arr_susun[i+1][0])
        
      }

    }
    induk2.push(induk)
    induk = []
  }
  // console.log(induk2) 

  //MENGHITUNG HURUF YANG SUDAH DIKELOMPOKKAN
  var arr_panjang = []
  var panjang = 0
  var indukpanjang = []
  for(var i = 0; i < induk2.length; i++){           
    for(var j = 0; j < induk2[i].length;j++){       
      panjang = induk2[i][j].length
      arr_panjang.push(panjang)
    }
    indukpanjang.push(arr_panjang)
    arr_panjang =[]
  }
  // console.log(indukpanjang)


  // MENENTUKAN JUMLAH HURUF TERBANYAK DITIAP KATA
  for(var i = 0; i < indukpanjang.length; i++){
    indukpanjang[i].sort(function(value1, value2) { return value1 < value2 });
  }
  // console.log(indukpanjang)
  var arr_maxpanjang = []
  var maxpanjang = 0
  for(var i = 0; i < indukpanjang.length; i++){
    for(var j = 0; j < indukpanjang[i].length; j++){
      if(indukpanjang[i][j] > 1){
        maxpanjang += indukpanjang[i][j]
      } else if( indukpanjang[i][j] === 1){
        break;
      }
    }
    arr_maxpanjang.push(maxpanjang)
    maxpanjang = 0
  }

  // console.log(arr_maxpanjang)
  // MENETUKAN KATA TERBANYAK DIANTARA SEMUA KATA
  var maxpanjang = arr_maxpanjang[0]
  for(var i = 0; i < arr_maxpanjang.length; i++){
        if(arr_maxpanjang[i] > maxpanjang){
          maxpanjang = arr_maxpanjang[i]
        } 
  }

  if(maxpanjang === 1){
    return -1
  }
  // console.log('jumlah huruf terbanyak '+maxpanjang)

  //MENENTUKAN POSISI KATA TERBANYAK
  var pos = 0
  pos = arr_maxpanjang.indexOf(maxpanjang)
  // console.log('posisi jumlah terbesar '+pos)

  return pisahkata[pos]
   
  
}
  
  // TEST CASES
// console.log(hitungHuruf('hah'))
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
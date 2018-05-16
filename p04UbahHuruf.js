// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
// Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf 
// alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.



function ubahHuruf(kata) {
    // you can only write your code here!
    var ubah = ''
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for(var i = 0; i < kata.length; i++){
        var pos = alphabet.search(kata[i])
        ubah = ubah + alphabet[pos+1]
    }
    
   return ubah
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
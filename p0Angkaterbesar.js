// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. 
// Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan 
// me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, 
// pasangan dua digit angka yang paling besar diantara yang lainnya.


function pasanganTerbesar(num) {
    // you can only write your code here!
    var str = String(num).split('')
    var pas = []
    for(var i=0;i<str.length-1;i++){
        pas[i]=Number(str[i]+str[i+1])
    }
    var pasbesar = pas[0]
    for(var j=1;j<pas.length;j++){
        if (pasbesar < pas[j]){
            pasbesar = pas[j]
        }
    }
    return pasbesar

  }
  
  
  // TEST CASES
  
 
function kaliTerusRekursif(angka) {
  // you can only write your code here!

  var angkaString = String(angka)
  var hasilkali = 1
  for(var i = 0; i < angkaString.length; i++){
      hasilkali *= Number(angkaString[i])
  }

  if(String(hasilkali).length ===  1){
      return hasilkali
  }else {
      return kaliTerusRekursif(hasilkali)
  }
}

console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
function totalDigitRekursif(angka) {
    // you can only write your code here!
    var angkaString = String(angka)
    var sisa = []
    if(angkaString.length === 0){
        return 0
    }else{
        hasil = angkaString[0]
        angkaString = angkaString.slice(1)
        return Number(hasil) + totalDigitRekursif(angkaString)
    }
  }

    // TEST CASES
    console.log(totalDigitRekursif(512)); // 8
    console.log(totalDigitRekursif(1542)); // 12
    console.log(totalDigitRekursif(5)); // 5
    console.log(totalDigitRekursif(21)); // 3
    console.log(totalDigitRekursif(11111)); // 5
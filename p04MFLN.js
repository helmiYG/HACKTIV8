function sorting(arrNumber) {
    // code di sini
   var arrNumbersort = arrNumber.sort()
   return arrNumbersort
  }
  
  
  function getTotal(arrNumber) {
    // code di sini

    if(arrNumber.length === 0){
        return ''
    }
    var jml = 1
    for(var i = arrNumber.length-1;i >= 0; i--){
        var akhir = arrNumber[arrNumber.length-1]
        if(arrNumber[i-1] === akhir){
            jml += 1
        } else {
            return 'angka paling besar adalah '+arrNumber[arrNumber.length-1]+' dan jumlah kemunculan sebanyak '+jml+' kali'
        }
    }


    

  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
function angkaPalindrome(num) {
    while (true) {
      num++;
      var str = String(num);
      var balikAngka =''
      for(var i=str.length-1;i>=0;i--){
        balikAngka = balikAngka +str[i]
      }
      if(str===balikAngka){
        return parseInt(str)
      }
      }
    }
  
  
  
  // TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
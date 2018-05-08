function palindrome(kata){
  var balik = ''
  for(var i = kata.length-1;i >= 0; i--){ 
      balik = balik + kata[i]
  }
  if(kata === balik){
    return true
  } else{
    return false
  }
}


console.log(palindrome('katak'))// true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

// function palindrome(kata) {
//     var balikKata = ''
//   for(var i=kata.length-1;i>=0;i--){
//     balikKata = balikKata+kata[i]
//   }

//   if(balikKata === kata){
//     return true
//   } else{
//     return false
//   }
//     // you can only write your code here!
// }

// // TEST CASES
// console.log(palindrome('katak')); // true
// console.log(palindrome('blanket')); // false
// console.log(palindrome('civic')); // true
// console.log(palindrome('kasur rusak')); // true
// console.log(palindrome('mister')); // false
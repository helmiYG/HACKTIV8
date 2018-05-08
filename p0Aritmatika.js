// Diberikan sebuah function tentukanDeretAritmatika(arr) 
// yang menerima satu parameter berupa array yang terdiri dari angka. 
// Function tersebut akan mengembalikan true jika array dari parameter 
// tersebut merupakan deret aritmatika. Deret aritmatika adalah sebuah deret
// dimana perbedaan setiap angka di deret tersebut konsisten. Contoh, [2, 4, 6, 8]
// adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah 
// deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.

function tentukanDeretAritmatika(arr){
  var selisih = []
  for(var i = 0; i < arr.length-1; i++){
    selisih[i] = arr[i+1] - arr[i]
  }
  for(var j = 0;j < selisih.length-1; j++){
    if(selisih[j] !== selisih[j+1]){
      return false
    }
  }
  return true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

// function tentukanDeretAritmatika(arr) {
//     // you can only write your code here!
//     var deret = []
//     for(var i=0;i<arr.length-1;i++){
//       deret[i] = arr[i+1]-arr[i] 
//     }
//   //  return deret
//     for(var j=0;j<deret.length-1;j++){ 
//       if(deret[j]!==deret[j+1]){
//         return false
//       } 
//     }
//    return true 
//   }
  
  // // TEST CASES
  // console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  // console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  // console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  // console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  // console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
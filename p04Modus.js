function cariModus(arr) {
    // you can only write your code here!
    var jml = 1
    var kel = []
    var nilai = []
    var pisah = []
   for(var i = 0; i < arr.length; i++){
       for(var j = i+1; j < arr.length; j++){
           if(arr[i] === arr[j]){
                jml = jml + 1
                kel.push(jml)
                pisah = arr[i]
                nilai.push(pisah)
           } 
       }
       jml =1
   }

   if(nilai[0] === nilai[i]){
       return -1
   } else if(kel.length > 0){
        return nilai[0]
   } else {
       return -1
   }
   
}



  // TEST CASES
 
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort()
  console.log(animals)
  var kamus = []
  var peternakan = []

  for (var i = 0; i < animals.length; i++) {
    var index = kamus.indexOf(animals[i][0])
    if (index === -1) {
      kamus.push(animals[i][0])
      peternakan.push([animals[i]])
    } else {
      peternakan[index].push(animals[i])
    }
  }

  console.log(peternakan)

















  // var beda = []
  // var pisah = ''
  // var awalslice = 0;
  // for(var i = 0; i < animals.length-1; i++){
  //   if(animals[i][0] !== animals[i+1][0]){
  //     pisah = animals.slice(awalslice,i-awalslice)
  //     beda.push(pisah)
  //   }
  // }
  // console.log (beda)
  // return beda
 
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
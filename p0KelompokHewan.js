function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort()
  var kamus = []
  var peternakan = []

  for (var i = 0; i < animals.length; i++) {
    var index = kamus.indexOf(animals[i][0])  // index = kamus.indexof(a)
    if (index === -1) {                       // = -1
      kamus.push(animals[i][0])               // kamus = a
      peternakan.push([animals[i]])           // ptr = [anoa]
    } else {                                  //
      peternakan[index].push(animals[i])      //
    }                                         //
  }                                           //

  return peternakan
 
}
// TEST CASES
groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])
//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
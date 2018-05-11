function changeMe(arr) {
    // you can only write your code here!
    
    var evans= {

    }

    var robert = {

    }

    if(arr.length === 0){
        var hasil = ''
        return hasil
    }
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            if(j === 0){
                var nama = arr[i][j]
                if( i === 0){
                    evans.firstname = nama
                } else {
                    robert.firtsname = nama
                } 
            } else if (j === 1){
                namaakhir = arr[i][j]
                if( i === 0){
                    evans.lastname = namaakhir
                } else {
                    robert.lastname = namaakhir
                } 
            } else if( j === 2){
                jk = arr[i][j]
                if( i === 0){
                    evans.gender = jk
                } else {
                    robert.gender = jk
                } 
            } else if( j === 3){
                tl = arr[i][j]
                var umur = 2018 - tl
                if( i === 0){
                    evans.age = umur
                } 
            } 
        }
        if(arr[i].length < 4){
            robert.age = 'invalid birth year'
        }
    }
   
    
    var all = {
    
    }
        all['Christ Evans']= evans
        all['Robert Downey']= robert
    console.log(all)
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
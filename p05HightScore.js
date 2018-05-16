function highestScore (students) {
    // Code disini

    if(students.length < 1){
      return ''
    } else {
    var sekolah = {}
    for(var i = 0; i < students.length; i++){
      var kelas = students[i].class       // membuat kelas murid
      /*jika sekolah[kelas] *mean isi dari kelas belum ada(foxes, wolves, tiger), bikin objeknya. atau 
      jika score dari studen lebih besar dari skor kelas yg ada*/
      if(sekolah[kelas] === undefined || students[i].score > sekolah[kelas].score) {
        // sekolah[kelas] = {}   
        // sekolah[kelas].name = students[i].name  // isi objek tsb 
        // sekolah[kelas].score = students[i].score 
        // juga bisa menggunakan cara atas
        sekolah[kelas] = {name : students[i].name,
                          score : students[i].score}

      }
    }
    }
    return sekolah
    // for(var i = 0; i < students.length; i++){
    //   if(students[i].class === 'foxes' && students[i].score > big){
    //       foxes.name = students[i].name
    //       big = students[i].score
    //       foxes.score = big
    //   }else if(students[i].class === 'wolves' && students[i].score > big){
    //       wolves.name = students[i].name
    //       big = students[i].score
    //       wolves.score = big
    //   }
    // }


    // console.log(foxes)
    // console.log(wolves)
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
//   // {
//   //   foxes: { name: 'Alexander', score: 100 },
//   //   wolves: { name: 'Alisa', score: 76 },
//   //   tigers: { name: 'Viktor', score: 80 }
//   // }
  
  
  console.log(highestScore([])); //{}
  
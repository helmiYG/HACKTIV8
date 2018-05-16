/* 
Objectify the delegates! 

Pada sebuah rapat PBB, kita mendapatkan data array of array yang memiliki daftar negara dan delegasinya,
namun karena programmer sebelumnya masih cupu dan belum mengenal object, maka bentuk datanya masih banyak array dalam array

Karena kamu lebih jago. Rubahlah data tersebut menjadi sebuah objek!
*/


function delegates (array) {
    var obj = {}
    for(var i = 0; i < array.length; i++){
            // 
            if(obj[array[i][0]]=== undefined){
               obj[array[i][0]] = array[i][1]
            } 
    }
    console.log(obj)
}

console.log(delegates([
  ['Indonesia', 'Awtian Akbar'],
  ['England', 'Jack the Ripper'],
  ['Japan', 'Watanabe Risa'],
  ['North Korea', 'Kim Jong Un'],
  ['South Korea', 'Im Na Yeon'],
  ['Indonesia', 'BJ Habibie'],
])) 
/*
{
  Indonesia: 'Awtian Akbar',
  England: 'Jack the Ripper',
  Japan: 'Watanabe Risa',
  North Korea: 'Kim Jong Un'
  South Korea: 'Im Na Yeon'
}
*/
console.log(delegates([
  ['Indonesia', 'Dimitri Wahyudiputra'],
  ['America', 'Donald Trump'],
  ['Russia', 'Sergei Dragunov'],
  ['Greece', 'Zeus'],
  ['South Korea', 'Hwoarang'],
  ['Greece', 'Hades']
])) 
/*
{
  Indonesia: 'Dimitri Wahyudiputra',
  America: 'Donald Trump',
  Russia: 'Sergei Dragunov',
  Greece: 'Kim Jong Un'
  South Korea: 'Hwoarang'
}
*/
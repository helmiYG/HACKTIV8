function changeVocals (str) {
        //code di sini
        str2 = ''
        for(var i = 0; i < str.length;i++){
          if(str[i] === 'a'){
            str2 = str2+'b'
          }else if(str[i] === 'e'){
            str2 = str2+'f'
          }else if(str[i] === 'i'){
            str2 = str2+'j'
          }else if(str[i] === 'u'){
            str2 = str2+'v'
          }else if(str[i] === 'o'){
            str2 = str2+'p'
          }else if(str[i] === 'A'){
            str2 = str2+'B'
          }else if(str[i] === 'E'){
            str2 = str2+'F'
          }else if(str[i] === 'I'){
            str2 = str2+'J'
          }else if(str[i] === 'U'){
            str2 = str2+'V'
          }else if(str[i] === 'O'){
            str2 = str2+'P'
          }else{
            str2 = str2 + str[i]
          }
        }
        return str2
      }
      
      
      function reverseWord (str) {
        //code di sini
        return str.split('').reverse().join('')
      }
      
      function setLowerUpperCase (str) {
        //code di sini
        var str2 = ''
        for(var i = 0; i < str.length; i++){
          if(str[i] === str[i].toUpperCase()){
            str2 = str2 + str[i].toLowerCase()
          }else {
            str2 = str2 + str[i].toUpperCase()
          }
        }
        return str2
      }
      
      function removeSpaces (str) {
        //code di sini
        var str2 = ''
        for(var i = 0; i < str.length;i++){
          if(str[i] === ' '){
            str2 = str2 + ''
          }else{
            str2 += str[i]
          }
        }
        return str2
      }
      
      function passwordGenerator (name) {
        //code di sini
        var gantivocal = changeVocals(name)
        var balikkata = reverseWord(gantivocal)
        var ubah = setLowerUpperCase(balikkata)
        var hapusspasi = removeSpaces(ubah)
        return hapusspasi
      }
      console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
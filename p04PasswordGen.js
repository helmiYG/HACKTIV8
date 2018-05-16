function changeVocals (str) {
    //code di sini
    var strbaru = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] === 'a'){
            strbaru = strbaru + 'b'
        } else if(str[i] === 'e'){
            strbaru = strbaru + 'f'
        } else if(str[i] === 'i'){
            strbaru = strbaru + 'j'
        } else if(str[i] === 'o'){
            strbaru = strbaru + 'p'
        } else if(str[i] === 'u'){
            strbaru = strbaru + 'v'
        }else if(str[i] === 'A'){
            strbaru = strbaru + 'B'
        } else if(str[i] === 'E'){
            strbaru = strbaru + 'F'
        } else if(str[i] === 'I'){
            strbaru = strbaru + 'J'
        } else if(str[i] === 'O'){
            strbaru = strbaru + 'P'
        } else if(str[i] === 'U'){
            strbaru = strbaru + 'V'
        } else {
            strbaru = strbaru + str[i]
        }
    }
    return strbaru
  }
  
  function reverseWord (str) {
    //code di sini
    return str.split('').reverse().join('')

  }
  
  function setLowerUpperCase (str) {
    //code di sini

   
    var strbaru = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            strbaru = strbaru + str[i].toLowerCase()
        } else {
            strbaru = strbaru + str[i].toUpperCase()
        }
    }
    return strbaru



  }
  
  function removeSpaces (str) {
    //code di sini
    if(str.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    var strbaru = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] === ' '){
            strbaru = strbaru + ''
        } else {
            strbaru += str[i]
        }
    }
    return strbaru
  }
  
  function passwordGenerator (name) {
    //code di sini
    // var gantivocal = changeVocals(name)
    var balikkata = reverseWord(gantivocal)
    // var gantiukuran = setLowerUpperCase(balikkata)
    // var hapusspasi = removeSpaces(gantiukuran)
    // return hapusspasi
 }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
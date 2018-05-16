function shoppingTime(memberId, money) {
    // you can only write your code here!
    var pesan = ''
    var sisa = money

    // var sale = {
    //     'Sepatu Stacattu'  : 1500000,
    //     'Baju Zoro'        : 500000,
    //     'Baju H&N'         : 250000,
    //     'Sweater Uniklooh' : 175000,
    //     'Casing Handphone' : 50000
    // }
    var listPurchased = []
    var hasil = {

    }

    for(var i = 0; i < 5; i++)
    if(sisa >= 1500000){
        listPurchased.push('Sepatu Stacattu')
        sisa = sisa - 1500000
        // break;
    } else if(sisa >= 500000){
        listPurchased.push('Baju Zoro')
        sisa = sisa - 500000
        // break;
    } else if(sisa >= 250000){
        listPurchased.push('Baju H&N')
        sisa = sisa - 250000
        // break;
    } else if(sisa >= 175000){
        listPurchased.push('Sweater Unikloh')
        sisa = sisa - 175000
        // break;
    }else  if(sisa >= 50000){
        listPurchased.push('Casing Handphone')
        sisa = sisa - 50000
        break;
    }


    if(memberId === '' || memberId == null)
    {
        pesan = 'Mohon maaf, toko X hanya berlaku untuk member saja'
        return pesan
    } else if(money < 50000){
        pesan = 'Mohon maaf, uang tidak cukup'
        return pesan
    } else {
        hasil.memberId = memberId
        hasil.money = money
        hasil.listPurchased = listPurchased
        hasil.changeMoney = sisa
    }

    return hasil
  }
  
  // TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//   //{ memberId: '82Ku8Ma742',
//   // money: 170000,
//   // listPurchased:
//   //  [ 'Casing Handphone' ],
//   // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
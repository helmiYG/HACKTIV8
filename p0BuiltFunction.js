var arr = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];

function dataHandling2(arr){
	arr.splice(1,2,'Roman Alamsyah Elsharawy','Bandar Lampung');
	arr.splice(4,1,'Pria','SMA Internasional Metro')
	console.log(arr)
}

dataHandling2(arr)
console.log('===============================')

var tl=(arr[3].split("/"))
var pisah = tl
var bulan = Number(tl[1])

switch(bulan){
	case 1 : bulan = 'januari';
	break;
	case 2 : bulan = 'februari';
	break;
	case 3 : bulan = 'maret';
	break;
	case 4 : bulan = 'april';
	break;
	case 5 : bulan ='mei'
	break;
	case 6 : bulan = 'juni';
	break;
	case 7 : bulan = 'juli';
	break;
	case 8 : bulan = 'agustus';
	break;
	case 9 : bulan = 'september';
	break;
	case 10 : bulan = 'oktober';
	break;
	case 11 : bulan = 'nopember';
	break;
	case 12 : bulan = 'desember';
	break;
}
console.log(bulan)
console.log('===============================')
tl[0]=Number(tl[0])
tl[1]=Number(tl[1])
tl[2]=Number(tl[2])
tl.sort(function(a,b){return a < b})
console.log(tl)
console.log('===============================')
var tl=(arr[3].split("/"))
console.log(tl.join('-'))
console.log('===============================')
nama = arr[1].split(" ")
nama = nama.slice(0,2)
console.log(nama = nama.join(" "))









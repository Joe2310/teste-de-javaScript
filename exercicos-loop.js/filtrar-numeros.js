const numeros = [ 10,11,3,4,5,23,20,456,466,343,23,100,2]


let achados = []

for (let item of numeros){
	
	if((item >= 10 && item <= 20) || ( item >= 100)){
		achados.push(item)
	}
}
console.log(achados);
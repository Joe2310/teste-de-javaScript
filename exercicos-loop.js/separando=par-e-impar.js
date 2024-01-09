const numeros = [0,1,2,3,4,5,6,7,8,9,10]
const par = [];
const impar = [];

// for ( let item of numeros){
// 	const resto = item % 2
// 	if (resto === 0){
// 		par.push(item)
// 	}else {
// 		impar.push(item)
// 	}
// }


// for ( let i = 0; i < numeros.length; i++){

// 	const resto = numeros[i] % 2;

// 	if(resto === 0){
// 		par.push(numeros[i]);
// 	}else{
// 		impar.push(numeros[i])
// 	}
// }

let i = 0 

while (i < numeros.length){
	
		const resto = numeros[i] % 2;

	if(resto === 0){
		par.push(numeros[i]);
	}else{
		impar.push(numeros[i])
	}
	
	i++;
}


console.log(par);
console.log(impar);
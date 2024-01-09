const numeros = [13,2134124,4,144,144,1141,41,341,41,5,2]

resposta = -1

for (let i = 0; i < numeros.length; i++){
	let numero = numeros[i];
	if(numero === 10){
		resposta = i;
		break;
	}
}
console.log(resposta);
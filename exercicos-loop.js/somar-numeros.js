const numeros = [1,4,3,7,8,5,3,34,65,86]

soma = 0
for(let i = 0; i < numeros.length; i++){
	soma = soma + numeros[i]
	// soma += numeros[i]
	console.log(soma)//  com o console.log dentro das chaves ele imprme todos os calculos.
}
console.log(soma) // com ele fora imprimi somente o calculo final.
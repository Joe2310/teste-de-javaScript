const numeros = [4,6,5,-11,-1]


let maiorDIferenca = [];


for (let x of numeros){
	for (let y of numeros){
		 const difAtual = x - y
		if (difAtual > maiorDIferenca ){
			maiorDIferenca = difAtual
		}

	}
}
console.log(maiorDIferenca);
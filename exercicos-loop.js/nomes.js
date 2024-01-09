const nomes = ['joao','maria','ribeiro','alex', 'joe'];

let nomeschadosComA = [];

for (let item of nomes){
	const inicial = item[0]

	if(inicial === "a" || inicial ==="A"){
		nomeschadosComA.push(item)
	}
}
console.log(nomeschadosComA);
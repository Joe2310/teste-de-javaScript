let nome = "joe silva dos santos";
let idade = 24;
let deficiente = true;
let contribuicao = 21;




if(!nome){
	console.log("Nome obrigatorio.");
}else if (!idade){
	console.log("Idade obrigatória.");
}else if (idade >=65 && contribuicao >= 12){
	console.log("Liberar aposentadoria");
}else if (idade <=64 && contribuicao <= 11){
	console.log("Aposentadoria negada.");
}else if(deficiente === false ){
	console.log("Beneficio negado");
}
else if (deficiente === true && contribuicao >= 12){
	console.log("Liberar beneficio.");
} else if (deficiente === true & contribuicao <= 11){
	console.log("Analisar possibilidade de aposentadoria por invalidez ou auxilio doença.");
}

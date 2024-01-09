const palavra = "alemanha"


let encontrado = false 

for ( let letra of palavra ){
	if (letra == "h"){  //1 igual estou deinindo o valor/  DOIS IGUAIS COMPARA O TIPO / 3 IGuaiS COMPARA O TIPO E VERIFICA SE É IDENTICO.
	encontrado = true
	console.log("tem a letra h");
	break;

	}
}

if (encontrado === false){
	console.log("Nao tem a lera h");
}
const letras = ["a","e","A","x","D","E","e"]


let contador = 0;

for(let item of letras){
	if(item === "E" || item === "e"){
	contador++
	}
}
if (contador === 0 ){
	console.log('Nenhuma letra "E"  ou "e" foi encontrada');
}else if(contador === 1){
	console.log('Foi encontrada  1 letra "E" ou "e" ');
}else {
	console.log(`Foram encontradas ${contador} letras "E" ou "e"`);
}
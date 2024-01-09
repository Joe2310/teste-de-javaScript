const pessoa = {
	nome : "joe",
	idade: 26,
	altura:1.85 ,
	temCnh: false,
	apelidos: ["vaqueiro","suricate"]
}
const Cnh = (pessoa.temCnh ? "Tem CNH" :  "Nao tem CNH");

// if (pessoa.temCnh === true){
// 	Cnh = "Tem CNH"
// }else {
// 	Cnh = "Nao tem CNH"
// }
console.log(`${pessoa.nome} tem ${pessoa['idade']} anos, ${pessoa.altura} de altura, ${Cnh} e tem os seguintes apelidos : `)
for(let item of pessoa.apelidos){
	console.log(`- ${item}`);
}
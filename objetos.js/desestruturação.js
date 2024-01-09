const pessoa = {
	nome : "joe",
	idade: 26,
	altura:1.85 ,
	temCnh: false,
	apelidos: ["vaqueiro","suricate"]
}

// const nome = pessoa.nome  // modo todo estruturado
// const idade = pessoa.idade
// const altura = pessoa.altura


//const {nome, idade, altura} = pessoa  // modo desestruturado

const {nome, idade, altura, ...outros} = pessoa // modo desestruturado com 3 pontinhos que pega o resto das variaveis = chamado SPREAD

console.log(nome, idade,altura)
console.log(outros);
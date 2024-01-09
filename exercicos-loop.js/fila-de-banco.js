const filaDeDentro = ['jose',"maria"]
let filaDeFora = ["enzo","gilvania","joe","joaozinho","tetu"]

while( filaDeDentro.length < 5 ){
	const fila = filaDeFora.shift()

	filaDeDentro.push(fila)
}
console.log(filaDeDentro)
console.log(filaDeFora);
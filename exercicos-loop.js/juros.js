const valorDoProduto = 100;
const numeroDeParcelas = 7

if (numeroDeParcelas === 1) {
	const desconto = valorDoProduto * 10 / 100
	const valorAPagar = valorDoProduto - desconto

	console.log(`Voce deve pagar R$${valorAPagar}, porque a vista tem 10% de desconto`);

}else if  (numeroDeParcelas >=2 && numeroDeParcelas <= 6){
	//parcela sem juros
	const parcelado = (valorDoProduto /numeroDeParcelas).toFixed(2)
	console.log(`Sua compra ficou em  ${numeroDeParcelas} parcelas sem juros de ${parcelado} reais.`)
}else if  (numeroDeParcelas >= 7 && numeroDeParcelas <=12){
	const valorAPagarComJuros = (valorDoProduto * (1 + 1/100) ** numeroDeParcelas).toFixed(2)
	const valorDaParcelaComJuros = (valorAPagarComJuros / numeroDeParcelas)
	console.log(`Sua compra ficou em ${numeroDeParcelas}x de R$ ${valorDaParcelaComJuros.toFixed(2)} totalizando ${valorAPagarComJuros} com juros.`);
}else {
	console.log("Numeros de parcelas inválido");
}
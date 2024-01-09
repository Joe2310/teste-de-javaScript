let jogada1 = "pedra";
let jogada2 = "pedra";


if (jogada1 == jogada2){
	console.log("Empate")
}else  {
	if(jogada1 == "pedra"){
	 if(jogada2 == "tesoura"){
			console.log("pedra ganhou");
		}else{
			console.log("Papel ganhou.");
		}
	} else if(jogada1 == "tesoura"){
		if(jogada2 == "pedra"){
			console.log("pedra ganhou")
		}else {
			console.log("Tesoura ganhou");
		}
	}else {
		if(jogada1 == "papel"){
			if(jogada2 == "tesoura"){
				console.log("tesoura ganhou");
			}else {
				console.log("Papel ganhou");
			}
		}
	}
}
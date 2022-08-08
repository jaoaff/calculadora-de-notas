function calcular(){
	const p1 = Number(document.getElementById("P1").value);
	const p2 = Number(document.getElementById("P2").value);
	const peso= Number(document.getElementById("peso").value);
	const outros= Number(document.getElementById("outros").value);
	const quiz= Number(document.getElementById("quiz").value);
	const exibirResultado = document.getElementById("resultado");

	if (p1=== 0 && p2 > 0){

		exibirResultado.innerHTML = `O campo de p1 deve ser preenchido`;
		}
	
	if (p1 === 0 && p2 === 0){
		let outrosComPeso = (outros * (9 - peso)) / 10;
		let quizComPeso = (quiz * 1) / 10;
		let somaOutroQuiz = outrosComPeso + quizComPeso;
		let resultado = (((7 - somaOutroQuiz) * 10) / peso);

		let item = "p1 e p2";

		mensagem(resultado, item)
	}
	  if(p1 > 0 && p2 === 0){
	 	let outrosComPeso = (outros * (9 - peso)) / 10;
		let quizComPeso = (quiz * 1) / 10;
		let somaOutroQuiz = outrosComPeso + quizComPeso;
		let resultado = ((((7 - somaOutroQuiz) * 10) / peso) * 2) - p1 ;  

		let item = "p2";

		mensagem(resultado, item)	
	 }
	 if (peso === 0) {
	 	let notaComPeso = (((p1 + p2) / 2) * 7) / 10;
		let outrosComPeso = (outros * (9 - 7)) / 10;
		let quizComPeso = (quiz * 1) / 10;
		let resultado = notaComPeso + outrosComPeso + quizComPeso;

	 	exibirResultado.innerHTML = `Utilizando o peso de prova padrão como 7 sua média será de ${parseFloat(resultado.toFixed(1))}`
	 }
	 if (outros === 0) {
	 	let notaComPeso = (((p1 + p2) / 2) * peso) / 10;
		let quizComPeso = (quiz * 1) / 10;
		let somaNotaQuiz = notaComPeso + quizComPeso;
		let resultado = ((7 - somaNotaQuiz) * 10) / (9- peso);

		let item = "outros";
		
		mensagem(resultado, item)
	 }
	 if (quiz === 0) {
	 	let notaComPeso = (((p1 + p2) / 2) * peso) / 10;
	 	let outrosComPeso = (outros * (9 - peso)) / 10;
	 	let somaNotaOutros = notaComPeso + outrosComPeso;
	 	let resultado = ((7 - somaNotaOutros) *10 ) / 1; 

	 	let item = "quiz";

	 	mensagem(resultado, item)
	 }
	 if (p1 != 0 && p2 != 0 && peso != 0 && outros != 0 && quiz != 0) {
		let notaComPeso = (((p1 + p2) / 2) * peso) / 10;
		let outrosComPeso = (outros * (9 - peso)) / 10;
		let quizComPeso = (quiz * 1) / 10;
		let resultado = notaComPeso + outrosComPeso + quizComPeso;
		
		exibirResultado.innerHTML = `Sua média final é  ${parseFloat(resultado.toFixed(1))}`;
	 }



function mensagem(resultado, item){


if(resultado > 10) {exibirResultado.innerHTML = `Você não vai passar, precisaria de uma nota superior a 10 (${parseFloat(resultado.toFixed(1))} de nota de ${item})`;
}

if(resultado <= 10) {exibirResultado.innerHTML = `Para ficar com média final 7 você tem que tirar ${parseFloat(resultado.toFixed(1))} de nota de ${item}`;
}
}

}
function calcular(){
	const p1 = Number(document.getElementById("P1").value);
	const peso= Number(document.getElementById("peso").value);
	const outros= Number(document.getElementById("outros").value);
	const quiz= Number(document.getElementById("quiz").value);


	let outrosTratado = (outros * (9 - peso)) / 10; 

	let quizTratado = quiz / 10; 
	
	let total = outrosTratado + quizTratado;

	let sobra = 7 - total;

	let conta = (sobra * 10) / peso;

	let result = (conta * 2) - p1;




	const exibirResultado = document.getElementById("resultado");
	 if (result > 10 ) {
	 	exibirResultado.innerHTML = `Você não vai passar, seria necessárior tirar nota ${parseFloat(result.toFixed(1))}`;
	 }else {

	exibirResultado.innerHTML = `Para ter uma média final igual a 7 você pecisa tirar nota ${parseFloat(result.toFixed(1))}`;
	}
}

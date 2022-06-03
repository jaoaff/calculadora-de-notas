function calcular(){
	const p1 = Number(document.getElementById("P1").value);
	const peso= Number(document.getElementById("peso").value);
	const outros= Number(document.getElementById("outros").value);
	const quiz= Number(document.getElementById("quiz").value);


	let total = outros + quiz;

	let sobra = 7 - total;

	let conta = (sobra * 10) / peso;

	let result = (conta * 2) - p1;




	const exibirResultado = document.getElementById("resultado");
	 if (result > 10 ) {
	 	exibirResultado.innerHTML = `Você não vai passar, seria necessárior tirar ${parseFloat(result.toFixed(1))}`;
	 }else {

	exibirResultado.innerHTML = `Para ter uma média final igual a 7 você pecisa tirar ${parseFloat(result.toFixed(1))}`;
	}
}
function calcular(){
	const nAtividades = Number(document.getElementById("nativid").value);
	const atividadesFeitas = Number(document.getElementById("ativFeita").value);


	let resultado = (atividadesFeitas * 10) / nAtividades;




	const exibirResultado = document.getElementById("resultado");
	exibirResultado.innerHTML = `Sua nota de quiz é ${parseFloat(resultado.toFixed(1))}`
}
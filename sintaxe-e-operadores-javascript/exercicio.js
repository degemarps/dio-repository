// Crie uma função que recebe dois números como parâmetros.
// Confira se os números são iguais.
// Confira se a soma dos números é maior que 10 ou menor que 20.
// Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
const montaFrases = (n1, n2) => {
  const primeiraFrase = criaPrimeiraFrase(n1, n2);
	const segundaFrase = criaSegundaFrase(n1, n2);

	return `${primeiraFrase} ${segundaFrase}`;
}

const criaPrimeiraFrase = (n1, n2) => {
  let primeiraFrase = `Os números ${n1} e ${n2}`;
	let simNao = 'não';

	if (n1 === n2) simNao = '';

	return `${primeiraFrase} ${simNao} são iguais.`;
}

const criaSegundaFrase = (n1, n2) => {
  const soma = n1 + n2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) comparaDez = 'maior';

	if (soma > 20) comparaVinte = 'maior';

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(montaFrases(11, 10));
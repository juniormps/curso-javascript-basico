//Outra forma mais moderna de percurso para exibição dos valores de um vetor

let valores = [5, 8, 2, 9, 3, 7, 4, 6, 1]

valores.sort()

for (let posicao in valores) {
	console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}
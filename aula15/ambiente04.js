//Exemplo de percurso para exibição dos valores de um vetor

let valores = [5, 8, 2, 9, 3, 7, 4, 6, 1]

valores.sort()

for (let posicao = 0; posicao < valores.length; posicao++) {
	console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}

//"valores.length" é a quantidade total de elementos do vetor
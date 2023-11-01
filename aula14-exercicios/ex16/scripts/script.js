function contagem() {
	var n_inicial = document.getElementById('inicio')
	var n_final = document.getElementById('fim')
	var n_passo = document.getElementById('passo')
	var retorno_resultado = document.getElementById('resultado')

	if (n_inicial.value.length == 0 || n_final.value.length == 0 || n_passo.value.length == 0) {
		//Condição de validação para caso algum não tenha sido preenchido [ERRO]

		retorno_resultado.innerHTML = `Impossível contar! Preencha todos os campos!`

	} else {
		//Condição para caso todos os campos tiverem sido preenchidos.

		retorno_resultado.innerHTML = `Contando... <br>`
		let num_inicio = Number(n_inicial.value)
		let num_fim = Number(n_final.value)
		let num_passo = Number(n_passo.value)

		if (num_passo > 0) {
			//Condição para o PASSO POSITIVO

			if (num_inicio < num_fim) {
				//Condição para caso o INÍCIO SEJA MENOR QUE O FIM 

				for (let c = num_inicio; c <= num_fim; c += num_passo) {
					retorno_resultado.innerHTML += `${c} \u{1F449}`
				}
	
			} else {
				//Condição para caso o INÍCIO SEJA MAIOR QUE O FIM (contagem regressiva)
	
				for (let c = num_inicio; c >= num_fim; c -= num_passo) {
					retorno_resultado.innerHTML += `${c} \u{1F449}`
				}
	
			}

			retorno_resultado.innerHTML += `\u{1F3C1}`

		} else if (num_passo < 0) {
			//Condição para o PASSO NEGATIVO

			if (num_inicio < num_fim) {
				//Condição para caso o INÍCIO SEJA MENOR QUE O FIM

				retorno_resultado.innerHTML = `Impossível contar com os parâmetros fornecidos!`
	
			} else {
				//Condição para caso o INÍCIO SEJA MAIOR QUE O FIM (contagem regressiva)
	
				for (let c = num_inicio; c >= num_fim; c += num_passo) {
					retorno_resultado.innerHTML += `${c} \u{1F449}`
				}

				retorno_resultado.innerHTML += `\u{1F3C1}`
	
			}

		} else if (num_passo == 0) {
			//Condição para o PASSO IGUAL A ZERO [ERRO]

			retorno_resultado.innerHTML = `Passo Inválido! Digite um valor diferente de ZERO.`

		}


		
	}
	
}
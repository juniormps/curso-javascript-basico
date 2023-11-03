function supertabuada() {
	var caixa_entrada = document.getElementById('entrada')
	var retorno_resultado = document.getElementById('select_tabuada')

	if (caixa_entrada.value.length == 0) {

		alert('Digite um número no campo!')

	} else {

		num_entrada = Number(caixa_entrada.value)
		retorno_resultado.innerHTML = ''  //Isto limpa o campo de resultado

		for (var c = 0; c <= 9; c++ ) {

			var item  = document.createElement('option')
			item.text = `${num_entrada} x ${c} = ${num_entrada * c}`
			item.value = `tab${c}`

			retorno_resultado.appendChild(item)

		}

	}

}
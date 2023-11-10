let caixa_entrada = document.getElementById('entrada')
let caixa_exibicao = document.getElementById('select_numeros')
let retorno_analise = document.getElementById('resultado')
let valores_add = []

function isNumero(n) {
	if (Number(n) >= 1 && Number(n) <= 100) {
		return true
	} else {
		return false
	}
}

function inLista(n, list) {
	if (list.indexOf(Number(n)) != -1) {
		return true
	} else {
		return false
	}
}

function entradaNumero() {
	
	if (isNumero(caixa_entrada.value) && !inLista(caixa_entrada.value, valores_add)) {

		valores_add.push(Number(caixa_entrada.value))

		let item = document.createElement('option')  //cria o elemento "option"
		item.text = `Valor ${caixa_entrada.value} adicionado`  //adiciona o texto no elemento option
		caixa_exibicao.appendChild(item)  //adiciona o elemento "option" (let item) no campo select do HTML (let caixa_exibicao)

		retorno_analise.innerHTML = ''

	} else {

		alert('Digite um número que ainda não foi inserido no campo!')

	}

	caixa_entrada.value = ''
	caixa_entrada.focus()
}

function finalizarAnalise() {

	if (valores_add.length == 0) {

		alert('Adicione valores antes de finalizar!')

	} else {
		valores_add.sort()

		let total_elementos = valores_add.length
		let last_index = total_elementos - 1
		let maior_valor = valores_add[last_index]
		let menor_valor = valores_add[0]
		let soma = 0

		for (let index in valores_add) {
			soma += valores_add[index]
		}

		let media = soma / total_elementos

		retorno_analise.innerHTML = ''
		retorno_analise.innerHTML += `<p>Ao todo, temos ${total_elementos} elementos</p>`
		retorno_analise.innerHTML += `<p>O maior valor adicionado foi ${maior_valor}</p>`
		retorno_analise.innerHTML += `<p>O menor valor adicionado foi ${menor_valor}`
		retorno_analise.innerHTML += `<p>A soma dos valores adicionados é ${soma}</p>`
		retorno_analise.innerHTML += `<p>A média dos valores adicionados é ${media}</p>`

	}
}
function verificar() {
	var data = new Date()
	var ano_atual = data.getFullYear()
	var ano_inserido = window.document.getElementById('ano_nascimento')
	var sexo_inserido = window.document.getElementsByName('sexo')
	var retorno_resultado = window.document.getElementById('resultado')

	retorno_resultado.style.width = '100%'
	retorno_resultado.style.textAlign = 'center'

	//Abaixo foi criada a imagem no HTML por aqui pelo JavaScript
	var resultado_idade = ano_atual - ano_inserido.value
	var imagem = window.document.createElement('img')
	imagem.setAttribute('id', 'foto')
	imagem.style.width = '200px'
	imagem.style.height = '200px'
	
	

	if (ano_inserido.value.length != 4 || ano_inserido.value.length > ano_atual ) {
		window.alert(`[ERRO] Digite o ano com 4 caracteres`)
	} else {

		if (sexo_inserido[0].checked) {  //o ZERO identifica o primeiro "radio buton"
			retorno_resultado.innerHTML = `Detectamos um HOMEM com ${resultado_idade} anos de idade.`
			
			retorno_resultado.appendChild(imagem)  //Isto adiciona a imagem

			if (resultado_idade < 15) {
				//Jovem
				imagem.setAttribute('src', 'imagens/imagem-menino.png')
			} else if (resultado_idade < 60) {
				//Adulto
				imagem.setAttribute('src', 'imagens/imagem-homem-adulto.png')
			} else {
				//Idoso
				imagem.setAttribute('src', 'imagens/imagem-homem-idoso.png')
			}

		} else {
			retorno_resultado.innerHTML = `Detectamos uma MULHER com ${resultado_idade} anos de idade.`

			retorno_resultado.appendChild(imagem)

			if (resultado_idade < 15) {
				//Jovem
				imagem.setAttribute('src', 'imagens/imagem-menina.png')
			} else if (resultado_idade < 60) {
				//Adulto
				imagem.setAttribute('src', 'imagens/imagem-mulher-adulta.png')
			} else {
				//Idoso
				imagem.setAttribute('src', 'imagens/imagem-mulher-idosa.png')
			}
		}
	}
}
function carregar() {
	var mensagem = window.document.getElementById('mensagem')
	var imagem = window.document.getElementById('imagem')
	var data = new Date()
	var hora = data.getHours()
	var minutos = data.getMinutes()
	
	mensagem.innerHTML = `Agora são ${hora} horas e ${minutos} minutos. `

	if (hora < 12 ) {
		imagem.src = 'imagens/imagem-manha.png' 
		mensagem.innerHTML += `Bom dia!`
		document.body.style.backgroundColor = '#e2cd9f'
		
	} else if (hora < 18) {
		imagem.src = 'imagens/imagem-tarde.png'
		mensagem.innerHTML += `Boa tarde!`
		document.body.style.backgroundColor = '#b9846f'
	} else {
		if (hora == 18 && minutos == 0) {
			imagem.src = 'imagens/imagem-tarde.png'
			mensagem.innerHTML += `Boa tarde!` 
			document.body.style.backgroundColor = '#b9846f'
		} else {
			imagem.src = 'imagens/imagem-noite.png'
			mensagem.innerHTML += `Boa noite!`
			document.body.style.backgroundColor = 'rgb(19,52,75)'
		}
	}

}

var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()

console.log(`Agora são exatamente ${hora} horas ${minutos} minutos ${segundos} segundos`)

if (hora < 12 ) {
	console.log(`Bom dia!`)
} else if (hora < 18) {
	console.log(`Boa tarde!`)
} else {
	if (hora == 18 && minutos == 0) {
		console.log(`Boa tarde!`)
	} else {
		console.log(`Boa noite!`)
	}
}
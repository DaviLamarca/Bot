module.exports = {
    nome: 'feliz',
    async executar(memseagem, bot) {
        if (memseagem) {

            function feliciadade(valor1) {
                let valor = Math.floor(Math.random() * valor1)
                return valor
            }

            let mensagem = feliciadade(100) + 1
            mensagem.channel.send(`Estou ${mensagem}% feliz!`)
        }
    }
}
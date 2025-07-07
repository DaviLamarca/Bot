module.exports = {
    nome: 'feliz',
    async executar(memseagem, bot) {
        if (memseagem) {

            function feliciadade(valor1) {
                let valor = Math.floor(Math.random() * valor1)
                return valor
            }

            let msg = feliciadade(100) + 1
            memseagem.channel.send(`Estou ${msg}% feliz!`)
        }
    }
}
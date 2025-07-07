module.exports = {
    nome: 'feliz',
    async executar(memseagem, bot) {
        if (memseagem) {

            function feliciadade(valor1) {
                return Math.floor(Math.random() * valor1)
            }

            let msg = feliciadade(100) + 1
            memseagem.channel.send(`Estou ${msg}% feliz!`)
        }
    }
}
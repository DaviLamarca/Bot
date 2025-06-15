module.exports = {
    nome: 'limpar',
    async executar(mensagem, bot) {
        const listaMensagens = await mensagem.channel.messages.fetch({ limit: 100 })
        console.log(listaMensagens);
        await mensagem.channel.bulkDelete(listaMensagens)
        let msg = await mensagem.channel.send("Mensagens apagadas com sucesso!")
        setTimeout(() => {
            msg.delete()
        }, 5000)
    }
}
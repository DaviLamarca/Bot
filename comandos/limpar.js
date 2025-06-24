module.exports = {
    nome: 'limpar',
    async executar(mensagem, bot) {
        if (!mensagem.member.permissions.has("Administrator")) {
            return mensagem.reply("Você precisa ser administrador para usar este comando.");
        }
        const listaMensagens = await mensagem.channel.messages.fetch({ limit: 100 })
        console.log(listaMensagens);
        await mensagem.channel.bulkDelete(listaMensagens)
        let msg = await mensagem.channel.send("Mensagens apagadas com sucesso!")
        setTimeout(() => {
            msg.delete().catch(() => { })
        }, 5000)
    }
}
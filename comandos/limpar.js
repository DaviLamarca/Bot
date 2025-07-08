module.exports = {
    nome: 'limpar',
    async executar(mensagem, bot) {

        let bodycomando = mensagem.content.trim();
        let semCmd = bodycomando.split(" ");
        let args = semCmd.slice(1);

        if (!mensagem.member.permissions.has("Administrator")) {
            return mensagem.reply("Você precisa ser administrador para usar este comando.");
        }
        const listaMensagens = await mensagem.channel.messages.fetch({ limit: Number(args[1]) })

        console.log(listaMensagens);
        await mensagem.channel.bulkDelete(listaMensagens)
        let msg = await mensagem.channel.send("Mensagens apagadas com sucesso!")
        setTimeout(() => {
            msg.delete().catch(() => { })
        }, 5000)
    }
}
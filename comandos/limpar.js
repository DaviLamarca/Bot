module.exports = {
    nome: 'limpar',
    async executar(mensagem, bot) {

        if (!mensagem.member.permissions.has("Administrator")) {
            return mensagem.reply("Você precisa ser administrador para usar este comando.");
        }

        let bodycomando = mensagem.content.trim();
        let semCmd = bodycomando.split(" ");
        let args = semCmd.slice(1);

        const quantidade = parseInt(args[0]);

        if (isNaN(quantidade) || quantidade < 1 || quantidade > 100) {
        }

        try {
            const listaMensagens = await mensagem.channel.messages.fetch({ limit: quantidade + 1 })
            await mensagem.channel.bulkDelete(listaMensagens);

            const msg = await mensagem.channel.send("🧹 Mensagens apagadas com sucesso!");
            setTimeout(() => {
                msg.delete().catch(() => { });
            }, 5000);
        } catch (erro) {
            console.error("Erro ao apagar mensagens:", erro);
            mensagem.reply("❌ Ocorreu um erro ao tentar apagar as mensagens.");
        }
    }
}

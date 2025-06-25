let config = require('../config.json')
module.exports = {
    nome: "messageCreate",
    async executar(mensagem, bot) {
        let prefixo = config.prefixo
        if (!mensagem.content.startsWith(config.prefixo) || mensagem.author.bot) return;
        if (bot.bloqueados.has(mensagem.channel.id)) {
            let msg = await mensagem.channel.send("Não posso executar comandos nesse canal")
            setTimeout(() => {
                msg.delete().catch(() => { })
            }, 2000)
            return;
        }

        const args = mensagem.content.slice(prefixo.length).trim().split(/ +/);
        const comandoNome = args.shift().toLowerCase();
        console.log(comandoNome);
        let comando = bot.commands.get(comandoNome)
        console.log(bot.commands);

        if (!comando) return
        try {
            comando.executar(mensagem, bot)
        } catch (error) {
            console.error(error);
            mensagem.reply('❌ Ocorreu um erro ao executar esse comando.');
        }
    }
}
let config = require('../config.json')
module.exports = {
    nome: "messageCreate",
    async executar(mensagem, bot) {
        let prefixo = config.prefixo
        if (!mensagem.content.startsWith(config.prefixo) || mensagem.author.bot) return;

        const args = mensagem.content.slice(prefixo.length).trim().split(/ +/);
        console.log(args);
        const comandoNome = args.shift().toLowerCase();

        let comando = bot.commands.get(comandoNome)
        console.log(comando);
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
module.exports = {
    nome: "setarAdicionar",
    async executar(mensagem, bot) {
        if (!mensagem.member.permissions.has("Administrator")) {
            return mensagem.reply("Você precisa ser administrador para usar este comando.");
        }

        let canal = mensagem.mentions.channels.first();

        if (!canal) {
            let bodycomando = mensagem.content.trim();
            let semCmd = bodycomando.split(" ");
            let args = semCmd.slice(1);

            if (!args[0]) {
                return mensagem.reply("❌ Você precisa informar o canal por menção ou ID.");
            }

            const canalIdLimpo = args[0].replace(/[<#!>]/g, '');
            canal = mensagem.guild.channels.cache.get(canalIdLimpo);

            if (!canal) {
                return mensagem.reply("❌ Canal não encontrado nesse servidor.");
            }
        }

        bot.adicionar.set(mensagem.guild.id, canal.id);
        mensagem.reply(`Esse canal vai ser o principal para apresentação de novos membros!`);
    }
};

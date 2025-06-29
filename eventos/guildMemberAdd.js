module.exports = {
    nome: "guildMemberAdd",
    async executar(member, bot) {
        try {

            const canal = await bot.channels.fetch("1386566946623062057");
            const canalErro = await bot.channels.fetch("1388005828736319651")

            if (!canal) {
                return
            }

            const cargo = await member.guild.roles.fetch("1388872136466370660")

            try {
                await canal.send(`👋 Olá, <@${member.id}>! Seja bem-vindo(a) ao servidor! Sou o bot oficial do servidor! ${cargo}`);
            } catch (erro) {
                await canalErro.send("Erro em mandar mensagem: " + erro)
            }
        } catch (erro) {
            await canalErro.send("Erro em mandar mensagem:" + erro)
        }
    }
};

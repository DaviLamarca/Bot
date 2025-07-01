module.exports = {
    nome: "guildMemberAdd",
    async executar(member, bot) {
        const canal = await bot.channels.fetch("1386566946623062057");
        const canalAdm = await bot.channels.fetch("1388005828736319651")

        try {

            if (!canal) {
                return
            }

            const cargo = await member.guild.roles.fetch("1388872136466370660")

            await canal.send(`👋 Olá, <@${member.id}>! Seja bem-vindo(a) ao servidor! Sou o bot oficial do servidor! ${cargo}`);
            await canalAdm.send(`Novo usuário entrou. Informações sobre: ${member.displayName}, ${member.joinedAt.toLocaleString(pt-BR)}`)
        } catch (erro) {
            await canalAdm.send("Erro em mandar mensagem:" + erro)
        }
    }
};

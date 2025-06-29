module.exports = {
    nome: "guildMemberAdd",
    async executar(member, bot) {
        try {

            const canal = await bot.channels.fetch("1386566946623062057");

            if (!canal) {
                return
            }

            let cargo = await member.guild.roles.fetch("1388872136466370660")

            if (member.user.bot) {
                await canal.send("🤖 Um novo bot entrou no servidor!");
            } else {
                await canal.send(`👋 Olá, <@${member.id}>! Seja bem-vindo(a) ao servidor! Sou o bot oficial do servidor! @${cargo}`);
            }
        } catch (erro) {
            console.error("Erro ao enviar mensagem de boas-vindas:", erro);
        }
    }
};

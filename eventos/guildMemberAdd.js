module.exports = {
    nome: "guildMemberAdd",
    async executar(member, bot) {
        try {
            const canalId = bot.adicionar.get(member.guild.id);

            if (!canalId) return;

            const canal = await bot.channels.fetch(canalId);

            if (member.user.bot) {
                await canal.send("🤖 Um novo bot entrou no servidor!");
            } else {
                await canal.send(`👋 Olá, <@${member.id}>! Seja bem-vindo(a) ao servidor!`);
            }
        } catch (erro) {
            console.error("Erro ao enviar mensagem de boas-vindas:", erro);
        }
    }
};

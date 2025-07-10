const { EmbedBuilder } = require("discord.js");

module.exports = {
    nome: "guildMemberAdd",
    async executar(member, bot) {
        try {
            const canal = await bot.channels.fetch("1386566946623062057");
            const canalAdm = await bot.channels.fetch("1388005828736319651");
            const canalBordo = await bot.channels.fetch("1392361688774217918");

            if (!canal || !canalAdm || !canalBordo) return;

            const cargo = await member.guild.roles.fetch("1388872136466370660");
            const cargoMention = `<@&${cargo.id}>`;

            const embed = new EmbedBuilder()
                .setTitle(`[NOVA CONEXÃO ESTABELECIDA]`)
                .setDescription(
                    `Boas-vindas à nossa estação, ${member}! 👋\n` +
                    `Estamos felizes em ter você a bordo.\n` +
                    `Explore nossos setores e sinta-se em casa!\n\n` +
                    `🗺️ Mapa da estação: aqui você poderá ficar por dentro dos canais > <#1392355629607288906>\n\n` +
                    `💬 Conversa-livre: aqui você poderá se comunicar com outros membros > <#1386566946623062057>`
                )
                .setColor(0x3639ED)
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 128 }))
                .setImage("https://i.imgur.com/IW0dluv.png")
                .setFooter({
                    text: `ID de Tripulante: ${member.id} 
Entrada em: ${new Date().toLocaleDateString('pt-BR')}`,
                    iconURL: member.user.displayAvatarURL({ dynamic: true })
                })
                .setTimestamp();


            const embedBoasVindas = new EmbedBuilder()
                .setTitle("💫 Membro entrou")
                .setDescription(`${member} entrou do servidor 💫`)
                .setColor("#00ff00")
                .setFooter({ text: `ID de Tripulante: ${member.id}` })
                .setTimestamp();


            await canalAdm.send({ embeds: [embedBoasVindas] })
            await canalBordo.send({ embeds: [embed] });
            await canal.send(`Um novo tripulante atracou na estação! Boas-vindas, ${member}! 🛰️ ${cargoMention}, temos um novo membro na área!`);
        } catch (erro) {
            console.error("Erro ao enviar mensagens de boas-vindas:", erro);
            if (canalAdm) {
                await canalAdm.send("❌ Erro ao enviar mensagem de boas-vindas:\n```" + erro + "```");
            }
        }
    }
};

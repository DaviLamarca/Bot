const { EmbedBuilder } = require('discord.js');

module.exports = {
    nome: 'guildMemberRemove',
    async executar(member, bot) {
        const canal = bot.channels.cache.get('1388005828736319651');
        if (canal) {
            const embed = new EmbedBuilder()
                .setTitle("👋 Membro saiu")
                .setDescription(`${member} saiu do servidor 😢`)
                .setColor(0xff5555)
                .setFooter({ text: `ID de Tripulante: ${member.id}` })
                .setTimestamp();

            await canal.send({ embeds: [embed] });
        }
    }
}

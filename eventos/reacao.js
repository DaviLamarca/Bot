const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    nome: 'reacao',
    async executar(mensagem, bot) {
        const botao = new ButtonBuilder()
            .setCustomId('exemplo_botao')
            .setLabel('Clique Aqui!')
            .setStyle(ButtonStyle.Primary);

        const linha = new ActionRowBuilder().addComponents(botao);

        await mensagem.reply({
            content: 'Clique no botão abaixo:',
            components: [linha]
        });
    }
}
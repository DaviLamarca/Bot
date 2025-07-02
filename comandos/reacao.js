const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    nome: 'reacao',
    async executar(mensagem, bot) {
        const cargoId1 = "1390099616854315209";
        const cargoId2 = "1390099510209937608";
        const cargoId3 = "1390100386601500934"
        const cargoId4 = "1390100429475418293"

        const botao1 = new ButtonBuilder()
            .setCustomId(`darCargo_${cargoId1}`)
            .setLabel('Preto')
            .setStyle(ButtonStyle.Primary);

        const botao2 = new ButtonBuilder()
            .setCustomId(`darCargo_${cargoId2}`)
            .setLabel('Amarelo')
            .setStyle(ButtonStyle.Primary);

        const botao3 = new ButtonBuilder()
            .setCustomId(`darCargo_${cargoId3}`)
            .setLabel('Azul')
            .setStyle(ButtonStyle.Primary);

        const botao4 = new ButtonBuilder()
            .setCustomId(`darCargo_${cargoId4}`)
            .setLabel('Vermelho')
            .setStyle(ButtonStyle.Primary);


        const linha = new ActionRowBuilder().addComponents(botao1, botao2, botao3, botao4);

        await mensagem.reply({
            content: 'Clique para receber um cargo:',
            components: [linha]
        });
    }
};

const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

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
            .setStyle(ButtonStyle.Premium);

        const botao2 = new ButtonBuilder()
            .setCustomId(`darCargo_${cargoId2}`)
            .setLabel('Amarelo')
            .setStyle(ButtonStyle.Premium);

        const botao3 = new ButtonBuilder()
            .setCustomId(`darCargo_${cargoId3}`)
            .setLabel('Azul')
            .setStyle(ButtonStyle.Premium);

        const botao4 = new ButtonBuilder()
            .setCustomId(`darCargo_${cargoId4}`)
            .setLabel('Vermelho')
            .setStyle(ButtonStyle.Premium);


        const linha = new ActionRowBuilder().addComponents(botao1, botao2, botao3, botao4);

        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Escolha uma cor para receber um cargo')
            .setDescription(
                'Clique no botão para receber um dos cargos de cor disponíveis. Ao escolher uma cor, você receberá o cargo correspondente e, automaticamente, perderá o acesso a este canal. Isso significa que, após a escolha, você não poderá mais visualizar nem interagir neste canal específico, pois ele será ocultado para você. Pense bem antes de selecionar, pois a alteração é definitiva até que um administrador ou moderador faça a remoção do cargo para restaurar seu acesso. Caso tenha dúvidas, entre em contato com a equipe do servidor para obter ajuda.'
            );
        await mensagem.reply({
            embed: [embed],
            components: [linha]
        });
    }
};

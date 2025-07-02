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
        bot.on('interactionCreate', async (interaction) => {
            if (!interaction.isButton()) return;

            const cargoId = '1387994616959205507';

            const membro = interaction.guild.members.cache.get(interaction.user.id);

            if (!membro) {
                return interaction.reply({ content: 'Não consegui encontrar você no servidor.', ephemeral: true });
            }

            try {
                await membro.roles.add(cargoId);
                await interaction.reply({ content: 'Cargo atribuído com sucesso! 🎉', ephemeral: true });
            } catch (error) {
                console.error('Erro ao adicionar cargo:', error);
                await interaction.reply({ content: 'Falha ao adicionar o cargo.', ephemeral: true });
            }
        });

    }
}
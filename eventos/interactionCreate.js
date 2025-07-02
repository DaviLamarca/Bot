module.exports = {
    nome: 'interactionCreate',
    async executar(interaction, bot) {
        if (!interaction.isButton()) return;

        const customId = interaction.customId;

        if (customId.startsWith('darCargo_')) {
            const cargoId = customId.split('_')[1];
            const membro = interaction.guild.members.cache.get(interaction.user.id);
            if (!membro) {
                return interaction.reply({ content: 'Não consegui encontrar você no servidor.', ephemeral: true });
            }

            try {
                await interaction.user.send('Olá, a cor foi adicionada com sucesso!');
                await membro.roles.add(cargoId);
            } catch (error) {
                console.error('Erro ao adicionar cargo:', error);
            }
        }


    }
};

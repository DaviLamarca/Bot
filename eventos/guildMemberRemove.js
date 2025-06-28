module.exports = {
    nome: 'guildMemberRemove',
    async executar(member, bot) {
        client.on('guildMemberRemove', async member => {
            const fetchedLogs = await member.guild.fetchAuditLogs({
                limit: 1,
                type: 'MEMBER_KICK',
            });

            const kickLog = fetchedLogs.entries.first();

            if (kickLog && kickLog.target.id === member.id) {
                console.log(`${member.user.tag} foi expulso por ${kickLog.executor.tag}`);
            } else {
                console.log(`${member.user.tag} saiu por vontade própria.`);
            }
        });

    }
}
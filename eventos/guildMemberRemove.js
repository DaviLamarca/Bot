client.on('guildMemberRemove', member => {
    const canal = client.channels.cache.get('123456789012345678');
    if (canal) {
        canal.send(`${member.user.tag} saiu do servidor 😢`);
    }
});

client.on('guildMemberRemove', member => {
    const canal = client.channels.cache.get('1388340984672424028');
    if (canal) {
        canal.send(`${member.user.tag} saiu do servidor 😢`);
    }
});

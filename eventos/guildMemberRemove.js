module.export = {
    nome: 'guildMemberRemove',
    async executar(member) {
        const canal = client.channels.cache.get('1388340984672424028');
        if (canal) {
            await canal.send(`${member.user.tag} saiu do servidor 😢`);
        }
    }
}
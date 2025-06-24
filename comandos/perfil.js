const { EmbedBuilder } = require('discord.js')
module.exports = {
    nome: 'perfil',
    async executar(mensagem) {
        if (!mensagem.guild || !mensagem.member) {
            return mensagem.reply("Esse comando só pode ser usado em servidores.");
        }
        const avatar = mensagem.member.user.displayAvatarURL({ dynamic: true, size: 512 })
        let menber = mensagem.member.user.tag

        let body = new EmbedBuilder().setTitle(mensagem.member.user.displayName).setTitle(mensagem.member.user.displayName).setDescription(`${mensagem.member.joinedAt}`).setImage(avatar)
        let msg = await mensagem.channel.send({ embeds: [body] })
        setTimeout(() => {
            msg.delete().catch(() => { })
            mensagem.delete().catch(() => { })
        }, 5000)
    }
}
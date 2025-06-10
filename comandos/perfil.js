const { EmbedBuilder } = require('discord.js')
module.exports = {
    nome: 'perfil',
    async executar(mensagem) {
        if (!mensagem.guild || !mensagem.member) {
            return mensagem.reply("Esse comando só pode ser usado em servidores.");
        }
        const avatar = mensagem.member.user.displayAvatarURL({ dynamic: true, size: 512 })
        let menber = mensagem.member.user.tag

        let body = new EmbedBuilder().setTitle(mensagem.member.user.displayName).setThumbnail(avatar).setTitle(mensagem.member.user.displayName).setDescription("O seu usuario é: " + menber)
        let msg = await mensagem.channel.send({ embeds: [body] })
        setTimeout(() => {
            msg.delete()
            mensagem.delete()
        }, 5000)
    }
}
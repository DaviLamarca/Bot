const { Client } = require('discord.js');
module.exports = {
    nome: "guildMemberAdd",
    async executar(menber, bot) {

        let canal = await bot.channels.fetch("1386566946623062057")
        if (canal) {
            await canal.send(`Bem-vindo ao Servidor! ${menber.user.tag}`)
        } else {
            console.log("Não deu para dizer oi");

        }
    }
}
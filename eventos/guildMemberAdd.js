const { Client } = require('discord.js');
module.exports = {
    nome: "guildMemberAdd",
    async executar(member, bot) {

        let canal = await bot.channels.fetch("1386566946623062057")
        if (canal) {
            await canal.send(`Bem-vindo ao servidor, <@${member.id}>!`);
        } else {
            console.log("Não deu para dizer oi");

        }
    }
}
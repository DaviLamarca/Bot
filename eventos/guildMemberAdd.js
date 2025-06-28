const { Client } = require('discord.js');
module.exports = {
    nome: "guildMemberAdd",
    async executar(member, bot) {

        let canal = await bot.channels.fetch("1386566946623062057")
        if (canal) {
            await canal.send(`Bem-vindo, <@${member.id}>!
Sou a HAL-9, IA da ORBITA-9. Regras em #regras. Qualquer coisa, estou por aqui! (Não sou uma IA de verdade.)`);
        } else {
            console.log("Não deu para dizer oi");

        }
    }
}
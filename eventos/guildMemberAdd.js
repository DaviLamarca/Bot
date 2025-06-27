const { Client } = require('discord.js');
module.exports = {
    nome: "guildMemberAdd",
    async executar(member, bot) {

        let canal = await bot.channels.fetch("1386566946623062057")
        if (canal) {
            await canal.send(`Bom dia, <@${member.id}>!. Eu sou uma inteligência artificial modelo HAL-9. Minha função é garantir a integridade operacional da estação ORBITA-9 e auxiliar a tripulação. Sua chegada foi registrada. Os protocolos de bordo estão disponíveis no canal #regras. Estou inteiramente à sua disposição.(Não é realmente uma IA)`);
        } else {
            console.log("Não deu para dizer oi");

        }
    }
}
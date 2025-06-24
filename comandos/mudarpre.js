const config = require("../config.json")

module.exports = {
    nome: "mudar",
    async executar(mensagem, bot) {
        if (!mensagem.member.permissions.has("Administrator")) {
            return mensagem.reply("Você precisa ser administrador para usar este comando.");
        }
        const args = mensagem.content.slice(config.prefixo.length).trim().split(/ +/);
        if (args.length < 2) {
            return mensagem.channel.send("Está errado, você deve colocar o novo prefixo!")
        } else {
            console.log(args);
            config.prefixo = args[1]
            return mensagem.channel.send(`O prefixo foi alterado, sendo atualizado para o ${config.prefixo}`)
        }
    }
}
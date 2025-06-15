const { EmbedBuilder } = require("discord.js");
let config = require('../config.json')
let prefixo = config.prefixo;

module.exports = {
    nome: "cmsg",
    async executar(mensagem, bot) {
        let bodycomando = mensagem.content.trim();
        let semCmd = bodycomando.split(" ");
        let args = semCmd.slice(1);

        if (args.length < 2) {
            return mensagem.channel.send(`❌ Uso incorreto! Use: \`${prefixo}cmsg {título} {descrição}\``);
        }

        let title = args.shift().trim();
        let descricao = args.join(" ").trim();

        if (title.length > 256) title = title.slice(0, 253) + "...";
        if (descricao.length > 4096) descricao = descricao.slice(0, 4093) + "...";

        const embed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(descricao)
            .setColor(0x0099FF)

        return mensagem.channel.send({ embeds: [embed] });
    }
}

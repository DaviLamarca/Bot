const { EmbedBuilder } = require("discord.js");
let config = require('../config.json')
let prefixo = config.prefixo;

module.exports = {
    nome: "cmsg",
    async executar(mensagem, bot) {

        if (!mensagem.member.permissions.has("Administrator")) {
            return mensagem.reply("Você precisa ser administrador para usar este comando.");
        }

        let bodycomando = mensagem.content.trim();
        let semCmd = bodycomando.split(" ");
        let args = semCmd.slice(1);

        if (args.length < 2) {
            return mensagem.channel.send(`❌ Uso incorreto! Use: \`${prefixo}cmsg {título} {descrição}\``);
        }

        let title = args.shift().trim();
        let descricao = args.join(" ").trim();
        if (!title || title.length === 0) {
            return mensagem.channel.send("❌ O título não pode estar vazio.");
        }
        if (title.length > 256) title = title.slice(0, 253) + "...";
        if (descricao.length > 4096) descricao = descricao.slice(0, 4093) + "...";

        const embed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(descricao)
            .setColor(0x0099FF)

        setTimeout(() => {
            mensagem.delete().catch(() => { })
        }, 2000)
        return mensagem.channel.send({ embeds: [embed] });
    }
}

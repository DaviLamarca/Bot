module.exports = {
    nome: "Mandar",
    async executar(mensagem, bot) {
        let canal = "1386566946623062057"


        if (!mensagem.member.permissions.has("Administrator")) {
            return mensagem.reply("Você precisa ser administrador para usar este comando.");
        }

        let bodycomando = mensagem.content.trim();
        let semCmd = bodycomando.split(" ");
        let args = semCmd.slice(1);

        let canalServidor = await bot.channels.fetch(canal)
        await canalServidor.send(`${args}`)
    }
}
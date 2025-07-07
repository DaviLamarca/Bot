module.exports = {
    nome: 'sortear',
    async executar(mensagem, bot) {

        let bodycomando = mensagem.content.trim();
        let semCmd = bodycomando.split(" ");
        let args = semCmd.slice(1);
        console.log(args);

    }
}
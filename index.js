const { 
    Client, 
    GatewayIntentBits, 
    Partials, 
    ButtonBuilder, 
    ActionRowBuilder, 
    ButtonStyle, 
    Events, 
    SelectMenuBuilder, 
    StringSelectMenuBuilder, 
    StringSelectMenuOptionBuilder 
} = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
require('dotenv').config();
const token = process.env.TOKEN;

const bot = new Client({
    intents: [  
        GatewayIntentBits.Guilds, // Necessário para interações (botões, slash commands, menus)
        GatewayIntentBits.GuildMessages, // Receber mensagens nos canais
        GatewayIntentBits.MessageContent, // Acessar o conteúdo das mensagens
        GatewayIntentBits.GuildMembers, // Ver membros do servidor (útil para replies personalizadas)
        GatewayIntentBits.GuildMessageReactions // (Opcional) Reações em mensagens
    ],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction,
        Partials.User,
        Partials.GuildMember
    ]
});
  
bot.adicionar = new Collection();
bot.commands = new Collection();
bot.bloqueados = new Collection();

let comandos = fs.readdirSync('./comandos').filter(c => c.endsWith('.js'));
for (let i = 0; i < comandos.length; i++) {
    const comando = require(`./comandos/${comandos[i]}`);
    bot.commands.set(comando.nome, comando);
}


let eventos = fs.readdirSync('./eventos').filter(arquivo => arquivo.endsWith('.js'));
for (let i = 0; i < eventos.length; i++) {
    const evento = require(`./eventos/${eventos[i]}`);
    bot.on(evento.nome, (...args) => evento.executar(...args, bot));
}

bot.login(token);

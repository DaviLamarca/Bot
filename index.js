const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs')
const config = require('./config.json')
require('dotenv').config()
const token = process.env.TOKEN

const bot = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers
    ],
})

bot.commands = new Collection()

let eventos = fs.readdirSync('./eventos').filter(arquivo => arquivo.endsWith('.js'))
let comandos = fs.readdirSync('./comandos').filter(comandos => comandos.endsWith('.js'))

for (let i = 0; i < comandos.length; i++) {
    const comando = require(`./comandos/${comandos[i]}`)
    bot.commands.set(comando.nome, comando)
}

for (let i = 0; i < eventos.length; i++) {
    const evento = require(`./eventos/${eventos[i]}`)
    bot.on(evento.nome, (...args) => evento.executar(...args, bot))
}

bot.login(token)
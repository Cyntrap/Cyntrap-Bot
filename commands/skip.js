const Discord = require("discord.js");

module.exports = class skip {
    constructor(){
        this.name = "skip"
        this.alias = ["s"]
        this.usage = "_skip"
    }

    async run (bot, message, args, serverQueue){
		if (!message.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
    }
}
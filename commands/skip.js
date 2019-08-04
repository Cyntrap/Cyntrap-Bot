const Discord = require("discord.js");

module.exports = class skip {
    constructor(){
        this.name = "skip"
        this.alias = ["s"]
        this.usage = "_skip"
    }

    async run (bot, message, args, serverQueue){
		if (!message.member.voiceChannel) return msg.channel.send('You need to be in a voice channel (` ω ´)');
		if (!serverQueue) return message.channel.send("There is nothing playing ┐(￣ヘ￣)┌");
		serverQueue.connection.dispatcher.end();
		return undefined;
    }
}
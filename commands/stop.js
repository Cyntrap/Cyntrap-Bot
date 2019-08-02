const Discord = require("discord.js");

module.exports = class stop {
    constructor(){
        this.name = "stop"
        this.alias = ["end"]
        this.usage = "_stop"
    }


    async run (bot, message, args, serverQueue, queue){
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
    }
}
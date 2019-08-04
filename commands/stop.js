const Discord = require("discord.js");

module.exports = class stop {
    constructor(){
        this.name = "stop"
        this.alias = ["end"]
        this.usage = "_stop"
    }


    async run (bot, message, args, serverQueue, queue){
		if (!message.member.voiceChannel) return message.channel.send('Not in a voice channel ヾ(`ヘ´)ﾉﾞ');
		if (!serverQueue) return message.channel.send('Nothing is playing ヾ(`ヘ´)ﾉﾞ');
		serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    message.channel.send("🎵 Stopping music 🎵");
		return undefined;
    }
}
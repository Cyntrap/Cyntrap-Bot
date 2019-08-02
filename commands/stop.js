const Discord = require("discord.js");

module.exports = class stop {
    constructor(){
        this.name = "stop"
        this.alias = ["end"]
        this.usage = "_stop"
    }

    async run (bot, message, args, serverQueue){
        const voiceChannel = message.member.voiceChannel;

        if(!voiceChannel) return message.channel.send("You are not in a voice channel. Dummy dum");
        if(!serverQueue){
            message.channel.send("Nothing is playing >_<");
        }
        serverQueue.songs = []
        serverQueue.connection.dispatcher.end();
        voiceChannel.leave();
        message.channel.send(`🎵 No more music 😢 🎵`);
        return undefined;
    }
}
const Discord = require("discord.js");

module.exports = class pause {
    constructor(){
        this.name = "pause"
        this.alias = ["pa"]
        this.usage = "_pause"
    }

    async run (bot, message, args, serverQueue){
        if(!message.member.voiceChannel) return message.channel.send("You are not in a voice channel. Dummy dum");
        if(serverQueue && serverQueue.playing){
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return message.channel.send("🎵 Music is paused 🎵");
    
        }
        message.channel.send("No music is playing >_<");
    }
}
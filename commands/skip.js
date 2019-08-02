const Discord = require("discord.js");

module.exports = class skip {
    constructor(){
        this.name = "skip"
        this.alias = ["s"]
        this.usage = "_skip"
    }

    async run (bot, message, args, serverQueue){
        if(!message.member.voiceChannel) return message.channel.send("You are not in a voice channel. Dummy dum");
        if(!serverQueue){
            message.channel.send("No songs for me to skip >_<");
            
        }
        serverQueue.connection.dispatcher.end();
        message.channel.send(`🎵 **Skipped Song** 🎵`);
        return undefined;
    }
}
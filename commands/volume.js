const Discord = require("discord.js");

module.exports = class volume {
    constructor(){
        this.name = "volume"
        this.alias = ["v"]
        this.usage = "_volume"
    }

    async run (bot, message, args, serverQueue){
        if(!message.member.voiceChannel) return message.channel.send("You are not in a voice channel. Dummy dum");
        if(!serverQueue) return message.channel.send("There is no queue");
        message.channel.send(`Current volume: ${serverQueue.volume}`);
        serverQueue.volume = args[1];
        if(serverQueue.volume > 10){
            return message.channel.send("Volume can't be higher than 10")
        }else{
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        }
        
        return undefined;
    }
}
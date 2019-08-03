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
        if(args[1] > 10){
            return message.channel.send("Volume can't be higher than 10")
        }else{
            serverQueue.volume = args[1];
            message.channel.send(`Current Volume: ${serverQueue.volume}`);
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        }
        
        return undefined;
    }
}
const Discord = require("discord.js");

module.exports = class join {
    constructor(){
        this.name = "join"
        this.alias = ["j"]
        this.usage = "_join"
    }

    async run (bot, message, args){
        const voiceChannel = message.member.voiceChannel;

        if(voiceChannel){
            voiceChannel.join();
        }else return message.channel.send("You must be in a voice channel!");
    }

}
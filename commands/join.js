const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const voiceChannel = message.member.voiceChannel;

    if(voiceChannel){
        voiceChannel.join();
    }else return message.channel.send("You must be in a voice channel!");
}

module.exports.help = {
    name: "join"
}
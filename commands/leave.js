const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const voiceChannel = message.member.voiceChannel;

    if(!voiceChannel) return message.channel.send("Join a voice channel!");

    voiceChannel.leave();
    
}

module.exports.help = {
    name: "leave"
}
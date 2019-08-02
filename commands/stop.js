const Discord = require("discord.js");

module.exports.run = async (bot, message, args, serverQueue, queue) => {

    const voiceChannel = message.member.voiceChannel;

    if(!voiceChannel) return message.channel.send("Join a voice channel!");
    voiceChannel.leave();
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    
}

module.exports.help = {
    name: "stop"
}
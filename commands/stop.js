const Discord = require("discord.js");
const play = require("./play.js");

module.exports.run = async (bot, message, args, serverQueue, queue) => {
    const voiceChannel = message.member.voiceChannel;

    if(!voiceChannel) return message.channel.send("You are not in a voice channel. Dummy dum");
    if(!serverQueue){
        message.channel.send("Nothing is playing >_<");
    }
    serverQueue.songs = []
    serverQueue.connection.dispatcher.end();
    voiceChannel.leave();
    message.channel.send(`🎵 💀 🎵`);
    return undefined;
}

module.exports.help = {
    name: "stop"
}
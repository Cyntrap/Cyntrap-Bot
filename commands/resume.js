const Discord = require("discord.js");
const play = require("./play.js");

module.exports.run = async (bot, message, args, serverQueue) => {
    if(!message.member.voiceChannel) return message.channel.send("You are not in a voice channel. Dummy dum");
    if(serverQueue && !serverQueue.playing){
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        return message.channel.send("🎵 Continuing Music 🎵");

    }
    message.channel.send("Music is already playing >_<");
}

module.exports.help = {
    name: "resume"
}
const Discord = require("discord.js");
const play = require("./play.js");


module.exports.run = async (bot, message, args, serverQueue) => {
    if(!message.member.voiceChannel) return message.channel.send("You are not in a voice channel. Dummy dum");
    if(!serverQueue){
        message.channel.send("No songs for me to skip >_<");
        
    }
    serverQueue.connection.dispatcher.end();
    message.channel.send(`🎵 **Skipped Song** 🎵`);
    return undefined;
}

module.exports.help = {
    name: "skip"
}
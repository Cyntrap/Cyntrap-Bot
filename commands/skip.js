const Discord = require("discord.js");

module.exports.run = async (bot, message, args, serverQueue, queue) => {

    if(!message.member.voiceChannel) return message.channel.send("You are not in a voice channel. Dummy dum");
    if(!serverQueue){
        message.channel.send("No songs for me to skip >_<");
    }
    serverQueue.connection.dispatcher.end();

}

module.exports.help = {
    name: "skip"
}
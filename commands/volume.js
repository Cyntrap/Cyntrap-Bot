const Discord = require("discord.js");
const play = require("./play.js");

module.exports.run = async (bot, message, args, serverQueue) => {
    if(!message.member.voiceChannel) return message.channel.send("You are not in a voice channel. Dummy dum");
    if(!serverQueue) return message.channel.send("There is no queue");
    message.channel.send(`Current volume: ${serverQueue.volume}`);
    if(parseInt(args[0]) > 1000){
        return message.channel.send("The volume cannot be set to more than a 1000");
    }
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    return undefined;
}

module.exports.help = {
    name: "volume"
}
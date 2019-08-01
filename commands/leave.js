const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.guild.voiceConnection){
        message.guild.voiceChannel.disconnect();
    }
    else{
        message.channel.send("I must be in a voice channel!");
    }

}

module.exports.help = {
    name: "leave"
}
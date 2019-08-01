const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send("Join a voice channel!");
    const permissions = voiceChannel.permissionsFor(message.bot.user);
    if(!permissions.has("CONNECT")) return message.channel.send("I cant connect to that voice channel!");
    if(!permissions.has("SPEAK")) return message.channel.send("I CANT SPEAK >_<");

    if(!message.member.voiceConnection){
        message.member.voiceChannel.join()
        .then(connection =>{
            message.reply("Successfully joined!")
        })
    }


}
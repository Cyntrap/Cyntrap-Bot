const Discord = require("discord.js");
const ytdl = require("ytdl-core");


module.exports.run = async (bot, message, args) => {

    const voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send("Join a voice channel!");
    const permissions = voiceChannel.permissionsFor(bot.user);
    if(!permissions.has("CONNECT")) return message.channel.send("I cant connect to that voice channel!");
    if(!permissions.has("SPEAK")) return message.channel.send("I CANT SPEAK >_<");

    if(!message.member.voiceConnection){
        message.member.voiceChannel.join()
        .then(connection =>{
            message.reply("Successfully joined!")
        })
    }

    const dispatcher = connection.playStream(ytdl(args[1]))
    .on('end', ()=>{
        message.channel.send("Song Ended!");
        voiceChannel.leave();
    })
    .on('error', error =>{
        console.log(error);
    });
    dispatcher.setVolumeLogarithmic(5 / 5);


}

module.exports.help = {
    name: "play"
}
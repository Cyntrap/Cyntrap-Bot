const Discord = require("discord.js");

module.exports.run = async (bot, message, args, serverQueue, queue) =>{

    if(!serverQueue) return message.channel.send(" No Queue >_< ")

    message.channel.send(`
    🎵 ***Song Queue*** 🎵
    ${serverQueue.songs.map(song => `*${song.title}`).join('\n')}

    **Now Playing** ${serverQueue.songs[0].title}
    `)


}

module.exports.help = {
    name: "q"
}
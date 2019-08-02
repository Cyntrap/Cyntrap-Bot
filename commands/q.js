const Discord = require("discord.js");

module.exports.run = async (bot, message, args, serverQueue, queue) =>{

    if(!serverQueue) return message.channel.send(" No Queue >_< ")
/**
    message.channel.send(`
    🎵 ***Song Queue*** 🎵
${serverQueue.songs.map(song => `*${song.title}`).join('\n')}

**Now Playing** ${serverQueue.songs[0].title}
    `)
    **/
   let length = serverQueue.songs.length - 9
    let queue_embed = new Discord.RichEmbed()
    .setTitle("🎵 ***Song Queue*** 🎵")
    .setDescription(`
${serverQueue.songs.map(song => `*${song.title}`).join('\n')}
    `)
    .setFooter("Cute Bot", bot.user.displayAvatarURL);

    message.channel.send(queue_embed);

}

module.exports.help = {
    name: "q"
}
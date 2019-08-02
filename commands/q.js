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
    1 -> ${serverQueue.songs[0].title}
    2 -> ${serverQueue.songs[1].title}
    3 -> ${serverQueue.songs[2].title}
    4 -> ${serverQueue.songs[3].title}
    5 -> ${serverQueue.songs[4].title}
    6 -> ${serverQueue.songs[5].title}
    7 -> ${serverQueue.songs[6].title}
    8 -> ${serverQueue.songs[7].title}
    9 -> ${serverQueue.songs[8].title}
    10 -> ${serverQueue.songs[9].title}

    There is ${length} more songs..
    `)
    .setFooter("Cute Bot", bot.user.displayAvatarURL);

    message.channel.send(queue_embed);

}

module.exports.help = {
    name: "q"
}
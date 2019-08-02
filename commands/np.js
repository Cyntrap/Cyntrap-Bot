const Discord = require("discord.js");

module.exports.run = async (bot, message, args, serverQueue, queue) => {

    if(!serverQueue.songs[0]) return message.channel.send("No song is currrenly playing");

    serverQueue.textChannel.send(`***Now Playing*** -- ${serverQueue.songs[0].title}`);

}

module.exports.help = {
    name: "np"
}
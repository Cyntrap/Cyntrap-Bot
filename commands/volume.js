const Discord = require("discord.js");
const play = require("./play.js");

module.exports.run = async (bot, message, args, serverQueue) => {
    play.volume(serverQueue, message);
}

module.exports.help = {
    name: "volume"
}
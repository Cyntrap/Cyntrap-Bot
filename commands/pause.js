const Discord = require("discord.js");
const play = require("./play.js");

module.exports.run = async (bot, message, args, serverQueue) => {
    play.pause(serverQueue);
}

module.expors.help = {
    name: "pause"
}
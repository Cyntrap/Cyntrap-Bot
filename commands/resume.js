const Discord = require("discord.js");
const play = require("./play.js");

module.exports.run = async (bot, message, args, serverQueue) => {
    play.resume(serverQueue);
}

module.expors.help = {
    name: "resume"
}
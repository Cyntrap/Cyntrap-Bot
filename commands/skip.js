const Discord = require("discord.js");
const play = require("./play")

module.exports.run = async (bot, message, args, serverQueue, queue) => {

    play.skip(serverQueue)

}

module.exports.help = {
    name: "skip"
}
const Discord = require("discord.js");
const play = require("./play.js");


module.exports.run = async (bot, message, args, serverQueue, queue) => {

    play.skip(serverQueue);

}

module.exports.help = {
    name: "skip"
}
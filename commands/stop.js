const Discord = require("discord.js");
const play = require("./play.js");

module.exports.run = async (bot, message, args, serverQueue) => {
    
    play.stop(serverQueue, message);

}

module.exports.help = {
    name: "stop"
}
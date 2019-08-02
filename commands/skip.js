const Discord = require("discord.js");

module.exports.run = async (bot, message, args, serverQueue, queue) => {

    if(!serverQueue){
        message.channel.send("No songs for me to skip >_<")
    }
    serverQueue.connection.dispatcher.end();

}

module.exports.help = {
    name: "skip"
}
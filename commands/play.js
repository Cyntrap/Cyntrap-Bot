const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!args[0]){
        return message.channel.send("Please provide a link");
    }

}

module.exports.help = {
    name: "play"
}
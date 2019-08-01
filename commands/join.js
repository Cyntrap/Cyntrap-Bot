const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.member.voiceChannel){
        if(!message.member.voiceConnection){
            message.member.voiceChannel.join()
            .then(connection =>{
                message.reply("Successfully joined!")
            })
        }
    }

}

module.exports.name = {
    name: "join"
}
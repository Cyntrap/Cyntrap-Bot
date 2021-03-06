const Discord = require("discord.js");
const invite = "https://discordapp.com/oauth2/authorize?client_id=606424959803326465&permissions=8&scope=bot";

module.exports = class botinfo{
    constructor(){
        this.name = "botinfo"
        this.alias = ["bi"]
        this.usage = "_botinfo"
    }

    async run (bot, message, args){
        let bot_embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setAuthor(message.author.username)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTitle("***Bot Info***")
        .setDescription("Some useful info for the bot")
        .addField("Full Name", `${bot.username}#${bot.discriminator}`)
        .addField("Commands", "_help")
        .addField("Creator", "Cyntrap#8382")
        .addField("Created at", bot.createdAt)
        .addField("Invite Link:", invite)
        .setFooter("Cute Bot", bot.user.displayAvatarURL);
        message.channel.send(bot_embed)
    }

}

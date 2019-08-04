const Discord = require("discord.js");

module.exports = class userinfo {
    constructor(){
        this.name = "userinfo"
        this.alias = ["ui"]
        this.usage = "_userinfo"
    }

    async run (bot, message, args){
        let user_embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setAuthor(message.author.username)
        .setThumbnail(message.author.displayAvatarURL)
        .setTitle("***User Info***")
        .setDescription("Information about you")
        .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID", `${message.author.id}`)
        .addField("Created at", `${message.author.createdAt}`)
        .setFooter("Cute Bot ==> version (1.11.7)", bot.user.displayAvatarURL);
        message.channel.send(user_embed);
    }
}
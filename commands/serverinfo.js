const Discord = require("discord.js");

module.exports = class serverinfo {
    constructor(){
        this.name = "serverinfo"
        this.alias = ["si"]
        this.usage = "_serverinfo"
    }

    async run (bot, message, args){
        let server_embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setTitle("***Server Info***")
        .setDescription("Information about the server")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("Server Name", `${message.guild.name}`)
        .addField("Server Members", `${message.guild.memberCount}`)
        .addField("Server Join", `You joined ${message.member.joinedAt}`)
        .addField("Server Birth", `This server was created ${message.guild.createdAt}`)
        .setFooter("Cute Bot ==> version (1.11.7)", bot.user.displayAvatarURL);
        message.channel.send(server_embed);
    }
}
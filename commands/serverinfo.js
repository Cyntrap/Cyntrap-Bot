const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let server_embed = new Discord.RichEmbed()
    .setTitle("***Server Info***")
    .setDescriptionP("Information about the server")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("Server Name", `${message.guild.name}`)
    .addField("Server Members", `${message.guild.memberCount}`)
    .addField("Server Join", `You joined ${message.member.joinedAt}`)
    .addField("Server Birth", `This server was created ${message.guild.createdAt}`)
    .setFooter("Cute | Bot", bot.user.displayAvatarURL);
    message.channel.send(server_embed);
}

module.exports.help = {
    name: "serverinfo"
}
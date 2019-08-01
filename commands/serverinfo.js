const Discord = require ("discord.js");
module.exports.run = async (bot, message, args) =>{
    let sEmbed = new Discord.RichEmbed()
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Guild Name**", `${message.guild.name}`, true)
    .addField("**Guild Name**", `${message.guild.name}`, true)
    .addField("**Guild Name**", `${message.guild.name}`, true)
    .addField("**Guild Name**", `${message.guild.name}`, true)
    .setFooter("Cute | Bot", bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
}

module.exports.config = {
    name: "serverinfo",
    aliases: ["si", "derverdesc"]
}
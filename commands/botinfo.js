const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bot_embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setAuthor(message.author.username)
    .setThumbnail(bot.displayAvatarURL)
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

module.exports.help = {
    name: "botinfo"
}
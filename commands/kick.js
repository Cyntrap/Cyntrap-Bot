const Discord = require("discord.js");

module.exports = class kick {
  constructor(){
    this.name = "kick"
    this.alias = ["begone"]
    this.usage = "_kick"
  }

  async run(bot, message, args){

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    let reason = args.join(" ").slice(2);
    if(message.member.hasPermission("KICK_MEMBERS") || message.member.id != 204679946734403584) return ("No permission pal ")
    if(!user) return message.channel.send("Please provide a valid user!");
    if(!reason) return message.channel.send("Please provide a reason");
    if(user.id == 204679946734403584) return message.channel.send("Can't kick my master");
    if(user.hasPermission("ADMINISTRATOR")) return message.channel.send("Can't kick this user!");


    let kick_embed = new Discord.RichEmbed()
    .setColor("PURPLE")
    .setTitle("**Kick**")
    .addField("Kicked:", user)
    .addField("Kicked by:", message.author.username)
    .addField("Reason:", reason)
    .addField("Time:", message.createdAt)
    .setFooter("Cute Bot", bot.user.displayAvatarURL);
    message.guild.member(user).kick(reason);
    message.channel.send(kick_embed);

  }
}

const Discord = require("discord.js");

module.exports = class help {
    constructor(){
        this.name = "help"
        this.alias = "h"
        this.usage = "_help"
    }

    async run(bot, message, args){
        if(!args[1]){
            let help_embed = new Discord.RichEmbed()
            .setTitle("**Categories**")
            .setDescription("This are the catergories for commands(use _help [category])")
            .addField("**Info**", "`botinfo` `help` `serverinfo` `userinfo`")
            .addField("**Moderation**", "clear")
            .addField("Fun", "`wow such empty`")
            .addField("General", "`say`")
            .addField("Music", "`np(nowplaying)`` `pause` `play` `queue` `resume` `skip` `stop` `volume`")
            .setFooter("Cute Bot ==> version (1.11.7)", bot.user.displayAvatarURL);
            message.channel.send(help_embed);
        }

        if(args[1].toLowerCase() == "info"){
            let info_embed = new Discord.RichEmbed()
            .setTitle("**Info**")
            .addField("1. _botinfo", "shows info for the bot!")
            .addField("2. _help", "how to use commands.com")
            .addField("3. _serverinfo", "guess what it's the info for the server ^^")
            .addField("4. _userinfo", "yet again some info for the user")
            .setFooter("Cute Bot", bot.user.displayAvatarURL);
            message.channel.send(info_embed);
          }

        if(args[1].toLowerCase() == "moderation"){
          let mod_embed = new Discord.RichEmbed()
          .setTitle("**Info**")
          .addField("1. _clear", "clears the amount of messages you type")
          .addField("2. _mute", "not usable")
          .addField("3. _kick", "not usable")
          .addField("4. _ban", "not usable")
          .setFooter("Cute Bot", bot.user.displayAvatarURL);
          message.channel.send(mod_embed)
        }

    }

}

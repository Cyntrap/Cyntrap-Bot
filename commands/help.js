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
            .addField("**Info**", "botinfo(bi), help(h), serverinfo(si), userinfo(ui)")
            .addField("**Moderation**", "clear(c)")
            .addField("Fun", "wow such empty")
            .addField("General", "say(s)")
            .addField("Music", "np(nowplaying), pause(pa), play(p), queue(q), resume(r), skip(s), stop(end), volume(v)")
            .setFooter("Cute Bot ==> version (1.11.7)", bot.user.displayAvatarURL);
            message.channel.send(help_embed);
        }

        if(args[1].toLowerCase() == "info"){
            let info_embed = new Discord.RichEmbed()
            .setTitle("**Info**")
            .addField("botinfo(bi)", "shows info for the bot!")
            .addField("help(h)", "how to use command.com")
            .addField("serverinfo(si)", "guess what it's the info for the server ^^")
            .addField("userinfo(ui)", "yet again some info for the user")
            .setFooter("Cute Bot ==> version (1.11.7)", bot.user.displayAvatarURL);
            message.channel.send(info_embed);
            }

    }

}
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
            .setColor("PURPLE")
            .setTitle("**Categories**")
            .setDescription("This are the catergories for commands(use _help [category])")
            .addField("**Info**", "`botinfo` `help` `serverinfo` `userinfo`")
            .addField("**Moderation**", "`clear` `kick`")
            .addField("Fun", "`slap`")
            .addField("General", "`say`")
            .addField("Music", "`np(nowplaying)` `pause` `play` `queue` `resume` `skip` `stop` `volume`")
            .setFooter("Cute Bot ==> version (1.11.7)", bot.user.displayAvatarURL);
            message.channel.send(help_embed);
        }

        if(args[1].toLowerCase() == "info"){
            let info_embed = new Discord.RichEmbed()
            .setColor("PURPLE")
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
          .setColor("PURPLE")
          .setTitle("**Info**")
          .addField("1. _clear", "clears the amount of messages you type")
          .addField("2. _kick", "kicks a user from the server")
          .addField("3. _ban", "not usable")
          .setFooter("Cute Bot", bot.user.displayAvatarURL);
          message.channel.send(mod_embed)
        }

        if(args[1].toLowerCase() == "fun"){
          let fun_embed = new Discord.RichEmbed()
          .setColor("PURPLE")
          .setTitle("**Fun**")
          .addField("1. _slap ", "hits a person you mention")
          .setFooter("Cute Bot", bot.user.displayAvatarURL);
          message.channel.send(fun_embed)
        }

        if(args[1].toLowerCase() == "general"){
          let general_embed = new Discord.RichEmbed()
          .setColor("PURPLE")
          .setTitle("**General**")
          .addField("1. _say", "it does exactly what you think it does")
          .setFooter("Cute Bot", bot.user.displayAvatarURL);
          message.channel.send(general_embed)
        }

        if(args[1].toLowerCase() == "music"){
          let music_embed = new Discord.RichEmbed()
          .setColor("PURPLE")
          .setTitle("🎵 **Music** 🎵")
          .addField("1. _np", "shows the current song that is playing")
          .addField("2. _pause", "pause the current song")
          .addField("3. _play", "plays a song. You can use a link for a video/playlist or just type the name of the song")
          .addField("4. _queue", "shows all the songs in queue")
          .addField("5. _resume", "unpauses a song if it's paused")
          .addField("6. _skip", "skips to the next song in queue")
          .addField("7. _stop", "deletes the queue and stops playing music")
          .addField("8. _volume", "select a value between 1-10(1 = normal, 2 = times two and etc ). Be careful with this one, it might break your eardrums ^^")
          .setFooter("Cute Bot", bot.user.displayAvatarURL);
          message.channel.send(music_embed);
        }

    }

}

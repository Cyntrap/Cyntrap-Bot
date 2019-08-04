const Discord = require("discord.js");

module.exports = class pat {
    constructor(){
        this.name = "pat"
        this.alias = "headpat"
        this.usage = "_pat"
    }

    async run (bot, message, args){

        const gifs = [
            "",

        ]

        let index = Math.floor((Math.random() * gifs.length));
        let victim = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        let user = message.author;
        let embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setImage(gifs[index]);
        message.channel.send(`**${user}** hit **${victim}**`)
        message.channel.send(embed);

    }
}
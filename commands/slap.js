const Discord = require("discord.js");

module.exports = class slap {
    constructor(){
        this.name = "slap"
        this.alias = "hit"
        this.usage = "_slap"
    }

    async run (bot, message, args){


        const gifs = [
            "https://media1.tenor.com/images/1cf84bf514d2abd2810588caf7d9fd08/tenor.gif?itemid=7679403",
            "https://media1.tenor.com/images/4eed54377433c396ce2d9ad9ee5d22ef/tenor.gif?itemid=11234788",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ]


        let victim = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        let user = message.author;
        let slap_embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setTitle(`@${user.tag} hit @${victim.user.tag}`)
        .setImage("https://media1.tenor.com/images/1cf84bf514d2abd2810588caf7d9fd08/tenor.gif?itemid=7679403")
        message.channel.send(slap_embed);
    }
}
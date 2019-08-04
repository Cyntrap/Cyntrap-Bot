const Discord = require("discord.js");

module.exports = class hit {
    constructor(){
        this.name = "hit"
        this.alias = "punch"
        this.usage = "_hit"
    }

    async run (bot, message, args){

        let victim = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        let user = message.author;
        let hit_embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setTitle(`${user.tag} hit ${victim.tag}`)
        .setImage("https://3.bp.blogspot.com/-bnRsbQGOMaY/V3O84p3t5lI/AAAAAAAAHvw/yQJsPll1erQ8cF14oR3nF3sJip2FELyGQCKgB/s640/bobbing-head.gif")
        .setFooter("Cute Bot", bot.user.displayAvatarURL);
        message.channel.send(hit_embed);
    }
}
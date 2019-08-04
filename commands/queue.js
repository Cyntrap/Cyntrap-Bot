const Discord = require("discord.js");

module.exports = class queue {
    constructor(){
        this.name = "queue"
        this.alias = ["q"]
        this.usage = "_queue"
    }

    async run (bot, message, args, serverQueue, queue){
        if(!serverQueue) return message.channel.send(" No Queue >_< ")
        let index = 0;
        let queue_embed = new Discord.RichEmbed()
        .setTitle("🎵 ***Song Queue*** 🎵")
        .setDescription(`
    ${serverQueue.songs.map(song => ` **${++index}.** ${song.title}`).join('\n')}
        `)
        .setFooter("Cute Bot", bot.user.displayAvatarURL);
    
        message.channel.send(queue_embed);    
    }
}
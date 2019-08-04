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
            "https://media1.giphy.com/media/tMIWyF5GUrWwM/source.gif",
            "https://pa1.narvii.com/6807/ac91cef2e5ae98f598665193f37bba223301d75c_hq.gif",
            "https://i.kym-cdn.com/photos/images/newsfeed/000/940/326/086.gif",
            "https://i.imgur.com/oOCq3Bt.gif",
            "https://media1.tenor.com/images/f619012e2ec268d73ecfb89af5a8fb51/tenor.gif?itemid=8562186",
            "https://thumbs.gfycat.com/LegalExhaustedEuropeanpolecat-size_restricted.gif",
            "https://media1.tenor.com/images/3fd96f4dcba48de453f2ab3acd657b53/tenor.gif?itemid=14358509",
            "https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4874411",
        ]

        let index = Math.floor((Math.random() * gifs.length));
        let victim = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        let user = message.member;
        let slap_embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setTitle(`${user} hit ${victim}`)
        .setImage(gifs[index]);
        message.channel.send(slap_embed);
    }
}
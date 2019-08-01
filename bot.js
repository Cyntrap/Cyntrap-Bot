const Discord = require("discord.js");
const bot = new Discord.Client();
const server = message.guild.id;

bot.on("ready", function(message){
    console.log("Hentai Bot is online!!")
    bot.user.setActivity("hentai", {type: "WATCHING"});
    server.createRole({
        name: "Cute Bot",
        color: "PURPLE",
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
})

bot.on("message", function(message){
    if(message.author.equals(bot.user.username)) return;

    if(message.content.equals("hello")){
        message.channel.sendMessage("Hi ^-^");
    }


})

bot.login(process.env.BOT_TOKEN);
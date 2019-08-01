const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Hentai Bot is online!!")
    bot.user.setActivity("hentai", {type: "WATCHING"});
})

bot.on("message", function(message){
    if(message.author.equals(bot.user.username)) return;

    if(message.content.equalsIgnoreCase("hello")){
        message.channel.sendMessage("Hi ^-^");
    }
})

bot.login(process.env.BOT_TOKEN);
const Discord = require("discord.js");
const botsettings = require("./botsettings.json")
const bot = new Discord.Client();
const prefix = '_';

bot.on("ready", async => {
    console.log("Hentai Bot is online!!")
    bot.user.setActivity("hentai", {type: "WATCHING"});
    try{
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    }catch(e){
        console.log(e.stack);
    }


})

bot.on("message", async message => {
    if(message.channel.type === "dm") return;
    if(message.author.equals(bot.user.username)) return;

    if(message.content.equals("hello")){
        message.channel.sendMessage("Hi ^-^");
    }



})

bot.login(process.env.BOT_TOKEN);
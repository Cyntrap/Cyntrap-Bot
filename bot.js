const Discord = require("discord.js");
const botsettings = require("./botsettings.json")
const bot = new Discord.Client();
const prefix = '_';

bot.on("ready", async => {
    console.log("Hentai Bot is online!!")
    bot.user.setActivity("hentai", {type: "WATCHING"});
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
            console.log(link);
        }).catch(err =>{
            console.log(err.stack);
        })
})

bot.on("message", async message => {
    if(message.channel.type === "dm") return;
    if(message.author.equals(bot.user.username)) return;

    if(message.content == "hello"){
        message.channel.send("Hi ^-^");
    }



})

bot.login(process.env.BOT_TOKEN);
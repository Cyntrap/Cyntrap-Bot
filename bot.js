const Discord = require("discord.js");
const botsettings = require("./botsettings.json")
const bot = new Discord.Client();
const prefix = botsettings.prefix;

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

    let messageArray = message.content.split(" ");
    let command = args[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}userinfo`){
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription("User Info")
    }


})

bot.login(process.env.BOT_TOKEN);
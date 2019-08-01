const Discord = require("discord.js");
const bot = new Discord.Client();

const { CommandHandler} = require("Cyntrap-Bot");
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: ['_']
})

bot.on("ready", function(){
    console.log("Hentai Bot is online!!")
    bot.user.setActivity("hentai", {type: "WATCHING"});
})

bot.on("message", function(message){
    if(message.channel.type == "dm") return;
    if(message.author.equals(bot.user.username)) return;

    if(message.content.equals("hello")){
        message.channel.sendMessage("Hi ^-^");
    }

    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(bot, message, args);
    }catch(e){
        console.log(e)
    }


})

bot.login(process.env.BOT_TOKEN);
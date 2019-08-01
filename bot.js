const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = '_';

const fs = require("fs");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>{
    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".")).pop() === "js"
    if(jsfile.length <= 0){
        return console.log("Coudn't find commands");
    }

    jsfile.forEach((f, i) => {
        let pull = require("./commands/${f}")
        bot.commands.set(pull.config.name, pull)
        pull.config.aliases.forEach(aliases =>{
            bot.aliases.set(alias, pull.config.name)
        })
    })
});

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

    let prefix = '_';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));

    if (commandfile) commandfile.run(bot, message, args)

})

bot.login(process.env.BOT_TOKEN);
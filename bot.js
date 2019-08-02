const Discord = require("discord.js");
const fs = require("fs");
const botsettings = require("./botsettings.json")
const bot = new Discord.Client();
const prefix = botsettings.prefix;

const queue = new Map();



global.servers = {};

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>{

    if(err) console.log(err.stack);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("No commands");
        return;
    };

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async => {
    console.log("Hentai Bot is online!!")
    bot.user.setActivity("hentai", {type: "WATCHING"});
})

bot.on("message", async message => {
    if(message.channel.type === "dm") return;
    if(message.author.equals(bot.user.username)) return;

    if(message.content == "hello"){
        message.channel.send("Hi ^-^");
    }

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    const serverQueue = queue.get(message.guild.id);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args, serverQueue, queue, url);

    return;
})

bot.login(process.env.BOT_TOKEN);
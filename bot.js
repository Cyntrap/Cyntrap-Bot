const Discord = require("discord.js");
const botsettings = require("./botsettings.json")
const bot = new Discord.Client();
const prefix = botsettings.prefix;
const invite = "https://discordapp.com/oauth2/authorize?client_id=606424959803326465&permissions=8&scope=bot";

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
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}userinfo`){
        let user_embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setAuthor(message.author.username)
        .setThumbnail(message.author.displayAvatarURL)
        .setTitle("***User Info***")
        .setDescription("Information about you")
        .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID", `${message.author.id}`)
        .addField("Created at", `${message.author.createdAt}`)
        .setFooter("Cute Bot", bot.user.displayAvatarURL);
        message.channel.send(user_embed);

        return;
    }

    if(command === `${prefix}botinfo`){
        let bot_embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setAuthor(message.author.username)
        .setThumbnail(bot.displayAvatarURL)
        .setTitle("***Bot Info***")
        .setDescription("Some useful info for the bot")
        .addField("Full Name", `${bot.username}#${bot.discriminator}`)
        .addField("Commands", "_help")
        .addField("Creator", "Cyntrap#8382")
        .addField("Created at", bot.createdAt)
        .addField("Invite Link:", invite)
        .setFooter("Cute Bot", bot.user.displayAvatarURL);
        message.channel.send(bot_embed)

        return;
    }

    if( command === `${prefix}serverinfo`){
        let server_embed = new Discord.RichEmbed()
        .setTitle("***Server Info***")
        .setDescriptionP("Information about the server")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("Server Name", `${message.guild.name}`)
        .addField("Server Members", `${message.guild.memberCount}`)
        .addField("Server Join", `You joined ${message.member.joinedAt}`)
        .addField("Server Birth", `This server was created ${message.guild.createdAt}`)
        .setFooter("Cute | Bot", bot.user.displayAvatarURL);
        message.channel.send(server_embed);
    }

    return;
})

bot.login(process.env.BOT_TOKEN);
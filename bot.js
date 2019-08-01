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
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}userinfo`){
        let embed = new Discord.RichEmbed()
        .setColor("PURPLE")
        .setAuthor(message.author.username)
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription("***User Info***")
        .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID", `${message.author.id}`)
        .addField("Created at", `${message.author.createdAt}`)
        message.channel.send(embed);
    }

    if(command === `${prefix}mute`){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No permissions, you Baka! >_<");

        let toMute = message.mentions.users.first() || message.guild.members.get(args[0]);
        if(!toMute) return message.reply("No user specified");
        let role = message.guild.roles.find(r => r.name === "Muted");
        if(!role){
            try{
                role = await message.guild.createRole({
                    name: "Muted",
                    color: "#000000",
                    permissions: []
                })
   
                message.guild.channels.forEach(async (channel, id) =>{
                    await channel.overwritePermissions(role, {
                        SEND_MESSAGES: "false",
                        ADD_REACTIONS: "false"
                    })
                })
           }catch(e){
               console.log(e.stack);
           }
        }

        if(toMute.roles.find(role.id)) return message.channel.send(`${toMute.username} is already muted!`);

        await toMute.addRole(role);
        let m_embed = new Discord.RichEmbed()
        .setAuthor(message.user.author)
        .setThumbnail(toMute.displayAvatarURL)
        .setDescription("***Mutes***")
        .addField("Muted", toMute.username)
        .addField("Time", "0s")
        .addField("Muted By", `${message.author.username}#${message.author.discriminator}`)
        .setFooter("Cute | Bot", bot.displayAvatarURL);
        console.log(m_embed);

        return;
    }


    return;
})

bot.login(process.env.BOT_TOKEN);
const Discord = require(“discord.js”);

module.exports = class clear{

constructor{
this.name = “clear”
this.alias = [“c”]
this.usage = “_clear”
}

async run (bot, message, args) {
if(!message.member.hasPermission(“MANAGE_MESSAGES”)) return message.channel.send(“oof”);
if(!args[0]) return message.reply(“Provide a number”);
message.channel.bulkDelete(args[0]).then(() => {
message.channnel.send(“Cleared messages!”).then(msg => msg.delete(5000));
})
}

}

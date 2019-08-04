const Discord = require("discord.js");

module.exports = class clear {
  constructor{
    this.name = "clear"
    this.alias = ["c"]
    this.usage = "_clear"
  }
  async run(bot,message,args)    {
    if(!args[0]) return message.reply("oof");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send("CLEARED MESSAGES").then(msg => msg.delete(5000));
    });
  }
}

const Discord = require("discord.js");

module.exports = class say{
    constructor(){
        this.name = "say"
        this.alias = "tell"
        this.usage = "_say"
    }

    async run(bot, message, args){

        let botmessage = args.join(" ");
        message.delete().catch();
        message.channel.send(botmessage);

    }
}
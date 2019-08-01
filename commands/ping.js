module.exports = class ping {
    constructor(){
        this.name = "ping",
        this.alias = ["p"],
        this.usage = "_ping"
    }

    run(bot, message, args){
        message.reply("Pong!")
    }

}
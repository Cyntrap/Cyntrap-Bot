const Discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports = class play {
    constructor(){
        this.name = "play"
        this.alias = ["p"]
        this.usage = "_test"
    }

    async run (bot, message, args, serverQueue, queue){

    const voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send("Join a voice channel!");
    const permissions = voiceChannel.permissionsFor(bot.user);
    if(!permissions.has("CONNECT")) return message.channel.send("I cant connect to that voice channel!");
    if(!permissions.has("SPEAK")) return message.channel.send("I CANT SPEAK >_<");
    
    if(!args[0]) return message.channel.send("Please provide a link -_-");

    const songInfo = ytdl.getInfo(args[1]);
    const song = {
        title: songInfo.title,
        url: songInfo.video_url
    }
    if(!serverQueue) {
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 0.5,
            playing: true
        };
        queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);
        try {
            var connection = voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0], queue)
        }catch(e){
            console.log(e.stack);
            queue.delete(message.guild.id);
            return message.channel.send("Couldn't join voice channel!");
        }
    }else {
        serverQueue.songs.push(song);  
        console.log(serverQueue.songs);
        return message.channel.send(`🎵 ${song.title} has been added to the queue (${song.duration}) 🎵`);
    }
    function play(guild, song, queue) {
        const serverQueue = queue.get(guild.id);
    
        if (!song) {
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
        }
    
        const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
            .on('end', reason => {
                if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
                else console.log(reason);
                serverQueue.songs.shift();
                play(guild, serverQueue.songs[0]);
            })
            .on('error', error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    
        serverQueue.textChannel.send(`Start playing: **${song.title}**`);
    }

    }
}

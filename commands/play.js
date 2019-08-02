const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");

const youtube = new YouTube(process.env.API_KEY);

module.exports = class play {
    constructor(){
        this.name = "play"
        this.alias = ["p"]
        this.usage = "_test"
    }

    async run (bot, message, args, serverQueue, queue, searchString){

    const voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send("Join a voice channel!");
    const permissions = voiceChannel.permissionsFor(bot.user);
    if(!permissions.has("CONNECT")) return message.channel.send("I cant connect to that voice channel!");
    if(!permissions.has("SPEAK")) return message.channel.send("I CANT SPEAK >_<");
    
    if(!args[0]) return message.channel.send("Please provide a link -_-");

    const songInfo = ytdl.getInfo(args[1]);
    console.log(`This is the url ${songInfo.url}`);

    try {
        var video = await youtube.getVideo(songInfo.url);
    } catch (error) {
        try {
            var videos = await youtube.searchVideos(searchString, 1);
            var video = await youtube.getVideoByID(videos[0].id);
        } catch (err) {
            console.error(err);
            return msg.channel.send('I could not obtain any search results.');
        }
    }
    console.log(video);
    const song = {
        id: video.id,
        title: video.title,
        duration: video.duration,
        url: `https://www.youtube.com/watch?v=${video.id}`
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
    function play(guild, song) {
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

const Discord = require("discord.js");
const ytdl = require("ytdl-core");


module.exports.run = async (bot, message, args, serverQueue, queue) => {


    const voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send("Join a voice channel!");
    const permissions = voiceChannel.permissionsFor(bot.user);
    if(!permissions.has("CONNECT")) return message.channel.send("I cant connect to that voice channel!");
    if(!permissions.has("SPEAK")) return message.channel.send("I CANT SPEAK >_<");
    
    if(!args[0]) return message.channel.send("Please provide a link -_-");

    const songInfo = await ytdl.getInfo(args[0]);
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
            var connection = await voiceChannel.join();
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
        return message.channel.send(`🎵 ${song.title} has been added to the queue 🎵`);
    }

function play(guild, song, queue){
    const ytdl = require("ytdl-core");
    const serverQueue = queue.get(guild.id);

    if(!song){
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', ()=>{
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0], queue);
    }).on('error', error => console.log(error.stack));
    message.channel.send(`🎵 **Now Playing** --> ${song.title} 🎵`);
}

}

function skip(serverQueue, message){
    if(!message.member.voiceChannel) return message.channel.send("You are not in a voice channel. Dummy dum");
    if(!serverQueue){
        message.channel.send("No songs for me to skip >_<");
        
    }
    serverQueue.connection.dispatcher.end();
    message.channel.send(`🎵 **Skipped Song** 🎵`);
    return undefined;
}

function stop(serverQueue, message){
    const voiceChannel = message.member.voiceChannel;

    if(!voiceChannel) return message.channel.send("You are not in a voice channel. Dummy dum");
    if(!serverQueue){
        message.channel.send("Nothing is playing >_<");
    }
    serverQueue.songs = []
    serverQueue.connection.dispatcher.end();
    voiceChannel.leave();
    message.channel.send(`🎵 💀 🎵`);
    return undefined;
}

function pause(serverQueue){

    if(serverQueue && serverQueue.playing){
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return message.channel.send("🎵 Music is paused 🎵");

    }
    message.channel.send("No music is playing >_<");
}

function resume(serverQueue){
    if(serverQueue && !serverQueue.playing){
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        return message.channel.send("🎵 Continuing Music 🎵");

    }
    message.channel.send("Music is already playing >_<");
}

function volume(serverQueue){
    if(!serverQueue) return message.channel.send("There is no queue");
    message.channel.send(`Current volume: ${serverQueue.volume}`);
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    return undefined;
}



module.exports.skip = skip;
module.exports.stop = stop;
module.exports.pause = pause;
module.exports.resume = resume;




module.exports.help = {
    name: "play"
}
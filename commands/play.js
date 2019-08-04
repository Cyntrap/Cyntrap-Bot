const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const YouTube = require('simple-youtube-api');

const youtube = new YouTube(process.env.API_KEY);

module.exports = class play {
    constructor(){
        this.name = "play"
        this.alias = ["p"]
        this.usage = "_test"
    }

    async run (bot, message, args, serverQueue, queue, searchString,url){
        const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send("You must be in a voice channel to play music. Dummy dum");
		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send("I can't connect to that voice channel (＞﹏＜)");
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send("I don't have permission to speak (＞﹏＜)");
		}


		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)){
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();

			for(const video of Object.values(videos)){
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return message.channel.send(`🎵 **${playlist.title}** has been added 🎵`);
		}else{
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					let search_embed = new Discord.RichEmbed()
					.setTitle("🎵 ***Search Results*** 🎵")
					.setDescription(`
				${videos.map(video2 => `**${++index}.**  ${video2.title}`).join('\n')}
					
				Select the song you want by typing its number ^_^`)
					.setFooter("Cute Bot", bot.user.displayAvatarURL);
					message.channel.send(search_embed);
					// eslint-disable-next-line max-depth
					try {
						var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send('No or invalid value (`ー´)');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return message.channel.send("I couldn't find any results (>﹏<)");
				}
			}
			return handleVideo(video, message, voiceChannel);
		}


		async function handleVideo(video, message, voiceChannel, playlist = false){


			const serverQueue = queue.get(message.guild.id);
			const song = {
				id: video.id,
				title: video.title,
				url: `https://www.youtube.com/watch?v=${video.id}`
			};
			if (!serverQueue) {
				const queueConstruct = {
					textChannel: message.channel,
					voiceChannel: voiceChannel,
					connection: null,
					songs: [],
					volume: 1,
					playing: true
				};
				queue.set(message.guild.id, queueConstruct);
	
				queueConstruct.songs.push(song);
	
				try {
					var connection = await voiceChannel.join();
					queueConstruct.connection = connection;
					play(message.guild, queueConstruct.songs[0]);
				} catch (error) {
					console.error(`I couldn't join the voice channel: ${error}`);
					queue.delete(message.guild.id);
					return message.channel.send(`I couldn't join the voice channel: ${error}`);
				}
			} else {
				serverQueue.songs.push(song);
				if(playlist){
					return undefined;
				}else{
					return message.channel.send(`🎵 **${song.title}** has been added 🎵`);
				}
			}
			return undefined;
		}

		function play(guild, song) {
			const serverQueue = queue.get(guild.id);	

			if (!song) {
				serverQueue.voiceChannel.leave();
				queue.delete(guild.id);
				return;
			}

			
		
			const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
				.on('end', () => {
					serverQueue.songs.shift();
					play(guild, serverQueue.songs[0]);
				})
				.on('error', error => console.error(error));
			dispatcher.setVolumeLogarithmic(serverQueue.volume);
		
			serverQueue.textChannel.send(`🎵 **${song.title}** is now playing 🎵`);
			serverQueue.textChannel.send({
				files: ['https://cdn.discordapp.com/attachments/473585876098613251/607569910843047986/bobbing-head.gif']
			  })
				.then(console.log)
				.catch(console.error);
		}
	}
	
	
}

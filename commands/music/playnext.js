const { ApplicationCommandOptionType } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'playnext',
    description: "song you want to play next",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the song you want to playnext',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ inter }) { 
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `no music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        const song = inter.options.getString('song');

        const res = await player.search(song, {
            requestedBy: inter.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return inter.reply({ content: `no results found ${inter.member}... try again ? ❌`, ephemeral: true });

       if (res.playlist) return inter.reply({ content: `this command dose not support playlist's ${inter.member}... try again ? ❌`, ephemeral: true });

        queue.insert(res.tracks[0], 0)

        await inter.reply({ content:`track has been inserted into the queue... it will play next 🎧`});

    }
}
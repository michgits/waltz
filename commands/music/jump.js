const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'jump',
    description: "jumps to particular track in queue",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the name/url of the track you want to jump to',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'number',
            description: 'the place in the queue the song is in',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const track = inter.options.getString('song');
        const number =  inter.options.getNumber('number')

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `no music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });
        if (!track && !number) inter.reply({ content: `you have to use one of the options to jump to a song ${inter.member}... try again ? ❌`, ephemeral: true });

            if (track) {
        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.skipTo(song)
                return inter.reply({ content: `skipped to ${track} ✅` });
            }
        }
        return inter.reply({ content: `could not find ${track} ${inter.member}... try using the url or the full name of the song ? ❌`, ephemeral: true });    
    }
    if (number) {
        const index = number - 1
        const trackname = queue.tracks[index].title
        if (!trackname) return inter.reply({ content: `this track dose not seem to exist ${inter.member}...  try again ?❌`, ephemeral: true });   
        queue.skipTo(index);
        return inter.reply({ content: `jumped to ${trackname}  ✅` });
    }
         
    }
}
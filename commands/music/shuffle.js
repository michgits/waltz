module.exports = {
    name: 'shuffle',
    description: 'shuffles the track',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `no music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `no music in the queue after the current one ${inter.member}... try again ? ❌`, ephemeral: true });

        await queue.shuffle();

        return inter.reply({ content:`queue shuffled **${queue.tracks.length}** song(s) ! ✅`});
    },
};
module.exports = {
    name: 'skip',
    description: 'skips the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

         if (!queue || !queue.playing) return inter.reply({ content:`no music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `current music ${queue.current.title} skipped ✅` : `something went wrong ${inter.member}... try again ? ❌`});
    },
};
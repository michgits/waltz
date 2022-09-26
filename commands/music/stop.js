module.exports = {
    name: 'stop',
    description: 'stops the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content:`no music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        queue.destroy();

        inter.reply({ content: `music stopped intero this server, see you next time ✅`});
    },
};
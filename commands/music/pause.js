module.exports = {
    name: 'pause',
    description: 'pause the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `no music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: 'the track is currently paused!', ephemeral: true})

        if(queue.connection.paused) return inter.reply({content: `the track is currently paused, ${inter.member}... try again ? ❌`, ephemeral: true})

        const success = queue.setPaused(true);
        
        return inter.reply({ content: success ? `current music ${queue.current.title} paused ✅` : `something went wrong ${inter.member}... try again ? ❌` });
    },
};

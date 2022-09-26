const { QueueRepeatMode } = require('discord-player');
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'loop',
    description: 'enable or disable looping of song\'s or the whole queue',
    voiceChannel: true,
    options: [
        {
        name: 'action' ,
        description: 'what action you want to preform on the loop',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: 'queue', value: 'enable_loop_queue' },
            { name: 'disable', value: 'disable_loop'},
            { name: 'song', value: 'enable_loop_song' },
        ],
    }
    ],
    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `no music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });
        switch (inter.options._hoistedOptions.map(x => x.value).toString()) {
            case 'enable_loop_queue': {
                if (queue.repeatMode === 1) return inter.reply({ content:`you must first disable the current music in the loop mode (/loop Disable) ${inter.member}... try again ? ❌`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.QUEUE);

                return inter.reply({ content:success ? `repeat mode **enabled** the whole queue will be repeated endlessly 🔁` : `something went wrong ${inter.member}... try again ? ❌` });
                break
            }
            case 'disable_loop': {
                const success = queue.setRepeatMode(QueueRepeatMode.OFF);

                return inter.reply({ content:success ? `repeat mode **disabled**` : `something went wrong ${inter.member}... try again ? ❌` });
                break
            }
            case 'enable_loop_song': {
                if (queue.repeatMode === 2) return inter.reply({ content:`you must first disable the current music in the loop mode (/loop Disable) ${inter.member}... try again ? ❌`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.TRACK);
                
                return inter.reply({ content:success ? `repeat mode **enabled** the current song will be repeated endlessly (you can end the loop with /loop disable)` : `something went wrong ${inter.member}... try again ? ❌` });
                break
            }
        }
       
    },
};
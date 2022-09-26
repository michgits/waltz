const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'volume',
    description: 'adjusts sound volume of the song',
    voiceChannel: true,
    options: [
        {
            name: 'volume',
            description: 'the amount volume',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `no music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });
        const vol = inter.options.getNumber('volume')

        if (queue.volume === vol) return inter.reply({ content: `the volume you want to change is already the current one ${inter.member}... try again ? ❌`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `the volume has been modified to **${vol}**/**${maxVol}**% 🔊` : `something went wrong ${inter.member}... try again ? ❌`});
    },
};
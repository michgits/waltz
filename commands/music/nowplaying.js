const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    description: 'view what is playing!',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `no music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        const track = queue.current;

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();

        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        const progress = queue.createProgressBar();
        

        const embed = new EmbedBuilder()
        .setAuthor({ name: track.title,  iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setThumbnail(track.thumbnail)
        .setDescription(`volume **${queue.volume}**%\nduration **${trackDuration}**\nprogress ${progress}\nloop mode **${methods[queue.repeatMode]}**\nrequested by ${track.requestedBy}`)
        .setFooter({ text: 'music comes first - made by michu', iconURL: inter.member.avatarURL({ dynamic: true })})
        .setColor('#CFD5EA')
        .setTimestamp()

        const saveButton = new ButtonBuilder()
        .setLabel('save this track')
        .setCustomId(JSON.stringify({ffb: 'savetrack'}))
        .setStyle('Danger')

        const volumeup = new ButtonBuilder()
        .setLabel('volume up')
        .setCustomId(JSON.stringify({ffb: 'volumeup'}))
        .setStyle('Primary')

        const volumedown = new ButtonBuilder()
        .setLabel('volume down')
        .setCustomId(JSON.stringify({ffb: 'volumedown'}))
        .setStyle('Primary')

        const loop = new ButtonBuilder()
        .setLabel('loop')
        .setCustomId(JSON.stringify({ffb: 'loop'}))
        .setStyle('Danger')

        const resumepause = new ButtonBuilder()
         .setLabel('resume & pause')
         .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
         .setStyle('Success')



        const row = new ActionRowBuilder().addComponents(volumedown, saveButton, resumepause, loop, volumeup);

         inter.reply({ embeds: [embed], components: [row] });
    },
};
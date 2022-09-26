const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'save',
    description: 'saves the current track',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `no music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        inter.member.send({
            embeds: [
                new EmbedBuilder()
                    .setColor('Red')
                    .setTitle(`:arrow_forward: ${queue.current.title}`)
                    .setURL(queue.current.url)
                    .addFields(
                        { name: ':hourglass: duration:', value: `\`${queue.current.duration}\``, inline: true },
                        { name: 'song by:', value: `\`${queue.current.author}\``, inline: true },
                        { name: 'views :eyes:', value: `\`${Number(queue.current.views).toLocaleString()}\``, inline: true },
                        { name: 'song url:', value: `\`${queue.current.url}\`` }
                    )
                    .setThumbnail(queue.current.thumbnail)
                    .setFooter({text:`from the server ${inter.member.guild.name}`, iconURL: inter.member.guild.iconURL({ dynamic: false })})
            ]
        }).then(() => {
            return inter.reply({ content: `i have sent you the title of the music by private messages ✅`, ephemeral: true });
        }).catch(error => {
            return inter.reply({ content: `unable to send you a private message... try again ? ❌`, ephemeral: true });
        });
    },
};
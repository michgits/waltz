const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: "all the commands this bot has",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#CFD5EA')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription('this code comes from a github project [michgits/waltz](https://github.com/ZerioDev/Music-bot).')
        .addFields([ { name: `enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setTimestamp()
        .setFooter({ text: 'music comes first - made by michu', iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.reply({ embeds: [embed] });
    },
};
const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    name: 'controller',
    description: "set controller channel",
    voiceChannel: false,
    permissions: PermissionsBitField.Flags.ManageMessages,
    options: [
        {
            name: 'channel',
            description: 'the channel you want to send it to',
            type: ApplicationCommandOptionType.Channel,
            required: true,
        }
    ],
    async execute({ inter, client }) { 
      let Channel = inter.options.getChannel('channel');
      if (Channel.type !== 0) return inter.reply({ content: `you have to send it to a text channel.. ❌`, ephemeral: true})

    
      const embed = new EmbedBuilder()
       .setTitle('control your music from the buttons below')
       .setImage(inter.guild.iconURL({ size: 4096, dynamic: true }))
       .setColor('#CFD5EA')
       .setFooter({ text: 'music comes first - made by michu', iconURL: inter.member.avatarURL({ dynamic: true })})


         inter.reply({ content: `sending controller to ${Channel}... ✅`, ephemeral: true})

         const back = new ButtonBuilder()
         .setLabel('back')
         .setCustomId(JSON.stringify({ffb: 'back'}))
         .setStyle('Primary')

         const skip = new ButtonBuilder()
         .setLabel('skip')
         .setCustomId(JSON.stringify({ffb: 'skip'}))
         .setStyle('Primary')

         const resumepause = new ButtonBuilder()
         .setLabel('resume & pause')
         .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
         .setStyle('Danger')

         const save = new ButtonBuilder()
         .setLabel('save')
         .setCustomId(JSON.stringify({ffb: 'savetrack'}))
         .setStyle('Success')

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

         const np = new ButtonBuilder()
         .setLabel('now playing')
         .setCustomId(JSON.stringify({ffb: 'nowplaying'}))
         .setStyle('Secondary')
         
         const queuebutton = new ButtonBuilder()
         .setLabel('queue')
         .setCustomId(JSON.stringify({ffb: 'queue'}))
         .setStyle('Secondary')


         const row1 = new ActionRowBuilder().addComponents(back, queuebutton, resumepause, np, skip)
         const row2 = new ActionRowBuilder().addComponents(volumedown, loop, save, volumeup)



        Channel.send({ embeds: [embed], components: [row1, row2] })

    },
}

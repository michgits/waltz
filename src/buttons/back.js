module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `no music currently playing... try again ? ❌`, ephemeral: true });

    if (!queue.previousTracks[1]) return inter.reply({ content: `there was no music played before ${inter.member}... try again ? ❌`, ephemeral: true });

    await queue.back();

    inter.reply({ content:`playing the **previous** track ✅`, ephemeral: true});
}

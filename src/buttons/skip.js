module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `no music currently playing... try again ? ❌`, ephemeral: true });
    
    const success = queue.skip();

    return inter.reply({ content: success ? `current music ${queue.current.title} skipped ✅` : `something went wrong ${inter.member}... try again ? ❌`, ephemeral: true});
}
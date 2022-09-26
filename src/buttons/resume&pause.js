module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `no music currently playing... try again ? ❌`, ephemeral: true });

    const success = queue.setPaused(false);
    
    if (!success) queue.setPaused(true);
    

    return inter.reply({ content: `${success ? `current music ${queue.current.title} resumed ✅` : `current music ${queue.current.title} paused ✅`}`, ephemeral: true});
}

module.exports = async (client) => {
    console.log(`logged to the client ${client.user.username}\n-> ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`);
    client.user.setActivity(client.config.app.playing);

    
};

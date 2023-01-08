const ms = require('ms');

module.exports = {
    name: 'ping',
    description: "Get the ping of the bot!",
    async execute({ client, inter }) {

        const m = await inter.reply("ping?")
        inter.editReply(`pong! api latency is ${Math.round(client.ws.ping)}ms 🛰️, last heartbeat calculated ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} ago`)

    },
};

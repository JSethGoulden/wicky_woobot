export default {
    name: 'ping',
    auth: ['subscriber'],
    execute(client, channel, tags, message, args) {
        client.say(channel, 'pong');
    }
}
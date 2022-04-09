export default {
    name: 'q',
    auth: ['owner'],
    execute(client, channel, tags, message, args) {
        const delay = 1500;
        client.say(channel, 'Queues starting soon!');
        // TODO write something that doesn't make my eyes bleed thanks
        setTimeout(() => { client.say(channel, '3...'); }, delay);
        setTimeout(() => { client.say(channel, '2...'); }, delay * 2);
        setTimeout(() => { client.say(channel, '1...'); }, delay * 3);
        setTimeout(() => { client.say(channel, 'Queue!'); }, delay * 4);
    }
}
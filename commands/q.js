export default {
    name: 'q',
    auth: ['owner'],
    async execute(client, channel, tags, message, args) {
        const delay = args[0] ?? 1500;
        const sleep = ms => { return new Promise(resolve => setTimeout(resolve, ms)) }

        const countDown = async i => {
            client.say(channel, 'Queues are starting soon!')
            while (i > 0) {
                client.say(channel, `${i--}...`)
                await sleep(delay);
            }
            client.say(channel, 'Queue up!!')
        }
        let counter = countDown(3);
        return counter.then(resolve => resolve);
    }
}
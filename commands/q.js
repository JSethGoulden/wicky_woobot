export default {
    name: 'q',
    auth: ['owner'],
    execute(client, channel, tags, message, args) {
        const delay = 1500;
        const sleep = ms => { return new Promise(resolve => setTimeout(resolve, ms)) }

        const countDown = async i => {
            client.say(channel, 'Queues are starting soon!')
            while (i > 0) {
                client.say(channel, `${i--}...`)
                await sleep(delay);
            }
            client.say(channel, 'Queue up!!')
        }
        countDown(3);
    }
}
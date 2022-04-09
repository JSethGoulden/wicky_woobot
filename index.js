import 'dotenv/config';
import tmi from 'tmi.js';
import commands from './commandLoader.js';

const client = new tmi.Client({
    options: { debug: false },
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.BOT_PASSWORD
    },
    channels: ['wicky_woo'],
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if (self || !message.startsWith('!')) return;

    const args = message.slice(1).split(' ');
    const commandString = args.shift().toLowerCase();
    const command = commands[commandString];

    if (!command) {
        return;
    }

    if (isAuthorized(tags, command.auth)) {
        command.execute(client, channel, tags, message, args);
    }

});


const isAuthorized = (tags, auths) => {
    let authorized = true;
    auths.every(auth => {
        switch (auth) {
            case 'owner':
                authorized = tags.username === 'wicky_woo'
                break;
            case 'subscriber':
                authorized = tags.subscriber
                break;
        }
    })
    return authorized;
}

client.on('join', (channel, username) => {
    console.log(`${username} has joined the chat.`);
});

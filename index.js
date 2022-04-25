import 'dotenv/config';
import tmi from 'tmi.js';
import fetch from 'node-fetch';
import commands from './commandLoader.js';
import isAuthorized from './auth.js';
import bots from './bots.js';
import initRealmApi from './realmApi.js';
import consoleColor from './util/consoleColor.js';

const channel = 'wicky_woo';

const client = new tmi.Client({
    options: { debug: false },
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.BOT_PASSWORD
    },
    channels: [channel],
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if (tags.username === 'wicky_woo' && message.toLowerCase() === 'good bot') return client.say(channel, 'AYAYA')
    if (self || !message.startsWith('!')) return;

    const args = message.slice(1).split(' ');
    const commandString = args.shift().toLowerCase();
    const command = commands[commandString];

    if (!command) return;

    if (!isAuthorized(tags, command.auth)) return;

    command.execute(client, channel, tags, message, args);
});

client.on('join', (channel, username) => {
    console.log(`${username} has joined the chat.`);
});

client.on('connected', () => {
    initRealmApi(client, channel);
});

const displayRealChatUsers = async () => {
    console.clear();
    console.log('---Chat List ---');

    const response = await fetch('https://tmi.twitch.tv/group/user/wicky_woo/chatters');
    let chat = false;

    try {
        chat = await response.json();
    } catch (e) {
        return console.log(`Failed to parse twich response with error ${e}`);
    }

    if (!chat) return;

    const filteredViewers = chat.chatters.viewers.filter(viewer => !bots[viewer]);

    chat.chatters.moderators.forEach(mod => console.log(consoleColor('cyan', mod)));

    filteredViewers.forEach(viewer => console.log(consoleColor('default', viewer)));

    console.log(`${consoleColor('red', chat.chatters.viewers.length - filteredViewers.length)} known bot(s) were hidden`);
}

setInterval(displayRealChatUsers, 1000 * 60 * 1);
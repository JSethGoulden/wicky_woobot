export default {
    name: 'stats',
    auth: [''],
    execute(client, channel, tags, message, args) {
        client.say(channel, 'FFLogs: https://www.fflogs.com/character/id/8453433 | RealmTracker: https://realmtracker.com/profile/pc/1802569');
    }
}
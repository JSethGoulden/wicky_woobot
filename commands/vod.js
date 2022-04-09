export default {
    name: 'vod',
    auth: [],
    execute(client, channel, tags, message, args) {
        if (args.length == 0) return;

        const vods = {
            'p1s': 'https://www.twitch.tv/videos/1257866068',
            'p2s': 'https://www.twitch.tv/videos/1257867175',
            'p3s': 'https://www.twitch.tv/videos/1257862635'
        }

        const vod = vods[args[0].toLowerCase()] ?? 'Vod not found NotLikeThis';

        client.say(channel, vod);
    }
}
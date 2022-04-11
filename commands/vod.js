export default {
    name: 'vod',
    auth: [],
    execute(client, channel, tags, message, args) {
        if (args.length == 0) client.say(channel, `Usage: !${this.name} <vod name>`);

        const vods = {
            'tea': 'https://www.twitch.tv/videos/540833355',

            'p4s': 'clear wasn\'t recorded :(',
            'p3s': 'https://www.twitch.tv/videos/1257862635',
            'p2s': 'https://www.twitch.tv/videos/1257867175',
            'p1s': 'https://www.twitch.tv/videos/1257866068',

            'e12s': 'https://www.twitch.tv/videos/854112722',
            'e11s': 'https://www.twitch.tv/videos/835760517',
            'e10s': 'https://www.twitch.tv/videos/835749412',
            'e9s': 'https://www.twitch.tv/videos/835738691',

            'e8': 'https://www.twitch.tv/videos/565213050',
            'e7s': 'https://www.twitch.tv/videos/556458291',
            'e6s': 'https://www.twitch.tv/videos/555973733',
            'e5s': 'https://www.twitch.tv/videos/555972688',

            'e4s': 'clear wasn\'t recorded :(',
            'e3s': 'https://www.twitch.tv/videos/461841933',
            'e2s': 'https://www.twitch.tv/videos/461388286',
            'e1s': 'https://www.twitch.tv/videos/461388857',
        }

        const vod = vods[args[0].toLowerCase()] ?? 'Vod not found NotLikeThis';

        client.say(channel, vod);
    }
}
import jest from 'jest-mock';
import q from '../q.js';
import vod from '../vod.js';

//default arguments expected in every chat command
const client = {
    say: jest.fn((channel, msg) => { return msg })
}
const channel = "wicky_woo";
const tags = {

}
const message = '';
const args = [];

beforeEach(() => {
    client.say.mockClear();
});

describe('chat commands', () => {
    describe('q', () => {
        test('sends exactly 5 chat messages', async () => {
            const cmd = await q.execute(client, channel, tags, message, [1]);
            expect(client.say.mock.calls.length).toBe(5);
        });
    });
    describe('vod', () => {
        test('sends exactly 1 chat message', () => {
            vod.execute(client, channel, tags, message, ['p1s']);
            expect(client.say.mock.calls.length).toBe(1);
        });

        test('sends an error message if the vod is not found', () => {
            vod.execute(client, channel, tags, message, ['notfound']);
            expect(client.say.mock.results[0].value).toBe('Vod not found NotLikeThis');
        });

        test('sends an appropriate link or message if the vod is found', () => {
            vod.execute(client, channel, tags, message, ['p1s']);
            expect(client.say.mock.results[0].value).not.toBe('Vod not found NotLikeThis');
        })
    })
}); 

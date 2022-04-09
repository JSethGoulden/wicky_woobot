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
describe('chat commands', () => {
    describe('q', () => {
        test('sends exactly 5 chat messages', async () => {
            const cmd = await q.execute(client, channel, tags, message, [1]);
            expect(client.say.mock.calls.length).toBe(5);
        });
    });
});

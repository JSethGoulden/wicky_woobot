import jest from 'jest-mock';
import q from '../q.js';
import vod from '../vod.js';
import randomize from '../randomize.js';
import { characters, weapons, movementAbilities, supportAbilities, offenseAbilities, forges } from '../../gameData.js';

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
    });

    describe('randomize', () => {
        test('sends exactly 1 chat message', () => {
            randomize.execute(client, channel, tags, message, [1]);
            expect(client.say.mock.calls.length).toBe(1);
        });

        test('contains one item from every category', () => {
            randomize.execute(client, channel, tags, message, [1]);
            let result = client.say.mock.results[0].value;

            expect(characters.some(character => result.includes(character.name))).toBe(true);
            expect(weapons.some(weapon => result.includes(weapon.name))).toBe(true);
            expect(movementAbilities.some(movementAbility => result.includes(movementAbility.name))).toBe(true);
            expect(supportAbilities.some(supportAbility => result.includes(supportAbility.name))).toBe(true);
            expect(offenseAbilities.some(offenseAbility => result.includes(offenseAbility.name))).toBe(true);
        });

        test('contains only words from game data objects', () => {
            randomize.execute(client, channel, tags, message, [1]);
            let result = client.say.mock.results[0].value;

            characters.forEach((char) => (result = result.replace(char.name, '')));
            weapons.forEach((weapon) => (result = result.replace(weapon.name, '')));
            supportAbilities.forEach((sup) => (result = result.replace(sup.name, '')));
            offenseAbilities.forEach((off) => (result = result.replace(off.name, '')));
            movementAbilities.forEach((mov) => (result = result.replace(mov.name, '')));

            result = result.replaceAll('-', '');
            result = result.trim();

            expect(result).toStrictEqual('');
        });
    });
}); 

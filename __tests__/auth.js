import isAuthorized from '../auth.js';

const fakeUsers = {
    owner: {
        username: "wicky_woo",
        subscriber: true
    },
    subscriber: {
        username: "a_subscribed_user",
        subscriber: true
    },
    nonSubscriber: {
        username: "not_a_subbscribed_user",
        subscriber: false
    },
};

const auths = {
    ownerOnlyCommand: ['owner'],
    subscriberOnlyCommand: ['subscriber'],
    everyoneCommand: []
};
describe('the authorization function', () => {

    test('allows the owner to use owner-only commands', () => {
        expect(isAuthorized(fakeUsers.owner, auths.ownerOnlyCommand)).toBe(true);
    });

    test('allows the owner to use sub commands', () => {
        expect(isAuthorized(fakeUsers.owner, auths.subscriberOnlyCommand)).toBe(true);
    });

    test('rejects non-owners who use owner-only commands', () => {
        expect(isAuthorized(fakeUsers.subscriber, auths.ownerOnlyCommand)).toBe(false);
        expect(isAuthorized(fakeUsers.nonSubscriber, auths.ownerOnlyCommand)).toBe(false);
    });

    test('allows subscribers to use sub commands', () => {
        expect(isAuthorized(fakeUsers.subscriber, auths.subscriberOnlyCommand)).toBe(true);
    });

    test('rejects non-subscribers who use sub commands', () => {
        expect(isAuthorized(fakeUsers.nonSubscriber, auths.subscriberOnlyCommand)).toBe(false);
    });

    test('allows all forms of users to use commands which do not have any auth specified', () => {
        expect(isAuthorized(fakeUsers.owner, auths.everyoneCommand)).toBe(true)
        expect(isAuthorized(fakeUsers.subscriber, auths.everyoneCommand)).toBe(true)
        expect(isAuthorized(fakeUsers.nonSubscriber, auths.everyoneCommand)).toBe(true)
    });
});
